<template>
  <v-app>
    <v-expand-x-transition>
      <v-main id="application">
        <router-view />
      </v-main>
    </v-expand-x-transition>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},
  methods: {},

  data: () => ({
    //
  }),
};
</script>
<style src="./assets/css/main.css"></style>
