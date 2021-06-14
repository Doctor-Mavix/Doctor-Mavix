<template>
  <div class="bg-testiaire sidenaves menu">
    <v-card class="mx-auto elevation-0">
      <v-list class="bg-testiaire">
        <router-link to="/mavix-admin">
          <v-list-item class="active">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Acceuil</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link to="/mavix-admin/profil">
          <v-list-item class="">
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Profil</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/mavix-admin/contact">
          <v-list-item class="">
            <v-list-item-icon>
              <v-icon>mdi-contacts</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </router-link>

        <v-list-group :value="false" prepend-icon="mdi-account-multiple-outline">
          <template v-slot:activator>
            <v-list-item-title>Utilisateurs</v-list-item-title>
          </template>

          <v-list-group :value="false" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Admin</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title, icon, url], i) in admins" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title, icon, url], i) in cruds" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
        <v-list-group :value="false" prepend-icon="mdi-shopping">
          <template v-slot:activator>
            <v-list-item-title>Marche</v-list-item-title>
          </template>

          <v-list-group :value="false" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Departements</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item @click="goTo('/mavix-admin/market-department')">
              <v-list-item-title>Listes </v-list-item-title>

              <v-list-item-icon>
                <v-icon>mdi-file-outline</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item @click="addMarketDepartmentModal()">
              <v-list-item-title>Ajouter </v-list-item-title>

              <v-list-item-icon>
                <v-icon>mdi-plus-outline</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Categories</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item @click="goTo('/mavix-admin/market-categorie')">
              <v-list-item-title>Listes </v-list-item-title>

              <v-list-item-icon>
                <v-icon>mdi-file-outline</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item @click="addMarketCategorieModal()">
              <v-list-item-title>Ajouter </v-list-item-title>

              <v-list-item-icon>
                <v-icon>mdi-plus-outline</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Produits</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item @click="goTo('/mavix-admin/market-product')">
              <v-list-item-title>Listes </v-list-item-title>

              <v-list-item-icon>
                <v-icon>mdi-file-outline</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item @click="goTo('/mavix-admin/department')">
              <v-list-item-title>Statistique </v-list-item-title>

              <v-list-item-icon>
                <v-icon>mdi-chart-histogram</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item @click="show()">
              <v-list-item-title>Ajouter </v-list-item-title>

              <v-list-item-icon>
                <v-icon>mdi-plus-outline</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["addMarketDepartmentModal", "addMarketCategorieModal"]),
    goTo(link) {
      this.$router.push(link);
    },
  },
  computed: {
    ...mapGetters(["AdminProfilState"]),
  },
  data: () => ({
    admins: [
      ["Management", "mdi-account-multiple-outline", "/mavix-admin/department"],
      ["Settings", "mdi-cog-outline", "/mavix-admin/department"],
    ],
    cruds: [
      ["Create", "mdi-plus-outline", "/mavix-admin/department"],
      ["Read", "mdi-file-outline", "/mavix-admin/department"],
      ["Update", "mdi-update", "/mavix-admin/department"],
      ["Delete", "mdi-delete", "/mavix-admin/department"],
    ],
  }),
};
</script>

<style>
.sidenaves .menu {
  letter-spacing: 0.1rem;
  font-size: 1.3rem;
}

.menu .icon {
  color: rgb(172, 171, 171) !important;
  transition: all ease-in 0.3s;
}
.menu a,
.menu div,
.menu i {
  color: rgb(172, 171, 171) !important;
  transition: all ease-in 0.3s;
}

.menu .active div,
.menu .active a,
.menu .active i {
  color: white !important;
}
</style>
