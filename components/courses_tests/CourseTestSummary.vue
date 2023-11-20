<script>
import * as questionUtils from "@/utils/questionUtils";
import AttemptContent from "@/components/current_attempts/AttemptContent.vue";
export default {
  name: "CourseTestSummary",
  components: {AttemptContent},
  props: {
    text: { type: String, default: '' },
    course: { type: Object, required: true, },
    showHeader: { type: Boolean, default: true },

    highlightParagraphArgs: { type: Array, default: () => [] },
    highlightParagraphBreakBefore: { type: Boolean, default: true },
    highlightParagraphBreakAfter: { type: Boolean, default: false },

    lineHeight: { type: Number, default: 0 },
  },
  computed: {
    targetContents() {
      if (!this.course || !this.text) return null
      return questionUtils.parseContent(this.text)
    }
  }
}
</script>

<template>
  <div>
    <h3 v-if="showHeader" class="mb-4">{{course.name}}</h3>
    <div class="description">
      <attempt-content v-for="(content, i) in targetContents" :key="i"
                       :content="content" :line-height="lineHeight"
                       :highlight-paragraph-args="highlightParagraphArgs" :highlight-paragraph-break-after="highlightParagraphBreakAfter" :highlight-paragraph-break-before="highlightParagraphBreakBefore"
                       normal-text reformat-text/>
    </div>
  </div>
</template>

<style scoped>

</style>