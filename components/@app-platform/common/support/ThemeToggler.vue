<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "ThemeToggler",
  computed: {
    ...mapState('utils', ['dark'])
  },
  methods: {
    ...mapActions('utils', ['toggleDark'])
  }
}
</script>

<template>
  <v-switch :value="dark" @change="toggleDark" label="" class="theme-switch" inset>
    <template v-slot:prepend>
      <v-icon>mdi-white-balance-sunny</v-icon>
    </template>
    <template v-slot:append>
      <v-icon>mdi-weather-night</v-icon>
    </template>
  </v-switch>
</template>

<style scoped>

</style>