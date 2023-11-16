import nuxtConfig, {APP_NAME} from "@/nuxt.config";
import {PlatformCrudTableDesc} from "@/@app-platform/services/platformCrudService";

/** @type {Object.<string, PlatformCrudTableDesc>} */
export const PlatformCrudTables = Object.freeze({
    coursesGroups: new PlatformCrudTableDesc({ code: 'coursesGroups', table: 'dict_course_groups', name: 'Группы курсов', cacheable: true}),
});

export default {
    appName: APP_NAME,

    platformApiUrl: nuxtConfig.platformApiUrl,
    platformCrud: {
        cacheEnabled: true,
        cachePrefix: 'personal-exam-testing__',
    },
}