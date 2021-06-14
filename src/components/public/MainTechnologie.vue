<template>
  <section class="mx-1 mx-md-8 py-5">
    <h3 class="text-h5 text-sm-h4 mb-5 ml-5">Les technologies que j'utilise</h3>
    <v-sheet class="mx-auto" elevation="1" max-width="1400">
      <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
        <v-slide-item v-slot="{}">
          <div class="d-flex mx-5 justify-center align-center">
            <v-progress-circular
              :rotate="270"
              :size="60"
              :width="15"
              :value="70"
              color="yellow"
            >
              {{ 70 }}
            </v-progress-circular>
            <div class="ml-5">
              <span class="t-js-icon"
                ><img src="@/assets/stock/portfolio/javascript.png" alt=""
              /></span>
            </div>
          </div>
        </v-slide-item>
        <v-slide-item v-slot="{}">
          <div class="d-flex mx-5 justify-center align-center">
            <v-progress-circular
              :rotate="270"
              :size="60"
              :width="15"
              :value="63"
              color="green"
            >
              {{ 63 }}
            </v-progress-circular>
            <div class="ml-5">
              <span class="t-icon"
                ><img src="@/assets/stock/portfolio/node-js.png" alt=""
              /></span>
            </div>
          </div>
        </v-slide-item>
        <v-slide-item v-slot="{}">
          <div class="d-flex mx-5 justify-center align-center">
            <v-progress-circular
              :rotate="270"
              :size="60"
              :width="15"
              :value="90"
              color="orange"
            >
              {{ 90 }}
            </v-progress-circular>
            <div class="ml-5 mt-3">
              <span class="t-icon"
                ><img src="@/assets/stock/portfolio/php-mysql.jpg" alt=""
              /></span>
            </div>
          </div>
        </v-slide-item>
        <v-slide-item v-slot="{}">
          <div class="d-flex mx-5 justify-center align-center">
            <v-progress-circular
              :rotate="270"
              :size="60"
              :width="15"
              :value="70"
              color="green darken-3"
            >
              {{ 70 }}
            </v-progress-circular>
            <div class="ml-5">
              <span class="t-js-icon"
                ><img src="@/assets/stock/portfolio/mongo.jpg" alt=""
              /></span>
            </div>
          </div>
        </v-slide-item>
        <v-slide-item v-slot="{}">
          <div class="d-flex mx-5 justify-center align-center">
            <v-progress-circular
              :rotate="270"
              :size="60"
              :width="15"
              :value="68"
              color="red"
            >
              {{ 68 }}
            </v-progress-circular>
            <div class="ml-5">
              <span class="t-js-icon"
                ><img src="@/assets/stock/portfolio/laravel.png" alt=""
              /></span>
            </div>
          </div>
        </v-slide-item>
        <v-slide-item v-slot="{}">
          <div class="d-flex mx-5 justify-center align-center">
            <v-progress-circular
              :rotate="270"
              :size="60"
              :width="15"
              :value="91"
              color="green"
            >
              {{ 91 }}
            </v-progress-circular>
            <div class="ml-5">
              <span class="t-js-icon"
                ><img src="@/assets/stock/portfolio/vue.png" alt=""
              /></span>
            </div>
          </div>
        </v-slide-item>
        <v-slide-item v-slot="{}">
          <div class="d-flex mx-5 justify-center align-center">
            <v-progress-circular
              :rotate="270"
              :size="60"
              :width="15"
              :value="91"
              color="blue"
            >
              {{ 91 }}
            </v-progress-circular>
            <div class="ml-5">
              <span class="t-tailwind-icon"
                ><img src="@/assets/stock/portfolio/tailwind.png" alt=""
              /></span>
            </div>
          </div>
        </v-slide-item>
        <v-slide-item v-slot="{}">
          <div class="d-flex mx-5 justify-center align-center">
            <v-progress-circular
              :rotate="270"
              :size="60"
              :width="15"
              :value="91"
              color="purple darken-3"
            >
              {{ 91 }}
            </v-progress-circular>
            <div class="ml-5">
              <span class="t-icon"
                ><img src="@/assets/stock/portfolio/bootstrap.png" alt=""
              /></span>
            </div>
          </div>
        </v-slide-item>
        <v-slide-item v-slot="{}">
          <div class="d-flex justify-center align-center">
            <v-progress-circular
              :rotate="270"
              :size="60"
              :width="15"
              :value="88"
              color="red"
            >
              {{ 88 }}
            </v-progress-circular>
            <div class="ml-5">
              <span class="t-icon"
                ><img src="@/assets/stock/portfolio/html-css.png" alt=""
              /></span>
            </div>
          </div>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </section>
</template>
<script>
export default {
  data: () => ({
    model: null,
  }),
};
</script>
