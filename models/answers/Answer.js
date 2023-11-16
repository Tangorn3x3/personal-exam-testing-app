/* eslint-disable no-mixed-operators */
import _ from 'lodash'

class Answer {
    constructor (props) {
        this.initialize(props)
    }

    initialize (props) {
        /** @type {String} */ this.questionId = _.get(props, 'questionId') || null
        /** @type {String[]} */ this.answers = _.get(props, 'answers') || []
    }
}

export default Answer
