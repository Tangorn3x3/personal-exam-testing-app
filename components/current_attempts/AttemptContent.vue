<script>
import {ContentType} from "@/models/questions/QuestionContentItem";
import {highlightJavaKeywords} from "@/utils/questionUtils";

const REFORMAT_EXTRA_REPLACE_AWARE_STRINGS = new Map([
  ['. Option', '.\n\nOption'],
  ['. Line', '.\n\nLine'],
])

export default {
  name: "AttemptContent",
  props: {
    content: {type: Object, required: true},
    dense: { type: Boolean, default: false },
    normalText: { type: Boolean, default: false },

    reformatText: { type: Boolean, default: false },
    enlarge: { type: Number, default: 0 },
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
      text = highlightJavaKeywords(text)
      return text
    }
  },
  methods: {
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

  .code-keyword {font-family: monospace; font-weight: bold; font-size: 110%}
  .code-keyword.java-keyword { color: #022b94; }
  .code-keyword.camel-keyword { color: #750a80; }
  .code-keyword.method-keyword { color: #750a80; }
  .code-keyword.class-keyword { color: #750a80; }
  .code-keyword.string-keyword { color: #036011; }
  .code-keyword.num-keyword { color: #036011; }
</style>