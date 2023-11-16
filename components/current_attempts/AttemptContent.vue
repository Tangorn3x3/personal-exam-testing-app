<script>
import {ContentType} from "@/models/questions/QuestionContentItem";

export default {
  name: "AttemptContent",
  data: () => ({
    loaded: false,
  }),
  computed: {
    ContentType() {
      return ContentType
    }
  },
  props: {
    content: {type: Object, required: true},
    dense: { type: Boolean, default: false },
    normalText: { type: Boolean, default: false },
  },
  methods: {
  }
}
</script>

<template>
  <div>
    <div v-if="content.type === ContentType.TEXT" class="code pl-4 pr-4" :class="{'dense': dense, 'normal-text': normalText}" v-html="content.text"></div>

    <div v-if="content.type === ContentType.IMAGE">
      <h4 v-if="!loaded">Loading image...</h4>
      <img :src="content.image" class="quest-image" alt="Загрузка изображения" @load="loaded = true"/>
    </div>
  </div>
</template>

<style scoped>
  .code {
    font-family: monospace;
    white-space: pre-wrap;
    line-height: normal;
    font-size: 0.9rem;
  }
  .code.dense {
    font-size: 0.8rem;
  }
  .code.normal-text {
    font-family: inherit;
  }
  .quest-image {
    width: 100%;
    height: auto;
  }
</style>