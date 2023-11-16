import {fetchAction, getToken, serverActions} from "./platformApiClient";
import notificationService from "./notificationService";

export async function fetchPlatformInfo() {
    let token = getToken()
    if (!token) return null;

    try {
        return await fetchAction(serverActions.app_info)
    } catch (error) {
        console.error('Error while fetching app info', error)
        notificationService.showError(error.toString(), 'Получение информации о приложении')
        throw error
    }
}