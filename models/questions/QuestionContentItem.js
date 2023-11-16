/* eslint-disable no-mixed-operators */
import _ from 'lodash'

class QuestionContentItem {
    constructor (props) {
        this.initialize(props)
    }

    initialize (props) {
        /**  @type {String}
         *   @see ContentType  */
        this.type = _.get(props, 'type') || null

        /** @type {String} */ this.text = _.get(props, 'text') || null
        /** @type {String} */ this.image = _.get(props, 'image') || null

    }

    static createText (text) {
        return new QuestionContentItem({ type: ContentType.TEXT, text })
    }
    static createImage (imageLink) {
        return new QuestionContentItem({ type: ContentType.IMAGE, image: imageLink })
    }
}

export const ContentType = Object.freeze({
    TEXT: 'TEXT',
    IMAGE: 'IMAGE',
});

export default QuestionContentItem
// JsDoc:
//{{ type: String, text: String, image: String }}
