let app
let platformUrl

let retryActionOnUnauthorized = false
let queuedActions = []

export const serverActions = {
    test_route: 'test_route',
    auth_user_info: 'auth_user_info',
    app_info: 'app_info',


}

export const serverApiParameters = {
    action: 'action',
    table: 'table',
    token: 'token',
    id: 'id',
    search: '_search',
}

export function initialize(baseUrl, appInstance, retryOnUnauthorized = false) {
    app = appInstance
    platformUrl = baseUrl
    retryActionOnUnauthorized = retryOnUnauthorized
}

export async function fetchAction(action, options = {}) {
    setGlobalLoading(true)

    let targetQuery = {}

    //region добавляем стандартные параметры
    targetQuery[serverApiParameters.action] = action

    let currentToken = getToken()
    if (currentToken) targetQuery[serverApiParameters.token] = currentToken

    if (options.search) targetQuery[serverApiParameters.search] = JSON.stringify(options.search)

    if (options.table) targetQuery[serverApiParameters.table] = options.table

    if (options.body) targetQuery = {...targetQuery, ...options.body}

    if (options.id) targetQuery[serverApiParameters.id] = options.id
    //endregion

    let targetUrl = platformUrl + '?' + new URLSearchParams(targetQuery).toString();

    /** @type {ResponseEntity} */
    let response = null

    try {
        let responseEntity = await fetch(targetUrl)
        /** @type {ResponseEntity} */
        response = await responseEntity.json()
    } catch (e) {
        setGlobalLoading(false)
        throw e;
    }

    if (response.resultCode === ResponseCode.UNAUTHORIZED) {
        if (retryActionOnUnauthorized) queueAction(action, options)

        setGlobalLoading(false)
        console.error('User is UNAUTHORIZED. Redirecting to login page', response)

        app.$auth.logout()
        return null;
    }

    if (response.resultCode !== ResponseCode.OK) {
        setGlobalLoading(false)

        console.error('Response error', response)
        throw new Error(response.details)
    }

    setGlobalLoading(false)
    return response.result
}

export function getToken() {
    let currentStrategy = app.$auth.$storage.state.strategy
    return app.$auth.$storage._state[`_token.${currentStrategy}`]
}

export function queueAction(action, options = {}) {
    queuedActions.push({action, options})
    localStorage.setItem('queuedActions', JSON.stringify(queuedActions))
}

export function clearQueuedActions() {
    console.warn('Clearing queued actions')
    localStorage.removeItem('queuedActions')
    queuedActions = []
}

export function executeQueuedActions() {

    let actions = queuedActions
    if (!actions || !actions.length) {
        let actionsString = localStorage.getItem('queuedActions')
        if (actionsString)
            actions = JSON.parse(actionsString)
    }

    console.warn('Executing queued actions', queuedActions)
    if (!actions.length) return


    actions.forEach(action => {
        fetchAction(action.action, action.options)
            .then(() => {
                app.$notifications.showSnackbar(`Отложенное действие ${action.action} отправлено на сервер`)
            })
            .catch(error => {
                app.$notifications.showErrorAlert(error.toString(), 'Ошибка отправки отложенного действия')
            })
    })

    clearQueuedActions()
}

export const ResponseCode = Object.freeze({
    OK: 'OK',
    FAIL: 'FAIL',
    EXCEPTION: 'EXCEPTION',
    UNAUTHORIZED: 'UNAUTHORIZED'
})

function setGlobalLoading(isLoading) {
    if (!app || !app.$store) return

    if (app.$store.state.utils && app.$store.state.utils.loading) {
        app.$store.commit('utils/setLoading', isLoading)
    }
}

class ResponseEntity {
    constructor() {
        this.result = null;
        this.resultCode = null;
        this.details = null;

        this._validationErrors = undefined;
        this._meta = null;
    }
}