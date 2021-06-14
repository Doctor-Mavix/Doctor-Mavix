<template>
  <div class="bg-tkp dashboard">
    <navbar />
    <div class="d-flex">
      <div class="white sidenave">
        <portfolio-side class="" />
      </div>

      <div class="dash-main">
        <portfolio />
      </div>
    </div>
    <foot />
    <loader v-if="loadingDialog" />
    <!-- <v-dialog v-model="loadingDialog" persistent width="300">
      <v-card color="" class="bg-primaire" dark>
        <v-card-text>
          <div class="text-center">Bienvenu</div>
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog> -->
  </div>
</template>

<script>
import navbar from "../../components/public/NavBar";
import foot from "../../components/public/Footer";
import PortfolioSide from "../../components/public/PortfolioSide.vue";
import Portfolio from "../../components/public/Portfolio.vue";

import { mapActions } from "vuex";
import Loader from "../../components/universal/loader.vue";

export default {
  components: {
    navbar,
    foot,
    PortfolioSide,
    Portfolio,
    Loader,
  },
  methods: {
    ...mapActions(["makeVisite"]),
    Initialize() {
      window.scrollBy(0, 10);
    },
    getViewCookie() {
      let cookies = decodeURIComponent(document.cookie);
      cookies = cookies.split(";");

      if (cookies.length == 0) return false;

      // we collect the view cookie
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0].trim() == "visite") {
          return cookie[1];
        }
      }
      return false;
    },
    makeView() {
      if (!this.getViewCookie()) {
        let date = new Date();
        date.setTime(date.getTime() + 24 * 60 * 60 * 1000); //hope is 24H
        let expire = date.toUTCString();
        document.cookie = `visite=oui; ${expire};path=/`;
        this.makeVisite();
      }
    },
    loadingData() {
      this.loadingDialog = false;
      setTimeout(() => {
        this.loadingDialog = false;
      }, 1000);
    },
  },
  mounted() {
    this.Initialize();
    this.makeView();
    this.loadingData();
  },
  data() {
    return {
      loadingDialog: true,
    };
  },
};
</script>

<style>
.dashboard {
  width: 100vw;
  box-sizing: border-box;
  position: relative;
}
.sidenave {
  width: 23%;
  /* margin-right: 1rem; */
  position: sticky !important;
  top: 10;
  /* height: 100%; */
}
@media (max-width: 1450px) {
  .sidenave {
    display: none;
  }
  .dash-main {
    width: 100% !important;
  }
}
.dash-main {
  width: 77%;
}
</style>
