<script>
import {list} from "@/@app-platform/services/platformCrudService";
import {PlatformCrudTables} from "@/appConfig";

export default {
  name: "TestPlatformFetch",
  data() {
    return {
      tests: []
    }
  },
  mounted() {
    this.test()
  },
  methods: {
    async test() {
      this.tests = await list(PlatformCrudTables.coursesGroups)
    }
  }
}
</script>

<template>
  <div>
    <v-card v-for="test in tests" :key="test.id">
      <v-card-title>{{test.name}}</v-card-title>
      <v-card-text>{{test.id}}</v-card-text>
    </v-card>
  </div>

</template>

<style scoped>

</style>