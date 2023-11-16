import nuxtConfig, {APP_NAME} from "@/nuxt.config";
import {PlatformCrudTableDesc} from "@/@app-platform/services/platformCrudService";

/** @type {Object.<string, PlatformCrudTableDesc>} */
export const PlatformCrudTables = Object.freeze({
    courses: new PlatformCrudTableDesc({ code: 'courses', table: 'dict_courses', name: 'Курсы', cacheable: true}),
    tests: new PlatformCrudTableDesc({ code: 'tests', table: 'dict_tests', name: 'Тесты', cacheable: true}),
    questions: new PlatformCrudTableDesc({ code: 'questions', table: 'dict_questions', name: 'Вопросы', cacheable: false}),

    attempts: new PlatformCrudTableDesc({ code: 'attempts', table: 'data_results', name: 'Результаты', cacheable: false}),
});

export default {
    appName: APP_NAME,

    platformApiUrl: nuxtConfig.platformApiUrl,
    platformCrud: {
        cacheEnabled: true,
        cachePrefix: 'personal-exam-testing__',
    },
}