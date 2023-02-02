<template>
  <header_navbar></header_navbar>
  <carousel_dashboard
    style="width: 95%; margin: auto; margin-bottom: 30px; border-radius: 15px"
  ></carousel_dashboard>
  <div class="box_status">
    <p class="status">New Arrivals</p>
  </div>
  <div style="display: flex; flex-wrap: wrap; margin-left: 3rem">
    <div
      v-for="(thesis, i) in getThesis"
      v-bind:key="i"
      style="width: 250px; padding: 20px"
    >
      <v-card
        class="mx-auto"
        max-width="400"
        height="330"
        style="
          font-size: 16px;
          color: white;
          background-color: teal;
          box-shadow: 1px 1px 5px gray;
          margin: 20px;
        "
      >
        <iframe
          frameborder="0"
          :src="thesis.image"
          @click="viewDetail(thesis)"
          style="
            overflow: hidden;
            margin-bottom: 0px;
            width: 110%;
            height: 100%;
            margin-top: -60px;
            margin-left: -14px;
            margin-right: -30px;
          "
        ></iframe>
        <v-btn
          @click="viewDetail(thesis)"
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
        </v-btn>
        <p style="font-size: 14px; font-family: serif">{{ thesis.title }}</p>
      </v-card>
    </div>
  </div>
  <div class="box_status">
    <p class="status">Most Popular</p>
  </div>
  <div style="display: flex; flex-wrap: wrap; margin-left: 3rem">
    <div
      v-for="(thesis, i) in getPopularThesis"
      v-bind:key="i"
      style="width: 250px; padding: 20px"
    >
      <v-card
        class="mx-auto"
        max-width="400"
        height="330"
        style="
          font-size: 16px;
          color: white;
          background-color: teal;
          box-shadow: 1px 1px 5px gray;
          margin: 20px;
        "
      >
        <iframe
          frameborder="0"
          @click="viewDetail(thesis)"
          :src="thesis.image"
          style="
            overflow: hidden;
            margin-bottom: 0px;
            width: 110%;
            height: 100%;
            margin-top: -60px;
            margin-left: -14px;
            margin-right: -30px;
          "
        ></iframe>
        <v-btn
          elevation="1"
          @click="viewDetail(thesis)"
          style="
            margin-top: -20px;
            font-family: Jazz LET, fantasy;
            font-size: 12px;
            background-color: orange;
          "
          max-width="100"
        >
          Read more!
        </v-btn>
        <p style="font-size: 14px; font-family: serif">{{ thesis.title }}</p>
      </v-card>
    </div>
  </div>
  <div class="box_status">
    <p class="status">Recommend</p>
  </div>
  <div style="display: flex; flex-wrap: wrap; margin-left: 3rem">
    <div
      v-for="(thesis, i) in getThesis"
      v-bind:key="i"
      style="width: 250px; padding: 20px"
    >
      <v-card
        class="mx-auto"
        max-width="400"
        height="330"
        style="
          font-size: 14px;
          color: white;
          background-color: teal;
          box-shadow: 1px 1px 5px gray;
          margin: 20px;
        "
      >
        <iframe
          frameborder="0"
          :src="thesis.image"
          style="
            overflow: hidden;
            margin-bottom: 0px;
            width: 110%;
            height: 100%;
            margin-top: -60px;
            margin-left: -14px;
            margin-right: -30px;
          "
        ></iframe>
        <v-btn
          elevation="1"
          @click="viewDetail(thesis)"
          style="
            margin-top: -20px;
            font-family: Jazz LET, fantasy;
            font-size: 12px;
            background-color: orange;
          "
          max-width="100"
        >
          Read more!
        </v-btn>
        <p class="box_title">{{ thesis.title }}</p>
      </v-card>
    </div>
    <div style="display: flex; flex-wrap: wrap; margin: auto; margin-top: 50px">
      <v-img style="width: 200px; height: 150px" src="@/assets/architect.jpg"></v-img>
      <v-img style="width: 200px; height: 150px" src="@/assets/chemistry.png"></v-img>
      <v-img style="width: 200px; height: 150px" src="@/assets/GIC.png"></v-img>
      <v-img style="width: 200px; height: 150px" src="@/assets/GGG.png"></v-img>
      <v-img style="width: 200px; height: 150px" src="@/assets/GIM.jpg"></v-img>
      <v-img style="width: 200px; height: 150px" src="@/assets/GEE.jpg"></v-img>
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
      getThesis2: null,
      getPopularThesis: [],
      total: null,
      image: [],
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
      this.total = response.data.length;
      for (var i = 0; i <this.total ; i++) {
        this.image.push(
          "data:" +
            this.getThesis[i].thesis.contentType +
            ";base64," +
            this.getThesis[i].thesis.data
        );
      }
      let k = 0;
      this.getThesis.forEach((element) => {
        (element.image = this.image[k]), k++;
      });
      this.getThesis = this.getThesis.slice().reverse()
      this.getThesis2 = this.getThesis
      for (let i = 0; i <this.total ; i++) {
        let x = 0;
        for (let u = 0; u<this.total ;u++ ){
          if(this.getThesis2[i].download>this.getThesis2[u].download){
            this.getPopularThesis[x] = this.getThesis2[i]
            this.getThesis2[i].download = -1
          }else if(this.getThesis2[i].download<this.getThesis2[u].download){
            this.getPopularThesis[x] = this.getThesis2[u]
            this.getThesis2[i].download = 1
          }
          x++
        }
        
      }
    },
    async viewDetail(thesis) {
      localStorage.setItem("thesis_id", thesis.thesis_id);
      this.$router.push("/detailPage");
    },
  },
};
</script>
<style>
.box_status {
  width: 90%;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  margin-top: 0px;
  margin-left: 5%;
  background-color: teal;
}
.status {
  color: white;
  margin-left: 3%;
  margin-top: 0.5rem;
  font-size: 20px;
  font-family: serif;
  cursor: pointer;
}
.box_title {
  font-size: 14px;
  font-family: serif;
  color: white;
}
</style>
