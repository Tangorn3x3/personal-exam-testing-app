/* eslint-disable no-mixed-operators */
import _ from 'lodash'

class ExamAttempt {
    constructor (props) {
        this.initialize(props)
    }

    initialize (props) {
        /** @type {String} */ this.id = _.get(props, 'id') || null
        /** @type {String} */ this.user = _.get(props, 'user') || null
        /** @type {String} */ this.test = _.get(props, 'test') || null
        /** @type {String} */ this.status = _.get(props, 'status') || null
        /** @type {Number} */ this.num_to_answer = _.get(props, 'num_to_answer') || 0
        /** @type {Number} */ this.num_correct = _.get(props, 'num_correct') || 0
        /** @type {Number} */ this.num_failed = _.get(props, 'num_failed') || 0
        /** @type {String} */ this.attempt_started = _.get(props, 'attempt_started') || null
        /** @type {String} */ this.attempt_ended = _.get(props, 'attempt_ended') || null
        /** @type {String} */ this.raw_result = _.get(props, 'raw_result') || null
    }
}

export const ExamAttemptStatus = Object.freeze({
    PASSED: 'PASSED',
    FAILED: 'FAILED',
});


export default ExamAttempt
// JsDoc:
//{{ id: String, user: String, test: String, status: String, num_to_answer: Number, num_correct: String, num_failed: String, attempt_started: String, attempt_ended: String, raw_resul: String }}
