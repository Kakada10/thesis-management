<template>
  <header_navbar></header_navbar>
  <carousel_dashboard style="width:95% ;margin:auto; margin-bottom: 30px; border-radius:15px"></carousel_dashboard>
  <div
    style="
      width: 90%;
      height: 50px;
      display: flex;
      flex-wrap: wrap;
      border-radius: 5px;
      margin-top: 0px;
      margin-left: 5%;
      background-color: #0e426a;
    "
  >
    <p
      style="
        color: orange;
        margin-left: 3%;
        margin-top: 0.5rem;
        font-size: 20px;
        font-family: serif;
        cursor: pointer;
      "
    >
      New Arrivals
    </p>
  </div>
  <div style="display: flex; flex-wrap: wrap; margin-left: 3rem">
    <div
      v-for="(thesis, i) in getThesis"
      v-bind:key="i"
      style="width: 250px; padding: 20px"
    >
      <v-card
        class="mx-auto"
        max-width="200"
        style="font-size: 16px; padding: 0px; box-shadow: 1px 1px 5px gray"
      >
        <v-img
          style="box-shadow: 1px 1px 1px gray; margin:10px 0px 20px 0px"
          src="@/assets/thesis.png"
          height="220px"
        >
        </v-img>
        <v-btn
          elevation="1"
          style="
            margin-top: -20px;
            font-family: Jazz LET, fantasy;
            font-size: 12px;
            background-color: orange;
          "
          max-width="100"
          >Read more!</v-btn
        >
        <v-card-subtitle style="color:	#000000">{{ thesis.title }}</v-card-subtitle>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>
  <div
    style="
      width: 90%;
      height: 50px;
      display: flex;
      flex-wrap: wrap;
      border-radius: 5px;
      margin-top: 0px;
      margin-left: 5%;
      background-color: #0e426a;
    "
  >
    <p
      style="
        color: orange;
        margin-left: 3%;
        margin-top: 0.5rem;
        font-size: 20px;
        font-family: serif;
        cursor: pointer;
      "
    >
      Popular
    </p>
  </div>
  <div style="display: flex; flex-wrap: wrap; margin-left: 3rem">
    <div
      v-for="(thesis, i) in getThesis"
      v-bind:key="i"
      style="width: 250px; padding: 20px"
    >
      <v-card
        class="mx-auto"
        max-width="200"
        style="font-size: 16px; padding-bottom: 10px; box-shadow: 1px 1px 5px gray"
      >
        <v-img
          style="box-shadow: 1px 1px 1px gray; margin:10px 0px 20px 0px"
          src="@/assets/thesis.png"
          height="220px"
        >
        </v-img>
        <v-btn
          elevation="1"
          style="
            margin-top: -20px;
            font-family: Jazz LET, fantasy;
            font-size: 12px;
            background-color: orange;
          "
          max-width="100"
          >Read more!</v-btn
        >
        <v-card-subtitle style="color:	#000000">{{ thesis.title }}</v-card-subtitle>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>
  <div
    style="
      width: 90%;
      height: 50px;
      display: flex;
      flex-wrap: wrap;
      border-radius: 5px;
      margin-top: 0px;
      margin-left: 5%;
      background-color: #0e426a;
    "
  >
    <p
      style="
        color: orange;
        margin-left: 3%;
        margin-top: 0.5rem;
        font-size: 20px;
        font-family: serif;
        cursor: pointer;
      "
    >
      New Arrivals
    </p>
  </div>
  <div style="display: flex; flex-wrap: wrap; margin-left: 3rem">
    <div
      v-for="(thesis, i) in getThesis"
      v-bind:key="i"
      style="width: 250px; padding: 20px"
    >
      <v-card
        class="mx-auto"
        max-width="200"
        style="font-size: 16px; padding-bottom: 10px; box-shadow: 1px 1px 5px gray"
      >
        <v-img
          style="box-shadow: 1px 1px 1px gray; margin:10px 0px 20px 0px"
          src="@/assets/thesis.png"
          height="220px"
        >
        </v-img>
        <router-link  style="text-decoration: none" to="/detailPage">
          <v-btn
            elevation="1"
            style="
              margin-top: -20px;
              font-family: Jazz LET, fantasy;
              font-size: 12px;
              background-color: orange;
            "
            max-width="100"
            >
            Read more!
          </v-btn
            >
        </router-link>
        <v-card-subtitle style="color:	#000000">{{ thesis.title }}</v-card-subtitle>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
    <div style="display:flex; flex-wrap: wrap; margin:auto; margin-top:50px">
      <v-img style="width:200px ; height: 150px" src="@/assets/architect.jpg"></v-img>
      <v-img style="width:200px ; height: 150px" src="@/assets/chemistry.png"></v-img>
      <v-img style="width:200px ; height: 150px" src="@/assets/GIC.png"></v-img>
      <v-img style="width:200px ; height: 150px" src="@/assets/GGG.png"></v-img>
      <v-img style="width:200px ; height: 150px" src="@/assets/GIM.jpg"></v-img>
      <v-img style="width:200px ; height: 150px" src="@/assets/GEE.jpg"></v-img>
    </div>
  </div>
  <footer_dashboard></footer_dashboard>
</template>
<script>
import header_navbar from "@/components/header_navbar.vue";
import carousel_dashboard from "@/components/carousel_dashboard.vue";
import footer_dashboard from "@/components/footer_dashboard.vue";
import axios from "axios";
export default {
  name: "adminDashboard",
  components: {
    header_navbar,
    carousel_dashboard,
    footer_dashboard,
  },
  data() {
    return {
      title: null,
      category: null,
      getThesis: null,
    };
  },
  mounted() {
    this.getAllThesis();
  },
  methods: {
    async getAllThesis() {
      const url = "http://localhost:3000/admin/getAllThesis";
      const response = await axios.get(url, { withCredentials: true });
      this.getThesis = response.data;
      console.log(this.getThesis);
    },
  },
};
</script>
