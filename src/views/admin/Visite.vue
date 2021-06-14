<template>
  <div class="white">
    <navbar />
    <div class="d-flex">
      <sidebar />

      <div class="dash-mains bg-dash">
        <v-container class="mx-1 mx-md-6 my-8">
          <h3 class="text-h3">Visites</h3>
          <v-card>
            <v-card-title>
              Visites
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="visitesState"
              :search="search"
            ></v-data-table>
          </v-card>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../../components/admin/NavBar";

import sidebar from "../../components/admin/SideBar";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    navbar,
    sidebar,
  },
  computed: {
    ...mapGetters(["visitesState"]),
  },
  methods: {
    ...mapActions(["getVisites"]),
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Date de visite",
          align: "start",
          value: "date",
        },
        { text: "Nombre de visite", value: "visites" },
      ],
    };
  },
  mounted() {
    this.getVisites();
  },
};
</script>

<style></style>
