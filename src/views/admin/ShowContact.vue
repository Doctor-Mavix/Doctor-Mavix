<template>
  <div class="white">
    <navbar />
    <div class="d-flex">
      <sidebar />

      <div class="dash-mains bg-dash">
        <section class="px-md-12 py-md-5 px-2 py-2">
          <div>
            <div class="head px-md-6">
              <div class="">
                <h3 class="text-h5">Dashbord / <span class="primaire">Contact</span></h3>
              </div>
            </div>
            <div class="mt-5 py-5 px-2 px-md-5 white">
              <div>
                <span class="bold">Name : </span>
                {{ messageState.name }}
              </div>
              <div>
                <span class="bold">Email : </span>
                {{ messageState.email }}
              </div>
              <div v-if="messageState.company">
                <span class="bold">Company : </span>
                {{ messageState.company }}
              </div>
              <div v-if="messageState.created_at">
                <span class="bold">Envoyer le : </span>
                {{ messageState.created_at }}
              </div>
              <div v-if="messageState.phone">
                <span class="bold">Phone : </span>
                {{ messageState.phone }}
              </div>
              <p class="bold mt-5 mb-1">Message :</p>
              <section class="mx-auto">{{ messageState.message }}</section>
            </div>
          </div>
        </section>
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
    ...mapGetters(["messageState"]),
  },
  methods: {
    ...mapActions(["getMessage"]),
  },
  mounted() {
    this.getMessage(this.$route.params.id);
  },
  data() {
    return {};
  },
};
</script>

<style></style>
