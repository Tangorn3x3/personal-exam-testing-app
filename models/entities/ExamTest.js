/* eslint-disable no-mixed-operators */
import _ from 'lodash'

class ExamTest {
    constructor (props) {
        this.initialize(props)
    }

    initialize (props) {
        /** @type {String} */ this.id = _.get(props, 'id') || null
        /** @type {String} */ this.name = _.get(props, 'name') || null
        /** @type {String} */ this.course = _.get(props, 'course') || null

    }
}

export default ExamTest
// JsDoc:
//{{ id: String, name: String, course: String }}
