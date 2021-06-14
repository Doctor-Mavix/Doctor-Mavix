<template>
  <div class="m-0" id="auth">
    <section class="">
      <div class="auth d-flex h-100 justify-center align-center">
        <v-col cols="12" md="4">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="px-10 py-12 white-- rounded ml-sm-10 border-primaire"
          >
            <div class="mb-5">
              <span class="green mr-1 rounded-circle py-1 px-3"></span>
              <span class="yellow mx-2 rounded-circle py-1 px-3"></span>
              <span class="red rounded-circle mx-2 py-1 px-3"></span>
              <span class="bg-primaire rounded-circle mx-2 py-1 px-3"></span>
            </div>
            <h1>
              Doctor <span class="secondaire">{</span> Mavix
              <span class="secondaire">}</span>
            </h1>
            <p>Admin connection</p>

            <div v-if="errors">
              <p class="red--text">{{ errors }}</p>
            </div>
            <div class="d-flex justify-space-between">
              <v-text-field
                v-model="user.email"
                :rules="emailRules"
                label="Email"
                required
              ></v-text-field>

              <span class="ml-8"></span>
            </div>

            <div class="d-flex justify-space-between mb-10">
              <v-text-field
                v-model="user.password"
                :type="passwordVisibility.type"
                label="Mots de passe"
                required
              ></v-text-field>
              <span class="mt-5 ml-2">
                <v-icon color="" @click="managePasswordVisibility()">
                  {{ passwordVisibility.icon }}
                </v-icon>
              </span>
            </div>

            <div class="text-center">
              <v-progress-linear
                v-if="loading == true"
                color="blue darken-4"
                indeterminate
                rounded
                height="6"
              ></v-progress-linear>

              <v-btn
                v-else
                :disabled="!valid"
                color=""
                class="log-btn mr-4 white--text"
                @click="validate"
                width="100%"
              >
                Connexion
              </v-btn>
            </div>
          </v-form>
        </v-col>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    errors: "",
    loading: false,
    response: "",
    valid: true,
    user: {
      email: "",
      password: "",
    },

    emailRules: [
      (v) => !!v || "Vous devez entrer un email",
      (v) => /.+@.+\..+/.test(v) || "l'email n'est pas valide ",
    ],

    passwordVisibility: {
      icon: "mdi-eye",
      type: "password",
    },
  }),

  methods: {
    ...mapActions(["adminLogin"]),
    validate() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        this.adminLogin(this.user).then(
          (response) => {
            this.loading = false;

            localStorage.setItem("doctor-token", response.token); //this to vue router securirity
            this.user.email = "";
            this.user.password = "";
            this.$router.push("/mavix-admin");
          },
          (error) => {
            this.loading = false;
            if (error == "Error: Request failed with status code 400") {
              this.errors = "Invalid login information";
            }
          }
        );

        // this.$router.push({ path: "/" });
      }
    },

    //   manage password visibility
    managePasswordVisibility() {
      if (this.passwordVisibility.type == "password") {
        this.passwordVisibility.icon = "mdi-eye-off";
        this.passwordVisibility.type = "text";
      } else {
        this.passwordVisibility.icon = "mdi-eye";
        this.passwordVisibility.type = "password";
      }
    },
  },
};
</script>

<style>
.h-100 {
  height: 100vh;
}
</style>
