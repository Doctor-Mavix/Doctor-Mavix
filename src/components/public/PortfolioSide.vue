<template>
  <div v-animate-onscroll="'animated zoomInLeft'" class="white animated zoomInLeft">
    <div class="px-3 d-md-block">
      <div id="profil" class="py-2">
        <!-- Head ,avatar ... -->
        <div class="d-flex justify-center align-center">
          <div class="avatar">
            <v-img
              aspect-ratio="1"
              src="@/assets/stock/portfolio/doctor-cut-2.jpg"
              class="rounded-circle"
              alt="SEGBANGNIDE Manoël Vital"
            />

            <div class="d-flex justify-center align-center">
              <div>
                <div>
                  <div class="my-2">
                    <h1 class="black--text">Doctor Mavix</h1>
                    <p class="black--text">
                      <v-icon color="black" class="secondaire"
                        >mdi-map-marker-outline</v-icon
                      >
                      Cotonou
                    </p>
                  </div>
                  <div class="my-2">
                    <v-icon color="red">mdi-gmail</v-icon>
                    <span class="ml-2">contact@doctormavix.com</span>
                  </div>
                  <div class="my-2">
                    <img
                      src="@/assets/stock/portfolio/gmail.png"
                      class="gmail-icon"
                      alt=""
                    />
                    <span class="ml-2">doctormavix@gmail.com</span>
                  </div>
                  <div class="my-2">
                    <a
                      href="https://github.com/doctor-mavix/"
                      class="black--text"
                      target="_BLANK"
                    >
                      <v-icon color="black">mdi-github</v-icon>
                      <span class="ml-2">Doctor Mavix</span>
                    </a>
                  </div>
                  <div class="my-2">
                    <a
                      href="https://facebook.com/doctor-mavix/"
                      class="black--text"
                      target="_BLANK"
                    >
                      <v-icon class="primaire">mdi-facebook</v-icon>
                      <span class="ml-2">Doctor Mavix</span>
                    </a>
                  </div>
                  <div class="my-2">
                    <v-icon class="blue--text">mdi-phone</v-icon>
                    <span class="ml-2">+229 62444809</span>
                  </div>
                  <div class="my-2">
                    <a
                      href="https://wa.me/22962444809"
                      class="black--text"
                      target="_BLANK"
                    >
                      <v-icon color="green">mdi-whatsapp</v-icon>
                      <span class="ml-2">http://wa.me/22962444809</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="my-4" v-animate-onscroll.repeat="{ down: 'animated wobble' }">
              <a class="black white--text px-5 py-3 rounded-pill" href="#contact"
                >Envoyer moi un message</a
              >
            </div>
          </div>
        </div>

        <!-- Controle du profil -->
        <div class="my-5 d-none">
          <h3 class="text-center mb-5">Languages & Technologies</h3>

          <div class="d-flex justify-center align-center">
            <div>
              <div class="d-flex">
                <v-progress-circular
                  :rotate="270"
                  :size="60"
                  :width="15"
                  :value="88"
                  color="blue"
                >
                  {{ 88 }}
                </v-progress-circular>
                <div class="ml-5">
                  <span class="t-icon"
                    ><img src="@/assets/stock/portfolio/html-css.png" alt=""
                  /></span>
                </div>
              </div>
              <div class="d-flex my-5">
                <v-progress-circular
                  :rotate="270"
                  :size="60"
                  :width="15"
                  :value="70"
                  color="blue"
                >
                  {{ 70 }}
                </v-progress-circular>
                <div class="ml-5">
                  <span class="t-js-icon"
                    ><img src="@/assets/stock/portfolio/javascript.png" alt=""
                  /></span>
                </div>
              </div>
              <div class="d-flex my-5">
                <v-progress-circular
                  :rotate="270"
                  :size="60"
                  :width="15"
                  :value="63"
                  color="blue"
                >
                  {{ 63 }}
                </v-progress-circular>
                <div class="ml-5">
                  <span class="t-icon"
                    ><img src="@/assets/stock/portfolio/node-js.png" alt=""
                  /></span>
                </div>
              </div>
              <div class="d-flex my-5">
                <v-progress-circular
                  :rotate="270"
                  :size="60"
                  :width="15"
                  :value="90"
                  color="blue"
                >
                  {{ 90 }}
                </v-progress-circular>
                <div class="ml-5 mt-3">
                  <span class="t-icon"
                    ><img src="@/assets/stock/portfolio/php-mysql.jpg" alt=""
                  /></span>
                </div>
              </div>
              <div class="d-flex my-5">
                <v-progress-circular
                  :rotate="270"
                  :size="60"
                  :width="15"
                  :value="70"
                  color="blue "
                >
                  {{ 70 }}
                </v-progress-circular>
                <div class="ml-5">
                  <span class="t-js-icon"
                    ><img src="@/assets/stock/portfolio/mongo.jpg" alt=""
                  /></span>
                </div>
              </div>
              <div class="d-flex my-5">
                <v-progress-circular
                  :rotate="270"
                  :size="60"
                  :width="15"
                  :value="68"
                  color="blue"
                >
                  {{ 68 }}
                </v-progress-circular>
                <div class="ml-5">
                  <span class="t-js-icon"
                    ><img src="@/assets/stock/portfolio/laravel.png" alt=""
                  /></span>
                </div>
              </div>
              <div class="d-flex my-5">
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
                  <span class="t-js-icon"
                    ><img src="@/assets/stock/portfolio/vue.png" alt=""
                  /></span>
                </div>
              </div>
              <div class="d-flex my-5">
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
              <div class="d-flex my-5">
                <v-progress-circular
                  :rotate="270"
                  :size="60"
                  :width="15"
                  :value="91"
                  color="blue "
                >
                  {{ 91 }}
                </v-progress-circular>
                <div class="ml-5">
                  <span class="t-icon"
                    ><img src="@/assets/stock/portfolio/bootstrap.png" alt=""
                  /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style>
#profil .avatar img {
  width: 12rem;
  height: 12rem;
}
img.social-icon {
  width: 1.3rem !important;
  height: 1rem !important;
}
img.gmail-icon {
  margin-left: 0.1rem;
  width: 1.3rem !important;
  height: 1rem !important;
}
img.github-icon {
  /* margin-left: 0.1rem; */
  width: 2rem !important;
  height: 1.1rem !important;
}
.t-icon img {
  width: 5rem;
}
.t-js-icon img {
  width: 3.5rem;
}
.t-tailwind-icon img {
  width: 5rem;
  height: 5rem;
  margin-top: -0.5rem;
}
</style>
