import * as _ from "lodash";
import {ExamQuestionStatus} from "@/models/entities/ExamQuestion";
import {commonMutations} from "@/@app-platform/utils/storeUtils";
import * as questionsService from "@/services/questionsService";
import Vue from "vue";
import notificationService from "@/@app-platform/services/notificationService";
import {isAnswerCorrect} from "@/services/questionsService";

export function _initialState () {
    return {
        /** @type {Question[]}*/
        currentQuestions: [],

        /** @type {Answer[]} */
        currentAnswers: [],

        currentQuestionIndex: 0,
        currentQuestionId: null,

        attemptStarted: null,
    }
}

export const state = () => (_initialState())


export const getters = {
    activeQuestions (state, getters, rootState) {
        return _.orderBy(_.filter(state.questions, { status: ExamQuestionStatus.ENABLED }),
            ['position'], ['asc']
        )
    },
    currentQuestion (state, getters, rootState) {
        return state.currentQuestions[state.currentQuestionIndex]
    },
    currentQuestionAnswers (state, getters, rootState) {
        return getters.currentQuestion.options
    },
    currentQuestionPerformedAnswers (state, getters, rootState) {
        let questionId = getters.currentQuestion.id
        return _.find(state.currentAnswers, { questionId: questionId }).answers
    },
    currentQuestionIsCorrect(state, getters, rootState) {
        return isAnswerCorrect(getters.currentQuestion.answers, getters.currentQuestionPerformedAnswers)
    },
    allowNextQuestion (state, getters, rootState) {
        return state.currentQuestionIndex < state.currentQuestions.length - 1
    },
    allowPrevQuestion (state, getters, rootState) {
        return state.currentQuestionIndex > 0
    }
}

export const actions = {

    /** @returns {Promise<Question>} */
    async fetchQuestionsByTest({commit, rootState}, testName) {
        let items = await questionsService.fetchAndConvertQuestions(testName)

        commit('setUnified', { currentQuestions: items })
        return items
    },

    /**
     * @param {ExamAttempt} result
     */
    async saveAttemptResult({commit, rootState, state}, result) {
        result.attempt_started = state.attemptStarted
        result.user = rootState.auth.user.email

        let savedItem = await questionsService.saveAttemptResult(result)
        commit('setUnified', _initialState())

        return savedItem
    }
}

export const mutations = {...commonMutations, ...{

    updateFullAnswer (state, { questionId, answers }) {

        const indx = _.findIndex(state.currentAnswers, { questionId: questionId })
        if (indx < 0) {
            notificationService.showError(`Не найден ответ для вопроса ${questionId}`, 'Ошибка отметки ответа')
            return false
        }

        let targetAnswer = _.cloneDeep(state.currentAnswers[indx])
        targetAnswer.answers = answers

        Vue.set(state.currentAnswers, indx, targetAnswer)
    },

    updateAnswer (state, { questionId, answer, selected }) {
        const indx = _.findIndex(state.currentAnswers, { questionId: questionId })
        if (indx < 0) {
            notificationService.showError(`Не найден ответ для вопроса ${questionId}`, 'Ошибка отметки ответа')
            return false
        }

        let targetAnswer = _.cloneDeep(state.currentAnswers[indx])
        let answers = targetAnswer.answers || []
        if (selected) {
            if (!answers.includes(answer)) answers.push(answer)
        } else {
            if (answers.includes(answer)) _.pull(answers, answer)
        }
        targetAnswer.answers = answers

        Vue.set(state.currentAnswers, indx, targetAnswer)
    },

    nextQuestion (state) {
        state.currentQuestionIndex++
        state.currentQuestionId = state.currentQuestions[state.currentQuestionIndex].id
    },
    prevQuestion (state) {
        state.currentQuestionIndex--
        state.currentQuestionId = state.currentQuestions[state.currentQuestionIndex].id
    }
}}