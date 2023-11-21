<script>
import {ContentType} from "@/models/questions/QuestionContentItem";
import {convertMarkdownToHTML, highlightJavaKeywords} from "@/utils/questionUtils";

const REFORMAT_EXTRA_REPLACE_AWARE_STRINGS = new Map([
  ['. Option', '.\n\nOption'],
  ['. Options', '.\n\nOptions'],
  ['. Line', '.\n\nLine'],
  ['. Lines', '.\n\nLines'],
  ['ANSWER:', ''],
])

export default {
  name: "AttemptContent",
  props: {
    content: {type: Object, required: true},
    dense: { type: Boolean, default: false },
    normalText: { type: Boolean, default: false },

    reformatText: { type: Boolean, default: false },
    reformatSimpleJava: { type: Boolean, default: false },
    reformatNormalKeywords: { type: Boolean, default: false },
    enlarge: { type: Number, default: 0 },

    highlightParagraphArgs: { type: Array, default: () => [] },
    highlightParagraphBreakBefore: { type: Boolean, default: true },
    highlightParagraphBreakAfter: { type: Boolean, default: false },

    lineHeight: { type: Number, default: 0 },

  },
  data: () => ({
    loaded: false,
  }),
  computed: {
    ContentType() {
      return ContentType
    },
    textClass() {
      let classes = {
        'dense': this.dense,
        'normal-text': this.normalText,
      }

      if (this.enlarge) {
        classes[`larger-${this.enlarge}`] = true
      }

      if (this.lineHeight) {
        classes[`line-height-${this.lineHeight}`] = true
      }

      return classes
    },

    finalText() {
      if (!this.content.text) return null
      if (!this.reformatText) return this.content.text

      // заменяем нужные строки
      let text = this.content.text
      for (let [key, value] of REFORMAT_EXTRA_REPLACE_AWARE_STRINGS) {
        text = text.replaceAll(key, value)
      }

      // Заменяем переносы строк внутри предложений на пробел
      text = text.replace(/([^.\n])\n([^A-ZА-Я])/g, '$1 $2');

      // подсвечиваем ключевые слова
      let additionalKeywordClasses = []
      if (this.reformatNormalKeywords) additionalKeywordClasses.push('normal')
      text = highlightJavaKeywords(text, { simpleJava: this.reformatSimpleJava, additionalKeywordClasses } )

      text = convertMarkdownToHTML(text)

      // форматируем начала каджого параграфа, если требуется
      if (this.highlightParagraphArgs.length > 0)
        text = this.highlightFirstParagraphs(text)

      return text
    },


  },
  methods: {
    highlightFirstParagraphs(inputText) {
      let text = inputText

      // Создаем регулярное выражение с возможными началами предложений
      const regex = new RegExp(`(${this.highlightParagraphArgs.join("|")})[^.]*\\.`, "g");

      // Заменяем каждое предложение на обернутый в <span> вариант
      return text.replace(regex, (match) => `<span class="paragraph-highlighted">${this.highlightParagraphBreakBefore ? '\n\n' : ''}${match}${this.highlightParagraphBreakAfter ? '\n\n' : ''}</span>`);
    }
  }
}
</script>

<template>
  <div>
    <div v-if="content.type === ContentType.TEXT" class="code pl-4 pr-4" :class="textClass">
      <p v-if="reformatText" v-html="finalText"></p>
      <span v-else>{{finalText}}</span>
    </div>

    <div v-if="content.type === ContentType.IMAGE">
      <h4 v-if="!loaded">Loading image...</h4>
      <img :src="content.image" class="quest-image" alt="Загрузка изображения" @load="loaded = true"/>
    </div>
  </div>
</template>

<style >
  .code {
    font-family: monospace;
    white-space: pre-wrap;
    line-height: normal;
    font-size: 1rem;
  }
  .code.dense {
    font-size: 0.8rem;
  }
  .code.larger-1 {font-size: 1.1rem;}
  .code.larger-2 {font-size: 1.2rem;}
  .code.larger-3 {font-size: 1.3rem;}
  .code.larger-4 {font-size: 1.4rem;}
  .code.normal-text {
    font-family: inherit;
  }
  .quest-image {
    width: 100%;
    height: auto;
  }

  .paragraph-highlighted {
    font-weight: bold;
    color: #737373;
  }
  .mdh-code {
    font-weight: bold !important;
    color: #6c6c6c !important;
  }

  .code-keyword {font-family: monospace; font-weight: bold; font-size: 105%}

  .keyword-suffix {
    color: #696969;
    font-family: 'Roboto', sans-serif;
    font-weight: initial;
    font-size: initial;
  }

  .code-keyword.normal {font-size: 1rem}
  .code-keyword.java-keyword { color: #022b94; }
  .code-keyword.generic-keyword { color: #022b94; }
  .code-keyword.camel-keyword { color: #696969; }
  .code-keyword.method-keyword { color: #750a80; }
  .code-keyword.class-keyword { color: #750a80; }
  .code-keyword.string-keyword { color: #036011; }
  .code-keyword.num-keyword { color: #036011; }

  .line-height-1 { line-height: 1.0; }
  .line-height-2 { line-height: 1.25; }
  .line-height-3 { line-height: 1.5; }
  .line-height-4 { line-height: 1.75; }
</style>