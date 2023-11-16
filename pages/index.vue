<template>
  <v-container>
    <v-row>

      <v-col v-if="selectedCourse" cols="12" md="4" class="mb-4">
        <course-tests-list :course="selectedCourse"/>
      </v-col>
      <v-col v-else cols="12" md="4" class="mb-4">
        <card-loading-skeleton/>
      </v-col>

    </v-row>

  </v-container>
</template>

<script>

import TestPlatformFetch from "@/components/TestPlatformFetch.vue";
import {mapState} from "vuex";
import CourseTestsList from "@/components/courses_tests/CourseTestsList.vue";
import CardLoadingSkeleton from "@/components/@app-platform/common/loaders/CardLoadingSkeleton.vue";

export default {
  components: {CardLoadingSkeleton, CourseTestsList, TestPlatformFetch},
  data() {
    return {
      loadingItems: false,
    }
  },
  computed: {
    ...mapState('questionDictionaryStore', { selectedCourse: 'selectedCourse' }),
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang="scss">

</style>
