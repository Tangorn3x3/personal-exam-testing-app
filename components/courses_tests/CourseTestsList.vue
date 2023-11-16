<script>
import {mapActions, mapState} from "vuex";
import _ from "lodash";
import * as questionsService from "@/services/questionsService";

export default {
  name: "CourseTestsList",
  props: {
    course: { type: Object, required: true },
  },
  data: () => ({
    loading: null,
  }),
  computed: {
    ...mapState('questionDictionaryStore', { tests: 'tests' }),
    courseName() { return this.course.name },
    courseTests() {
      return _.orderBy(_.filter(this.tests, { course: this.courseName }), ['id'], ['asc'])
    },
  },
  mounted() {

  },
  methods: {
    //...mapActions('questionDictionaryStore', {fetchQuestionsByTest: 'fetchQuestionsByTest'}),
    async initAttempt(test) {
      this.loading = test.name

      await questionsService.startNewAttempt(test.name)

      this.loading = null
      this.$router.push('/takeAttempt')
    }
  }
}
</script>

<template>
  <div>
    <h2 class="font-weight-light mb-2">{{ courseName }}</h2>

    <v-card>
      <v-list>
        <v-list-item
            v-for="(test, i) in courseTests"
            :key="i"
            @click="initAttempt(test)"
        >
          <v-list-item-content>
            <v-progress-linear v-if="loading === test.name" indeterminate color="primary" class="mb-2"/>
            <v-list-item-title v-else v-text="test.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-card>
  </div>


</template>

<style scoped>

</style>