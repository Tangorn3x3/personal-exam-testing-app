<script>
import {ContentType} from "@/models/questions/QuestionContentItem";
import AttemptContent from "@/components/current_attempts/AttemptContent.vue";

export default {
  name: "AttemptQuestionDisplay",
  components: {AttemptContent},
  props: {
    contents: {type: Array, default: () => []},
  },
  data: () => ({

  }),
  computed: {
    ContentType() {
      return ContentType
    }
  },
}
</script>

<template>
  <div>
    <attempt-content v-for="(content, i) in contents" :content="content" dense/>
  </div>
</template>

<style scoped>

</style>