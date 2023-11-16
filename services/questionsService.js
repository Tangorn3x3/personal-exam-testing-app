import _ from "lodash";
import moment from "moment";

import * as crudService from "@/@app-platform/services/platformCrudService";
import {PlatformCrudTables} from "@/appConfig";
import {convertQuestionEntity} from "@/utils/questionUtils";
import Answer from "@/models/answers/Answer";
import ExamAttempt, {ExamAttemptStatus} from "@/models/entities/ExamAttempt";
import {_initialState} from "@/store/currentAttemptStore";

export const PASSING_MINIMUM_PERCENT = 68


let store = null
export function _initialize(storeInstance) {
    store = storeInstance
}


export async function startNewAttempt(testName) {
    let items = await fetchAndConvertQuestions(testName)
    store.commit('currentAttemptStore/setUnified', _initialState())

    store.commit('currentAttemptStore/setUnified', { currentQuestions: items })

    let answers = items.map(item => new Answer({ questionId: item.id }))
    store.commit('currentAttemptStore/setUnified', { currentAnswers: answers })
    store.commit('currentAttemptStore/setUnified', { attemptStarted: moment().format('YYYY-MM-DD HH:mm:ss') })

    store.commit('utils/setTitle', testName)

    return items
}

export function isAnswerCorrect(targetAnswers, performedAnswers) {
    return JSON.stringify(_.cloneDeep(targetAnswers).sort())
        ===
        JSON.stringify(_.cloneDeep(performedAnswers).sort());
}

/**
 * @param {Question[]} questions
 * @param {Answer[]} currentAnswers
 * @returns {ExamAttempt}
 */
export function calculateAttemptResult(questions, currentAnswers) {

    let correctAnswers = 0
    let incorrectAnswers = 0

    questions.forEach(question => {
        let performedAnswers = _.find(currentAnswers, { questionId: question.id }).answers
        if (isAnswerCorrect(question.answers, performedAnswers)) correctAnswers++
        else incorrectAnswers++
    })

    let correctPercent = Math.round(correctAnswers / questions.length * 100)

    return new ExamAttempt({
        test: questions[0].test,
        status: correctPercent >= PASSING_MINIMUM_PERCENT ? ExamAttemptStatus.PASSED : ExamAttemptStatus.FAILED,
        num_to_answer: questions.length,
        num_correct: correctAnswers,
        num_failed: incorrectAnswers,
        raw_result: JSON.stringify(currentAnswers),
    })
}

export function saveAttemptResult(result) {
    result.attempt_ended = moment().format('YYYY-MM-DD HH:mm:ss')
    result.user = store.state.auth.user.email
    return crudService.create(PlatformCrudTables.attempts, result)
}


export async function fetchAndConvertQuestions(testName) {
    const cacheKey = prepareQuestionCacheKey(testName)
    let resultItems = []

    let cached = crudService.getCache(cacheKey)
    if (cached)
        resultItems = cached
    else {
        resultItems = await crudService.list(PlatformCrudTables.questions, { test: testName })
        crudService.putCache(cacheKey, resultItems)
    }

    return resultItems.map(item => convertQuestionEntity(item))
}

function prepareQuestionCacheKey(testName) {
    return crudService.prepareCacheKey(`${PlatformCrudTables.questions.code}-${_.snakeCase(testName)}`);
}