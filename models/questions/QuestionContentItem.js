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

        /** @type {Number} */ this.hashCode = getHashCode(this)
    }

    static createText (text) {
        return new QuestionContentItem({ type: ContentType.TEXT, text })
    }
    static createImage (imageLink) {
        return new QuestionContentItem({ type: ContentType.IMAGE, image: imageLink })
    }

    generateHash () {
        return this.text + this.image
    }
}

export const ContentType = Object.freeze({
    TEXT: 'TEXT',
    IMAGE: 'IMAGE',
});

function getHashCode(obj) {
    let hashCode = 0;

    for (const key in obj) {
        if (obj.hasOwnProperty(key) && key !== 'hashCode') {
            const value = obj[key];
            const stringValue = typeof value === 'object' ? getHashCode(value) : String(value);
            for (let i = 0; i < stringValue.length; i++) {
                const char = stringValue.charCodeAt(i);
                hashCode = (hashCode << 5) - hashCode + char;
            }
        }
    }

    return hashCode;
}

export default QuestionContentItem
// JsDoc:
//{{ type: String, text: String, image: String }}
