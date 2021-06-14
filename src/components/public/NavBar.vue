<template>
  <div class="bg-primaire pt-1">
    <v-app-bar class="bg-primaire" dense dark elevation="0">
      <v-toolbar-title class=""
        ><a class="logo" href="">
          Doctor
          <span class="secondaire">{ <span class="white--text">Ma</span>vix }</span></a
        ></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <a href="#contact">
        <v-btn icon class="d-sm-block d-none">
          <v-icon>mdi-message</v-icon>
        </v-btn>
      </a>
      <!-- Languages -->
      <form action="" class="d-none d-md-block">
        <select class="white--text bg-primaire px-3 mx-1" name="languages" id="languages">
          <option value="">Fr</option>
        </select>
      </form>
    </v-app-bar>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";

export default {
  components: {},

  methods: {},

  data() {
    return {
      languages: ["En", "Fr"],
    };
  },
};
</script>

<style>
.search {
  width: 40rem;
  display: flex;
}
.search select {
  width: 7%;
  outline: none;
}
.search button {
  width: 10%;
}
.search input {
  width: 83%;
  /* border: 1px solid black; */
  padding: 0.3rem 0.5rem;
  outline: none;
}
.search label {
  cursor: pointer;
}
.nav-submit-off {
  position: relative !important;
  background: none !important;
  z-index: 1;
}

.livraison {
  display: inline !important;
}

@media screen and (max-width: 599px) {
  .search {
    width: 80vw;
    position: absolute;
  }
  .nav-submit-on {
    z-index: 10;
    position: absolute;
    background: orangered;
    right: 0;
  }
}
</style>
