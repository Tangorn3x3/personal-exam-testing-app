<script>
import CourseTestSummaryDialog from "@/components/courses_tests/CourseTestSummaryDialog.vue";

export default {
  name: "CourseTestListItem",
  components: {CourseTestSummaryDialog},
  props: {
    test: { type: Object, required: true },
    loading: { type: String, default: false },
  },
}
</script>

<template>
  <v-list-item @click="$emit('click', test)">
    <v-list-item-content>
      <v-progress-linear v-if="loading === test.name" indeterminate color="primary" class="mb-2"/>
      <v-list-item-title v-else v-text="test.name"></v-list-item-title>
    </v-list-item-content>

    <v-list-item-action >
      <div class="icon-container">
        <course-test-summary-dialog v-if="test.summary" :course="test" button-color="grey"/>

        <course-test-summary-dialog v-if="test.essentials" :course="test" mode="essentials"
                                    button-icon="mdi-clipboard-check-outline" button-color="blue-grey lighten-1"
                                    header-label-prefix="Exam Essentials: "/>
      </div>

    </v-list-item-action>
  </v-list-item>
</template>

<style scoped>
.icon-container {
  display: flex;
}

/* Пример стилей для иконок (может потребоваться настройка) */
.icon-container v-icon {
  margin-right: 8px; /* Пространство между иконками */
}
</style>