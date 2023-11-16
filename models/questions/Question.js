/* eslint-disable no-mixed-operators */
import _ from 'lodash'

class Question {
    constructor (props) {
        this.initialize(props)
    }

    initialize (props) {
        /** @type {String} */ this.id = _.get(props, 'id') || null
        /** @type {String} */ this.test = _.get(props, 'test') || null
        /** @type {String} */ this.status = _.get(props, 'status') || null

        /** @type {Number} */ this.position = _.get(props, 'position') || null
        /** @type {String} */ this.selectType = _.get(props, 'selectType') || null

        /** @type {String[]} */ this.answers = _.get(props, 'answers') || []
        /** @type {QuestionContentItem[]} */ this.answerDescriptionContents = _.get(props, 'answerDescriptionContents') || null

        /** @type {QuestionContentItem[]} */ this.questionContents = _.get(props, 'questionContents') || []

        /** @type {QuestionOption[]} */ this.options = _.get(props, 'options') || null

    }
}

export default Question
// JsDoc:
//{{ id: String, test: String, status: String, selectType: String, position: Number, answers: String, answerDescription: String, question: String, options: String }}
