<script>
import {ExamQuestionSelectType} from "@/models/entities/ExamQuestion";
import {ContentType} from "@/models/questions/QuestionContentItem";
import AttemptContent from "@/components/current_attempts/AttemptContent.vue";

export default {
  name: "AttemptOptionsList",
  components: {AttemptContent},
  props: {
    question: { type: Object, required: true },
    options: { type: Array, default: () => [] },
    answers: { type: Array, default: () => [] },
  },
  computed: {
    ContentType() {
      return ContentType
    },
    ExamQuestionSelectType() {
      return ExamQuestionSelectType
    },

    checkboxModel: {
      get () {
        return this.answers
      },
      set (val) {
        this.$emit('change', val)
      }
    },

    radioModel: {
      get () {
        return (this.answers && this.answers.length > 0) ? this.answers[0] : null
      },
      set (val) {
        this.$emit('change', val)
      }
    },

  },
  methods: {
    onRadioChanged(payload) {
      //console.log('onRadioChange', payload)
    },
    onCheckboxChanged(payload) {
      //console.log('onCheckboxChange', payload)
    },
    onContext(payload) {
      console.log('onContext', payload)
    }
  }
}
</script>

<template>
  <div>
    <v-radio-group v-if="question.selectType === ExamQuestionSelectType.SINGLE" v-model="radioModel">

      <v-radio v-for="option in options" :key="option.key" @change="onRadioChanged"
               :value="option.key">
        <template v-slot:label>
          <h5>{{option.key}}.</h5>
          <attempt-content v-for="content in option.contents" :key="content.key" :content="content" :enlarge="1"/>
        </template>
      </v-radio>
    </v-radio-group>


    <div v-if="question.selectType === ExamQuestionSelectType.MULTI">
      <v-checkbox v-for="option in options" :key="option.key"
                  v-model="checkboxModel"
                  :value="option.key"
                  dense hide-details
                  @change="onCheckboxChanged" @contextmenu="onContext"
      >
        <template v-slot:label>
          <h5>{{option.key}}.</h5>
          <attempt-content v-for="content in option.contents" :key="content.key" :content="content" :enlarge="1"/>
        </template>
      </v-checkbox>
    </div>

  </div>
</template>

<style scoped>

</style>