<template>
  <div class="profil-information">
    <div class="barner"></div>
    <div class="head px-md-12">
      <div class="infos">
        <div class="d-flex flex-sm-row flex-column detail">
          <div class="profil-img">
            <img
              v-animate-onscroll="'animated bounceInDown'"
              aspect-ratio="1"
              src="@/assets/stock/portfolio/doctor-cut-2.jpg"
              alt="Doctor Mavix"
            />
          </div>
          <div class="mt-sm-5 ml-sm-3">
            <div
              v-animate-onscroll="'animated bounceInDown'"
              class="d-sm-block d-flex justify-center align-center"
            >
              <div class="text-center text-sm-left">
                <h3 class="black-white mb-3 text-h4">Doctor Mavix</h3>
                <h1 class="black-white text-p mb-4">Développeur Web fullstack</h1>
              </div>
            </div>
            <div
              class="w-100 text-center text-sm-left d-sm-block d-flex justify-center align-center"
            >
              <div class="">
                <div
                  class="d-flex flex-lg-row flex-column justify-space-between white-part"
                >
                  <div class="mt-3">
                    <div v-animate-onscroll="'animated fadeInUp'">
                      <span class="green mx-2 rounded-circle py-1 px-3"></span>
                      <span class="yellow mx-2 rounded-circle py-1 px-3"></span>
                      <span class="red rounded-circle mx-2 py-1 px-3"></span>
                      <span class="bg-primaire rounded-circle mx-2 py-1 px-3"></span>
                    </div>
                    <!-- <span class=""><v-icon class="red--text">mdi-gmail</v-icon> </span> -->
                  </div>
                  <div
                    v-animate-onscroll="'animated fadeInRight'"
                    class="d-flex flex-column flex-sm-row my-sm-6 mt-3 my-lg-0"
                  >
                    <div class="mr-sm-12">
                      <p class="text-h6 text-sm-h4 text-sm-center d-inline d-sm-block">
                        +30
                      </p>
                      <p class="d-inline d-sm-block ml-3 text-h6 text-sm-h6">
                        Réalisations
                      </p>
                    </div>
                    <div>
                      <p class="text-h6 text-sm-h4 text-sm-center d-inline d-sm-block">
                        +3 ans
                      </p>
                      <p class="d-inline d-sm-block text-h6 text-sm-h6">
                        D'expériences freelance
                      </p>
                    </div>
                    <div
                      class="ml-12 d-none d-md-block mt-6"
                      v-animate-onscroll.repeat="{ up: 'animated jello' }"
                    >
                      <a
                        :href="require('@/assets/stock/portfolio/cv/doctor-mavix-cv.jpg')"
                        download="doctor-mavix-cv.pdf"
                        class="py-3 bold px-3 rounded-pill blue white--text"
                        >Télécharger mon cv
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  v-animate-onscroll.repeat="{ up: 'animated jello' }"
                  class="ml-12 d-md-none mt-6"
                >
                  <a
                    :href="require('@/assets/stock/portfolio/cv/doctor-mavix-cv.jpg')"
                    download="doctor-mavix-cv.pdf"
                    class="py-3 bold px-3 rounded-pill blue white--text"
                    >Télécharger mon cv
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-row>
      <v-col cols="12">
        <section
          v-animate-onscroll="'animated fadeInUpBig'"
          class="contact-information my-5 mx-md-8 px-5 py-5 white rouded"
        >
          <h3 class="text-h5 text-sm-h4">Les informations de contact</h3>
          <v-row class="">
            <v-col cols="12" md="6">
              <div class="my-2">
                <v-icon color="red">mdi-gmail</v-icon>
                <span class="ml-2">contact@doctormavix.com</span>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="my-2">
                <img src="@/assets/stock/portfolio/gmail.png" class="gmail-icon" alt="" />
                <span class="ml-2">doctormavix@gmail.com</span>
              </div>
            </v-col>
            <v-col cols="12" md="6">
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
            </v-col>
            <v-col cols="12" md="6">
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
            </v-col>
            <v-col cols="12" md="6">
              <v-icon class="blue--text">mdi-phone</v-icon>
              <span class="ml-2">+229 62444809</span>
            </v-col>
            <v-col cols="12" md="6">
              <a href="http://wa.me/22962444809" class="green--text" target="_BLANK">
                <v-icon color="green">mdi-whatsapp</v-icon>
                <span class="ml-2">http://wa.me/22962444809</span>
              </a>
            </v-col>
            <v-col cols="12" md="6">
              <div
                v-animate-onscroll.repeat="{ down: 'animated tada' }"
                class="my-4 text-center text-sm-left"
              >
                <a class="black white--text px-5 py-3 rounded-pill" href="#contact"
                  >Envoyer moi un message</a
                >
              </div>
            </v-col>
          </v-row>
        </section>
      </v-col>
      <v-col cols="12">
        <div
          v-animate-onscroll="'animated fadeInUpBig'"
          class="my-5 g mx-md-8 px-5 py-5 white rounded"
        >
          <h3 class="text-h4 mb-3">Apropos</h3>
          <section class="apropos">
            <div>
              <p class="mb-1">
                Salut Je m'appelle
                <span class="bold black--text">SEGBANGNIDE Manoël Vital</span> , et je
                suis un développeur web créatif avec plus de 3 ans d'expérience. Je
                travail sous le pseudo du <span class="bold"> Docteur Mavix</span> . Je
                fais à la fois le développement front-end :
                <span class="bold px-2 rounded mx-2 black--text">
                  Vue js , JavaScript
                </span>
                et back-end :
                <span class="bold black--text"> Laravel , Node Js, ExpressJs </span>
                .
              </p>
              <p>
                Je maîtrise donc toute les étapes de conceptions d'un
                <span class="black--text bold">api REST ,</span>
                <span class="black--text bold">un SPA </span>et j'ai beaucoup d'expérience
                dans le
                <span class="black--text bold"
                  >MEVN (MongoDB, ExpressJS, VueJs, Node.js) Stack</span
                >
              </p>
              <p>
                Depuis le début de mon parcours en tant que développeur web fullstack
                indépendant (freelance) , j'ai travaillé à distance pour des agences,
                consulté pour des startups et collaboré avec des personnes talentueuses
                pour créer des applications web à la fois pour les entreprises et les
                consommateurs.
              </p>
              <p>
                Je suis tranquillement confiant, naturellement curieux et je travaille
                constamment à l'amélioration de mes côtelettes, un problème de conception
                à la fois.
              </p>
            </div>
          </section>
        </div>
      </v-col>
    </v-row>
    <main-technologie v-animate-onscroll="'animated fadeInRight'" />

    <section
      v-animate-onscroll="'animated fadeInUpBig'"
      class="my-5 mx-md-8 px-5 py-5 white rounded"
    >
      <h3 class="text-h4 mb-5">Quelques Réalisations</h3>

      <v-row>
        <v-col cols="12" md="4" class="white elevation-1">
          <a href="https://jc-eco.org" target="_BLANK">
            <div class="project-img">
              <img
                class="rounded"
                src="@/assets/stock/portfolio/jc-eco.jpg"
                alt="jc-eco"
              />
            </div>
            <div>
              <div class="">
                <h4 class="text-h4">JC ECO</h4>
                <span class="ml-1 black--text">Site de transport de colis</span>
              </div>
              <div class="my-4">
                <span class="bold secondaire">Technologies</span>
                <div class="py-2 d-flex mt-4">
                  <div class="ml-5">
                    <span class="t-js-icon"
                      ><img src="@/assets/stock/portfolio/laravel.png" alt=""
                    /></span>
                  </div>
                  <div class="ml-5">
                    <span class="t-js-icon"
                      ><img src="@/assets/stock/portfolio/vue.png" alt=""
                    /></span>
                  </div>
                  <div class="ml-5">
                    <span class="t-icon"
                      ><img src="@/assets/stock/portfolio/bootstrap.png" alt=""
                    /></span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </v-col>
        <v-col cols="12" md="4" class="white elevation-1">
          <a href="http://mavix-twitter.epizy.com" target="_BLANK">
            <div class="project-img">
              <v-icon color="white" class="text-h1 twitter-project-icon"
                >mdi-twitter</v-icon
              >
              <img
                class="rounded"
                src="@/assets/stock/portfolio/twitter-start.png"
                alt="jc-eco"
              />
            </div>
            <div>
              <div class="">
                <h4 class="text-h4 blue--text">mini-twitter clone</h4>
                <span class="ml-1 black--text">Un petit clone de twitter</span>
              </div>
              <div class="my-4">
                <span class="bold secondaire">Technologies</span>
                <div class="py-2 d-flex mt-4">
                  <div class="ml-5 mt-3">
                    <span class="t-icon"
                      ><img src="@/assets/stock/portfolio/php-mysql.jpg" alt=""
                    /></span>
                  </div>
                  <div class="ml-5">
                    <span class="t-tailwind-icon"
                      ><img src="@/assets/stock/portfolio/tailwind.png" alt=""
                    /></span>
                  </div>
                  <div class="ml-5">
                    <span class="t-js-icon"
                      ><img src="@/assets/stock/portfolio/javascript.png" alt=""
                    /></span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </v-col>
        <v-col cols="12" md="4" class="white elevation-1">
          <a href="https://afriford.com" target="_BLANK">
            <div class="project-img">
              <img
                class="rounded"
                src="@/assets/stock/portfolio/afriford.png"
                alt="jc-eco"
              />
            </div>
            <div>
              <div class="">
                <h4 class="text-h4 green--text">Afriford University</h4>
                <span class="ml-1 black--text"
                  >Site d'universite avec un portals pour étudiant et administrateur</span
                >
              </div>
              <div class="my-4">
                <span class="bold secondaire">Technologies</span>
                <div class="py-2 d-flex mt-4">
                  <div class="ml-5">
                    <span class="t-js-icon"
                      ><img src="@/assets/stock/portfolio/vue.png" alt=""
                    /></span>
                  </div>
                  <div class="ml-5">
                    <span class="t-icon"
                      ><img src="@/assets/stock/portfolio/node-js.png" alt=""
                    /></span>
                  </div>
                  <div class="ml-5">
                    <span class="t-js-icon"
                      ><img src="@/assets/stock/portfolio/mongo.jpg" alt=""
                    /></span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import MainTechnologie from "./MainTechnologie.vue";

export default {
  components: { MainTechnologie },
  methods: {},
  data() {
    return {};
  },
};
</script>

<style>
.profil-information .barner {
  background: url(../../assets/stock/portfolio/barners.jpg) center center;
  height: 35vh;
  width: 100%;
  background-size: cover;
  position: relative;
}

.profil-information .barner::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.479);
}

.profil-information .barner * {
  z-index: 3;
}

.black-white {
  color: black;
}
.profil-information .head {
  position: relative;
  background: white;
  width: 100%;
  height: 8rem;
}
.profil-information .head .infos {
  position: absolute;
  top: -6rem;
}
.profil-information .profil-img img {
  width: 13rem !important;
  height: 13rem !important;
  border-radius: 50%;
}

.profil-information .head .infos .detail {
  width: 73vw;
}

@media (min-width: 1450px) {
  .contact-information {
    display: none;
  }
}
@media (max-width: 1300px) {
  .profil-information .head .infos {
    width: 100%;
    /* background: red !important; */
  }
  .profil-information .head .infos .detail {
    width: 100%;
    /* background: red !important; */
  }
  .profil-information .head .infos .detail .white-part {
    width: 70vw !important;
  }
  .profil-information .head {
    height: 10rem !important;
  }
}

@media (max-width: 959px) {
  .profil-information .head {
    height: 17rem !important;
  }
  .profil-information .head .infos .detail {
    width: 100%;
  }

  .profil-information .profil-img {
    width: 50vw !important;
  }
}
@media (min-width: 600px) {
  .black-white {
    color: white;
  }
}
@media (max-width: 599px) {
  .profil-information .profil-img {
    width: 100% !important;
    height: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .profil-information .profil-img img {
    width: 14rem !important;
    height: 14rem !important;
  }
  .profil-information .head {
    height: 25rem !important;
  }
  .profil-information .head .infos .detail .white-part {
    width: 100% !important;
  }
}
.profil-information .head .infos .detail .white-part {
  width: 57vw;
}

.apropos {
  line-height: 1.7rem;
}
.project-img {
  position: relative !important;
  width: 100%;
  height: 20rem;
}
.project-img img {
  height: 100%;
  width: 100%;
}
.twitter-project-icon {
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.w-100 {
  width: 100%;
  /* background: red; */
}
</style>
