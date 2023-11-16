/* eslint-disable no-mixed-operators */
import _ from 'lodash'

class QuestionOption {
    constructor (props) {
        this.initialize(props)
    }

    initialize (props) {
        /** @type {String} */ this.key = _.get(props, 'key') || null

        /** @type {QuestionContentItem[]} */ this.contents = _.get(props, 'contents') || []

    }
}

export default QuestionOption
// JsDoc:
//{{ key: String, type: String, text: String, images: String }}
