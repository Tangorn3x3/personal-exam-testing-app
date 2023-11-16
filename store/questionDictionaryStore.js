import * as _ from "lodash";
import * as crudService from "@/@app-platform/services/platformCrudService";
import {PlatformCrudTables} from "@/appConfig";
import {commonMutations} from "@/@app-platform/utils/storeUtils";

export const state = () => ({
    /** @type {ExamCourse[]}*/
    courses: [],
    /** @type {ExamTest[]}*/
    tests: [],

    selectedCourse: null,
})

export const getters = {

}

export const actions = {
    /** @returns {Promise<ExamCourse[]>} */
    async fetchCourses({commit, rootState}) {
        let items = await crudService.list(PlatformCrudTables.courses)

        commit('setUnified', { courses: items })
        return items
    },

    /** @returns {Promise<ExamTest[]>} */
    async fetchTests({commit, rootState}) {
        let items = await crudService.list(PlatformCrudTables.tests)

        commit('setUnified', { tests: items })
        return items
    },
}

export const mutations = {...commonMutations, ...{}}