<script>
import CourseTestSummary from "@/components/courses_tests/CourseTestSummary.vue";

export default {
  name: "CourseTestSummaryDialog",
  components: {CourseTestSummary},
  props: {
    mode: {type: String, default: 'summary'},
    course: { type: Object, required: true, },

    showHeader: { type: Boolean, default: true },
    headerColor: { type: String, default: 'primary' },
    headerLabelPrefix: { type: String, default: 'Summary: ' },
    innerHeader: { type: Boolean, default: false },

    buttonIcon: { type: String, default: 'mdi-information' },
    buttonColor: { type: String, default: 'primary' },
  },
  data: () => ({
    dialog: false,

    essentialsHighlights: [ 'Be able to', 'Understand', 'Know how '
      /*, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', */
    ],
  }),
  computed: {
    headerCourseName() {
      return `${this.headerLabelPrefix}${this.course.name}`
    },
  }
}
</script>

<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn :color="buttonColor" icon v-bind="attrs" v-on="on">
        <v-icon :color="buttonColor">{{buttonIcon}}</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-toolbar v-if="showHeader" dark :color="headerColor">
        <v-btn icon dark @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
        <v-toolbar-title>{{headerCourseName}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items></v-toolbar-items>
      </v-toolbar>

      <v-card-text>
        <course-test-summary v-if="mode.toLowerCase() === 'summary'"
                             class="pt-8"
                             :text="course.summary"
                             :course="course" :show-header="innerHeader"/>
        <course-test-summary v-if="mode.toLowerCase() === 'essentials'"
                             class="pt-8"
                             :text="course.essentials"
                             :highlight-paragraph-args="essentialsHighlights" :highlight-paragraph-break-before="true"
                             :course="course" :show-header="innerHeader"/>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>