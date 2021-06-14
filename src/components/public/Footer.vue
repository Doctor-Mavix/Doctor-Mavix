<template>
  <footer class="">
    <div class="footer">
      <v-row>
        <v-col cols="12" class="pl-3 pr-7 px-sm-0" md="6" lg="5">
          <h3
            v-animate-onscroll="'animated fadeInDown'"
            class="text-cente ml-5 white--text text-h6 text-sm-h5 my-5"
          >
            L'avis des clients sur mes services
          </h3>
          <v-timeline dense>
            <v-timeline-item
              v-animate-onscroll="'animated fadeInLeft'"
              v-for="testimony in testimonials"
              :key="testimony.name"
            >
              <template v-slot:icon>
                <v-avatar color="white">
                  <v-img aspect-ratio="1" :alt="testimony.name" :src="testimony.img" />
                </v-avatar>
              </template>
              <span slot="opposite">{{ testimony.name }}</span>
              <v-card class="elevation-2">
                <v-card-title class="headline"> {{ testimony.name }} </v-card-title>
                <v-card-text v-html="testimony.message"> </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
        <v-col cols="12" md="6" lg="7">
          <v-form
            v-animate-onscroll="'animated fadeInRight'"
            id="contact"
            ref="form"
            class="foot-white rounded px-md-12 mx-1 px-2 my-12 mr-md-12 py-6"
            v-model="valid"
            lazy-validation
          >
            <h3>Envoyer moi un message</h3>
            <v-text-field
              v-model="form.name"
              :counter="30"
              :rules="nameRules"
              label="Nom et Prénoms"
              color=""
              required
            ></v-text-field>
            <v-text-field
              v-model="form.company"
              :counter="30"
              :rules="companyRules"
              label="Entreprise"
              hint="Optionnel"
              persistent-hint
              color=""
              required
            ></v-text-field>

            <v-text-field
              v-model="form.email"
              :rules="emailRules"
              label="E-mail"
              required
              color=""
            ></v-text-field>
            <v-text-field
              v-model="form.phone"
              :rules="phoneRules"
              label="Numéro de téléphone"
              required
              hint="Optionnel"
              persistent-hint
              color=""
            ></v-text-field>

            <v-textarea
              label="Votre message"
              auto-grow
              class="mt-3"
              v-model="form.message"
              :rules="messageRules"
              outlined
              rows="3"
              row-height="25"
              shaped
              color=""
            ></v-textarea>

            <v-btn
              :disabled="!valid"
              :loading="loading"
              v-animate-onscroll.repeat="{ up: 'animated wobble' }"
              class="mr-4 bg-primaire white--text"
              @click="envoyer"
            >
              Envoyer
            </v-btn>
          </v-form>
        </v-col>
      </v-row>

      <v-snackbar :timeout="5000" v-model="snackbar" :multi-line="true">
        {{ message }}
      </v-snackbar>
    </div>
    <div class="foot white--text py-5 text-center">
      Copyright &copy; 2021 | Designed by <span class="secondaire">Doctor Mavix</span>
      All right reserve
    </div>
  </footer>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    testimonials: [
      {
        name: "Franck Aroyo",
        img: require("@/assets/stock/portfolio/testimonial/lion.jpg"),
        message: `On m'a recommandé de contacter Doctor Mavix après une terrible expérience avec mon précédent développeur SEO / Web en septembre 2017. Wow! Quelle différence cela fait pour une petite entreprise de se connecter avec quelqu'un qui sait ce qu'elles font. Je ne l'ai pas encore confrontés à une tâche qu'ils ne peuvent pas gérer. Manoël Vital a largement dépassé nos attentes et a aidé notre site Web à gagner la traction dont il avait besoin depuis des années maintenant, augmentant notre travail au point d'embaucher plus de membres du personnel!  Continuez ce travail fantastique!
`,
      },
      {
        name: "Mr Uche",
        img: require("@/assets/stock/portfolio/testimonial/afriford-logo.png"),
        message: `Compared to the other companies we have used in the past, Doctor Mavix has been far and above the best in every area. While building our new web site (<a href='https://afriford.com' target='_blank'>afriford.com</a>) , the customer service has been prompt and straightforward and the actual services are well documented and logical to our needs. We are very excited to be working with Manoël Vital . Over just a short period of time I can tell that we are going to be doing business with Doctor Mavix for a long time and will gladly recommend them to anyone... except our competition.
`,
      },
      {
        name: "Tech Reagan ",
        img: require("@/assets/stock/portfolio/testimonial/reagan.png"),
        message: `Doctor Mavix is an extraordinarily  Web developer who deeply understands his work and gets things done efficiently, thoroughly, and correctly in accordance with best practices. Drawing from his vast experience, Doctor Mavix has an immediate grasp of the scope of any project, and is quick to identify potential complications so they can be addressed in the planning stage.  He can always be counted on by his colleagues to provide valuable insight and guidance. I wholeheartedly recommend Doctor Mavix to anyone who values a principled, expert, team player.  
          
          `,
      },
      {
        name: "Jules Agboton",
        img: require("@/assets/stock/portfolio/testimonial/Jules.jpeg"),
        message: `
          J'ai travaillé avec Manoël Vital pendant les 6 derniers mois. Pendant ce temps, j'ai remarqué qu'il est très consciencieux et centré sur le client. Il se donne beaucoup de mal pour bien comprendre les exigences du projet. Cela lui permet de produire un produit efficace dans un court laps de temps. <span class='bold'>Principales qualités: Expert, Bon rapport qualité-prix, Dans les délais </span>`,
      },
    ],
    valid: true,
    form: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
    loading: false,
    message: "",
    snackbar: false,
    nameRules: [
      (v) => !!v || "Le nom est obligatoire",
      (v) => (v && v.length <= 30) || "Le nom doit contenir 30 caractère au maximum",
    ],
    emailRules: [
      (v) => !!v || "L'E-mail est obligatoire ",
      (v) => /.+@.+\..+/.test(v) || "E-mail doit être valide",
    ],
    companyRules: [
      (v) =>
        (v && v.length <= 30) ||
        v.length == 0 ||
        "Le nom de l'entreprise  doit contenir 30 caractère au maximum",
    ],
    phoneRules: [
      (v) =>
        (v && v.slice(0, 1) == "+") ||
        v.length == 0 ||
        "Le numéro téléphone doit commencer par un indicatif (+1 par exemple)",
    ],
    messageRules: [(v) => !!v || "Le message est obligatoire"],
  }),

  methods: {
    initialize() {
      this.form = {
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      };
      this.loading = false;
    },
    ...mapActions(["contactMe"]),
    envoyer() {
      this.message = "";
      if (this.$refs.form.validate()) {
        this.loading = true;
        console.log(this.form);
        this.contactMe(this.form).then(
          () => {
            this.message = "votre message a été envoyer avec success";
            this.snackbar = true;
            this.initialize();
          },
          (err) => {
            console.log("Echec de l'envoie du message", err);
            this.message =
              "Nous avons rencontré un probleme lors de l'envoie du message ,Contacter moi directement par mon email : doctormavix@gmail.com";
            this.snackbar = true;
            this.loading = false;
          }
        );
      }
    },
  },
};
</script>

<style>
.footer {
  background: url(../../assets/stock/portfolio/barners.jpg) center center;
  width: 100%;
  background-size: cover;
  position: relative;
}
.footer::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #0d1218d7;
}
.footer * {
  z-index: 10 !important;
}
.foot-white {
  background: rgba(255, 255, 255, 0.88);
}
.foot * {
  z-index: 10 !;
}
.foot {
  background: #0d1218;
}
</style>
