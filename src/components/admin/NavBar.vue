<template>
  <div class=" " id="admin-nav">
    <v-app-bar class="white px-md-12" dense dark elevation="0">
      <v-toolbar-title class=""
        ><a class="black--text d-flex logo mt-2" href="">
          <span class="black--text text-h4">Doctor { Mavix }</span>
        </a>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <span class="black--text mr-3">{{ Today() }} </span>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <a
            href=""
            @click.prevent=""
            class="px-5 py-1 rounded-pill bg-mv"
            v-bind="attrs"
            v-on="on"
          >
            <div class="d-flex">
              <v-avatar color="black" size="30">
                <img :src="AdminProfilState.profil_picture" alt="" />
              </v-avatar>

              <div class="d-flex justify-center align-center">
                <span class="ml-2 black--text">{{
                  AdminProfilState.grade + " " + AdminProfilState.name
                }}</span>
              </div>
            </div>
          </a>
        </template>
        <v-list>
          <v-list-item>
            <a href="" @click.prevent="logout()" class="black--text">Logout</a>
          </v-list-item>
        </v-list>
      </v-menu>

      <router-link to="/" class="black--text px-2 bold">
        <v-badge :content="2" :value="2" color="red" overlap>
          <v-icon color="black"> mdi-bell-outline </v-icon>
        </v-badge>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  computed: mapGetters(["AdminProfilState"]),

  methods: {
    ...mapActions(["getAdminProfil"]),
    Today() {
      const created_date = new Date();

      const months = [
        "Jan",
        "Fev",
        "Mar",
        "Avr",
        "Mai",
        "Juin",
        "Juil",
        "Aout",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const days = [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
      ];
      const day = days[created_date.getDay()];
      const year = created_date.getFullYear();
      const month = months[created_date.getMonth()];
      const date = created_date.getDate();

      return day + " " + date + " " + month + " " + year; // final date with time, you can use this according your requirement
    },
    logout() {
      localStorage.setItem("doctor-token", "");
      this.$router.push("/admin-mavix/login");
    },
  },
  beforeMount() {
    this.getAdminProfil();
  },

  data() {
    return {
      items: [{ title: "Logout" }],
    };
  },
};
</script>

<style>
#admin-nav .logo-design {
  margin-top: 0.2rem;
}
#admin-nav .logo-design span {
  padding: 0.01rem 0.8rem !important;
}
</style>
