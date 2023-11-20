<script>
import {mapGetters, mapState, mapMutations, mapActions} from "vuex";
import AttemptQuestionDisplay from "@/components/current_attempts/AttemptQuestionDisplay.vue";
import AttemptOptionsList from "@/components/current_attempts/AttemptOptionsList.vue";
import * as _ from "lodash";
import AttemptContent from "@/components/current_attempts/AttemptContent.vue";
import * as questionsService from "@/services/questionsService";
import {ExamAttemptStatus} from "@/models/entities/ExamAttempt";
import notificationService from "@/@app-platform/services/notificationService";
import Vue from "vue";

export default {
  name: "TakeAttempt",
  components: {AttemptContent, AttemptOptionsList, AttemptQuestionDisplay},
/*  asyncData({store}) {
    store.commit('utils/setBackButtonVisibility', true)
    store.commit('utils/setMenuButtonVisibility', false)
  },*/
  data() {
    return {
      loadingItems: false,
      answerVisible: false,
    }
  },
  mounted() {
    this.disableMenuButton()
    this.enableBackButton('/')
  },
  computed: {
    ...mapState('currentAttemptStore', { currentQuestions: 'currentQuestions', currentAnswers: 'currentAnswers' }),
    ...mapGetters('currentAttemptStore', {
      activeQuestions: 'activeQuestions',

      currentQuestion: 'currentQuestion',
      currentQuestionAnswers: 'currentQuestionAnswers',
      currentQuestionPerformedAnswers: 'currentQuestionPerformedAnswers',
      currentQuestionIsCorrect: 'currentQuestionIsCorrect',

      allowNextQuestion: 'allowNextQuestion',
      allowPrevQuestion: 'allowPrevQuestion',
    }),
  },
  methods: {
    ...mapMutations('currentAttemptStore', {
      updateFullAnswer: 'updateFullAnswer' ,
      updateAnswer: 'updateAnswer' ,
      nextQuestion: 'nextQuestion' ,
      prevQuestion: 'prevQuestion' ,
    }),
    ...mapActions('currentAttemptStore', {
      saveAttemptResult: 'saveAttemptResult',
    }),

    async completeQuiz() {
      const res = await this.$dialog.confirm({
        text: 'Завершить тестирование?',
        actions: {'true': 'Завершить', 'false': 'Отмена'}
      })
      if (!res) return

      let result = questionsService.calculateAttemptResult(this.currentQuestions, this.currentAnswers)
      const resultDialog = await this.$dialog.confirm({
        title: result.status === ExamAttemptStatus.PASSED ? 'Пройдено!' : 'Обосратушки...',
        text: `Верно ${result.num_correct} из ${result.num_to_answer} вопросов. \n\n Это ${Math.round(result.num_correct / result.num_to_answer * 100)}% при требуемых ${questionsService.PASSING_MINIMUM_PERCENT}`,
        actions: {'true': 'Сохранить и завершить', 'false': 'Отмена'},
        type: result.status === ExamAttemptStatus.PASSED ? 'success' : 'error',
      })
      if (!resultDialog) return

      let savedAttempt = await this.saveAttemptResult(result)
      if (savedAttempt) {
        notificationService.showSnackbar('Результаты сохранены')
        this.$router.push('/')
      }
    },

    toggleAnswer() {
      this.answerVisible = !this.answerVisible
    },

    onNextQuestion() {
      this.answerVisible = false
      this.nextQuestion()
    },
    onPrevQuestion() {
      this.answerVisible = false
      this.prevQuestion()
    },
    onAnswered(payload) {
      this.updateFullAnswer({
        questionId: this.currentQuestion.id,
        answers: _.isArray(payload) ? payload : [payload]
      })
    },
  }

}
</script>

<template>
  <v-container class="pr-0 pl-0">
    <v-row v-if="currentQuestion">
      <h3 class="pl-4 font-weight-light">Вопрос {{currentQuestion.position}} / {{currentQuestions.length}}</h3>
      <v-col cols="12" md="6" class="pr-0 pl-0">
        <attempt-question-display :contents="currentQuestion.questionContents"/>
      </v-col>

      <v-col cols="12" md="6" >
        <attempt-options-list :question="currentQuestion"
                              :options="currentQuestionAnswers"
                              :answers="currentQuestionPerformedAnswers"
                              class="mb-6"
                              @change="onAnswered"/>

        <v-alert v-if="answerVisible" class="answers-cont" border="top" colored-border :type="currentQuestionIsCorrect ? 'success' : 'error'" elevation="2">
          <h4 class="mb-4">Ответ: <span v-for="(answer, i) in currentQuestion.answers">{{`${answer}${ i < currentQuestion.answers.length - 1 ? ',  ' : ''}`}} </span></h4>
          <div class="description">
            <attempt-content v-for="(content, i) in currentQuestion.answerDescriptionContents" :key="i"
                             :content="content"  normal-text reformat-text/>
          </div>
        </v-alert>
      </v-col>
    </v-row>

    <v-bottom-navigation app grow>
      <v-btn :disabled="!allowPrevQuestion" @click="onPrevQuestion" icon >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <v-btn @click="toggleAnswer" icon><v-icon>mdi-eye-check</v-icon></v-btn>

      <v-btn v-if="allowNextQuestion" @click="onNextQuestion" icon><v-icon>mdi-chevron-right</v-icon></v-btn>
      <v-btn v-else @click="completeQuiz" icon><v-icon>mdi-check-circle</v-icon></v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<style scoped>
  .answers-cont .description {

  }
</style>