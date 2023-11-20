<script>
import {mapActions, mapState} from "vuex";
import _ from "lodash";
import * as questionsService from "@/services/questionsService";
import CourseTestListItem from "@/components/courses_tests/CourseTestListItem.vue";

export default {
  name: "CourseTestsList",
  components: {CourseTestListItem},
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
        <course-test-list-item
            v-for="(test, i) in courseTests"
            :key="i"
            :test="test" :loading="loading"
            @click="initAttempt(test)"/>
      </v-list>
    </v-card>


  </div>


</template>

<style scoped>

</style>