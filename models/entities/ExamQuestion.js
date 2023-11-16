/* eslint-disable no-mixed-operators */
import _ from 'lodash'

class ExamQuestion {
    constructor (props) {
        this.initialize(props)
    }

    initialize (props) {
        /** @type {String} */ this.id = _.get(props, 'id') || null
        /** @type {String} */ this.test = _.get(props, 'test') || null
        /** @type {String} */ this.status = _.get(props, 'status') || null
        /** @type {String} */ this.select_type = _.get(props, 'select_type') || null
        /** @type {Number} */ this.position = _.get(props, 'position') || null
        /** @type {String} */ this.answers = _.get(props, 'answers') || null
        /** @type {String} */ this.answer_description = _.get(props, 'answer_description') || null
        /** @type {String} */ this.question = _.get(props, 'question') || null
        /** @type {String} */ this.options = _.get(props, 'options') || null
    }
}


export const ExamQuestionStatus = Object.freeze({
    ENABLED: 'ENABLED',
    DISABLED: 'DISABLED',
});

export const ExamQuestionSelectType = Object.freeze({
    SINGLE: 'SINGLE',
    MULTI: 'MULTI',
});

export default ExamQuestion
