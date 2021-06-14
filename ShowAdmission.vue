<template>
  <div class="white">
    <navbar />
    <div class="d-flex">
      <sidebar />

      <div class="dash-main bg-dash white">
        <div class="px-md-12 py-md-5 px-2 py-2">
          <div class="d-flex justify-space-between mt-5 mb-12">
            <h3 class="text-h5">
              Dashbord /
              <span class="primaire"
                >applications for admission of
                {{ admissionApplicationGetters.surname }}</span
              >
            </h3>
            <div>
              <span
                v-if="admissionApplicationGetters.accepted == true"
                @click.prevent=""
                class="px-3 py-1 green rounded white--text"
                >Accepted</span
              >

              <div v-else>
                <v-progress-circular
                  v-if="loading == true"
                  :size="50"
                  :width="7"
                  color="red"
                  indeterminate
                ></v-progress-circular>
                <a
                  href=""
                  v-else
                  @click.prevent="Approuve()"
                  class="px-3 py-1 red rounded white--text"
                >
                  <span>Accept this application</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <!-- <h3>Application for admission to Afriford University</h3> -->
            <div class="white px-1">
              <v-row>
                <v-col cols="6" md="3" class="d-flex align-center justify-center avatar">
                  <div class="">
                    <!-- <v-img
                                        src="../../assets/stock/student/student (3).jpg"
                                        class="rounded"
                                        height="20rem"

                                        >
                                            <template v-slot:placeholder>
                                                <v-row
                                                    class="fill-height ma-0"
                                                    align="center"
                                                    justify="center"
                                                >
                                                    <v-progress-circular
                                                    indeterminate
                                                    color="grey lighten-5"
                                                    ></v-progress-circular>
                                                </v-row>
                                            </template>
                                        </v-img> -->
                    <v-icon color="black" class="avatar-svg">mdi-account-tie</v-icon>
                  </div>
                </v-col>
                <v-col cols="12" md="3">
                  <p class="mb-2 text-justify">
                    <span class="bold">Surname :</span>
                    <span class="ml-1">{{ admissionApplicationGetters.surname }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">Othernames :</span>
                    <span class="ml-1">{{ admissionApplicationGetters.othernames }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">Date Of birth :</span>
                    <span class="ml-1">{{
                      dateManagement(admissionApplicationGetters.birthdayDate)
                    }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">Place of birth :</span>
                    <span class="ml-1">{{
                      admissionApplicationGetters.birthdayPlace
                    }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">Nationality :</span>
                    <span class="ml-1">{{
                      admissionApplicationGetters.nationality
                    }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">City :</span>
                    <span class="ml-1">{{ admissionApplicationGetters.city }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">State :</span>
                    <span class="ml-1">{{ admissionApplicationGetters.state }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">Home phone number :</span>
                    <span class="ml-1">{{ admissionApplicationGetters.phone }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">Home address :</span>
                    <span class="ml-1">{{ admissionApplicationGetters.address }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">Email :</span>
                    <span class="ml-1">{{ admissionApplicationGetters.email }}</span>
                  </p>
                </v-col>
                <v-col cols="12" md="6">
                  <p class="mb-2 text-justify">
                    <span class="bold">Id Card Or Passport Number:</span>
                    <span class="ml-1">{{ admissionApplicationGetters.idCard }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">Knowledge of foreign languages : </span>
                    <span
                      class="ml-1"
                      v-for="lang in admissionApplicationGetters.languages"
                      :key="lang"
                    >
                      {{ lang }}
                    </span>
                  </p>

                  <div class="mt-4">
                    <p class="bold primaire mb-2">Course of study</p>
                    <p class="mb-1">
                      <span class="ml-5 bold">1st Choice:</span>
                      {{ admissionApplicationGetters.courseChoice1 }}
                    </p>
                    <p class="mb-1">
                      <span class="ml-5 bold">2st Choice:</span>
                      {{ admissionApplicationGetters.courseChoice2 }}
                    </p>
                  </div>
                  <div class="mt-3">
                    <p class="bold red--text mb-1">Type of admission applied for :</p>
                    <div class="d-flex">
                      <v-checkbox
                        :input-value="
                          isCheck('DIPLOMA', admissionApplicationGetters.admissionType)
                        "
                        label="Diploma"
                        color="red"
                        class="mr-4 mt-0"
                        disabled
                      ></v-checkbox>
                      <v-checkbox
                        :input-value="
                          isCheck(
                            'UNDERGRADUATE',
                            admissionApplicationGetters.admissionType
                          )
                        "
                        label="Undergraduate"
                        color="orange"
                        class="mr-4 mt-0"
                        disabled
                      ></v-checkbox>
                      <v-checkbox
                        :input-value="
                          isCheck(
                            'POST GRADUATE',
                            admissionApplicationGetters.admissionType
                          )
                        "
                        label="Post graduate"
                        color="red"
                        class="mr-4 mt-0"
                        disabled
                      ></v-checkbox>
                    </div>
                  </div>
                  <div class="mt-4">
                    <p class="bold secondaire mb-1">Mode of study :</p>
                    <div class="d-flex">
                      <v-checkbox
                        :input-value="
                          isCheck('FULL TIME', admissionApplicationGetters.studyMode)
                        "
                        label="Full time"
                        color="red "
                        class="mr-4 mt-0"
                        disabled
                      ></v-checkbox>
                      <v-checkbox
                        :input-value="
                          isCheck('PART TIME', admissionApplicationGetters.studyMode)
                        "
                        label="Part time"
                        color="orange"
                        class="mr-4 mt-0"
                        disabled
                      ></v-checkbox>
                      <v-checkbox
                        :input-value="
                          isCheck(
                            'OPEN AND DISTANCE LEARNING',
                            admissionApplicationGetters.studyMode
                          )
                        "
                        label="Open and distance learning"
                        color="green"
                        class="mr-4 mt-0"
                        disabled
                      ></v-checkbox>
                      <v-checkbox
                        :input-value="
                          isCheck('ONLINE', admissionApplicationGetters.studyMode)
                        "
                        label="online"
                        color="indigo"
                        class="mr-4 mt-0"
                        disabled
                      ></v-checkbox>
                    </div>
                  </div>
                </v-col>
              </v-row>

              <div class="mt-5">
                <!-- <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left"></th>
                        <th class="text-left">Name of school</th>
                        <th class="text-left">From</th>
                        <th class="text-left">To</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="PayeModal == true"
      id="modal-window"
      class="d-flex justify-center align-center"
    >
      <div class="modals white">
        <div class="d-flex justify-end">
          <a
            href=""
            @click.prevent="PayeModal = false"
            class="text-h4 mr-4 mt-1 cursor-pointer"
            >X</a
          >
        </div>
        <div class="px-3 px-md-12 py-3 py-md-8">
          <div>
            <h3>Il vous restes 40 000 FCFA a paye</h3>
          </div>

          <form action="">
            <div class="mt-3">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="Montants"
                required
              ></v-text-field>
            </div>
            <div>
              <p>
                Payer avec :
                <button type="submit" class="ml-3 yellow--text mr-3">MTN momo</button>
                <button type="submit" class="primaire mr-3">Visa</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div
      v-if="Dialog == true"
      id="modal-window"
      class="d-flex justify-center align-center"
    >
      <v-card class="modal-alert">
        <v-card-title class="headline red white--text">
          Are you sure to accept this application ?
        </v-card-title>

        <v-card-text class="black--text my-3">
          We will send the adminastration letter to this student by email
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="bg-secondaire white--text" text @click="Dialog = false">
            Cancel
          </v-btn>
          <v-btn class="red white--text" text @click="accept($route.params.id)">
            Accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <v-snackbar v-model="snackbar">
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
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
    ...mapGetters(["admissionApplicationGetters"]),
  },
  methods: {
    ...mapActions(["getAdmissionApplication", "acceptAdmissionApplication"]),
    isCheck(val1, val2) {
      val2 = val2.trim();
      if (val1 == val2) return true;
      return false;
    },
    Approuve() {
      this.Dialog = true;
    },
    accept(id) {
      this.loading = true;
      this.acceptAdmissionApplication(id).then(
        () => {
          this.message = "Application accepted succesfully";
        },
        (error) => {
          if (error == "Error: Request failed with status code 400") {
            this.message = "Failed to accept this application";
          }
        }
      );

      this.snackbar = true;
      this.Dialog = false;
      this.loading = false;
      this.getAdmissionApplication(this.$route.params.id);
    },
    dateManagement(dateObj) {
      var created_date = new Date(dateObj);

      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      var year = created_date.getFullYear();
      var month = months[created_date.getMonth()];
      var date = created_date.getDate();

      return date + " " + month + " " + year; // final date with time, you can use this according your requirement
    },
  },
  mounted() {
    this.getAdmissionApplication(this.$route.params.id);
  },
  data() {
    return {
      Dialog: false,
      snackbar: false,
      message: "",
      loading: false,
    };
  },
};
</script>

<style scope>
.avatar-svg {
  font-size: 20rem !important;
}
</style>
