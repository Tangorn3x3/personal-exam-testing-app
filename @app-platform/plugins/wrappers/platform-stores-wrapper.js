import supportStore from "../../store/platformSupportStore";
import permissionsStore from "../../store/permissionsStore";
import utilsStore from "../../store/utils";
import i18nStore from "../../store/i18n";

export default ({ app, store }) => {
    store.registerModule('support', supportStore)
    store.registerModule('permissions', permissionsStore)
    store.registerModule('utils', utilsStore)
    store.registerModule('i18n', i18nStore)

    store.subscribe(({ type, payload }, state) => {
        if (type.startsWith('auth')) {
            console.log('Изменение состояния auth:', type, payload);
            store.dispatch('permissions/fetchAllPermissions')
        }
    });
}