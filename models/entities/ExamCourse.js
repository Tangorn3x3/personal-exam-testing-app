/* eslint-disable no-mixed-operators */
import _ from 'lodash'

class ExamCourse {
    constructor (props) {
        this.initialize(props)
    }

    initialize (props) {
        /** @type {String} */ this.id = _.get(props, 'id') || null
        /** @type {String} */ this.name = _.get(props, 'name') || null

    }
}

export default ExamCourse
// JsDoc:
//{{ id: String, name: String }}
