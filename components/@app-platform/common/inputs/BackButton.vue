<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "BackButton",
  computed: {

  },
  methods: {
    ...mapMutations('utils', { resetTopButtonsState: 'resetTopButtonsState'}),
    goBack() {
      this.resetTopButtonsState()
      this.$router.go(-1)
    }
  }
}
</script>

<template>
  <v-btn icon @click="goBack">
    <v-icon>mdi-arrow-left</v-icon>
  </v-btn>
</template>

<style scoped>

</style>