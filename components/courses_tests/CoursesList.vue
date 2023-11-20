<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "CoursesList",
  computed: {
    ...mapState('questionDictionaryStore', { courses: 'courses', tests: 'tests' }),
  },

  methods: {
    ...mapMutations('questionDictionaryStore', { setDictUnified: 'setUnified' }),
    async onCourseClick(course) {
      await this.$emit('course-selected', course)
      this.setDictUnified({selectedCourse: course})
      this.$router.push('/')
    },
  },
}
</script>

<template>
  <v-list>
    <v-subheader>Courses</v-subheader>
    <v-list-item v-for="(item, i) in courses" :key="i" @click="onCourseClick(item)">
      <v-list-item-content>
        <v-list-item-title v-text="item.name"/>
      </v-list-item-content>
    </v-list-item>

  </v-list>
</template>

<style scoped>

</style>