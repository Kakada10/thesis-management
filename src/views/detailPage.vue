<template>
  <header_navbar></header_navbar>
  <v-container style="display: flex; flex-wrap: wrap; margin: auto; margin-left: 90px">
    <div
      style="box-shadow: 1px 1px 5px gray; border: 1px black solid;border-radius:5px; width: 500px; height: 350px padding-top:20px"
    >
      <v-card
        class="mx-auto"
        max-width="400"
        height="520"
        style="font-size: 16px; box-shadow: 1px 1px 5px gray; margin: 20px"
      >
        <iframe
          frameborder="0"
          :src="chosenThesis.image"
          style="
            overflow: hidden;
            margin-bottom: 0px;
            width: 110%;
            height: 130%;
            margin-top: -60px;
            margin-left: -20px;
            margin-right: -30px;
          "
        ></iframe>
      </v-card>
    </div>
    <div
      style="
        display: flex;
        font-family: serif;
        box-shadow: 1px 1px 5px gray;
        flex-wrap: wrap;
        margin-bottom: 170px;
        border: 1px black solid;
        border-radius: 5px;
        margin-left: 5rem;
        width: 48%;
        padding-left: 10px;
        padding-top: 20px;
        padding-bottom: 20px;
      "
    >
      <div
        style="
          font-size: 1.2rem;
          width: 250px;
          text-align: left;
          margin-left: 1rem;
          padding-left: 20px;
        "
      >
        <p class="font-weight-black">Title :</p>
        <p class="font-weight-black">Thesis ID :</p>
        <p class="font-weight-black">Category :</p>
        <p class="font-weight-black">Department :</p>
        <p class="font-weight-black">Written by :</p>
        <p class="font-weight-black">ID :</p>
        <p class="font-weight-black">Email :</p>
        <p class="font-weight-black">Upload At :</p>
        <v-btn color="secondary" @click="toggleModal" class="mr-10 mt-10">Edit</v-btn>
        <v-btn color="red mt-10 mr-1" style="margin-left:-20px" @click="delete2">Delete</v-btn>
      </div>
      <div
        style="width: 100px; font-size:1.2rem; font-family: serif; height: 350px padding-top:20px; text-align: left"
      >
        <p class="font-weight-regular">{{ chosenThesis.title }}</p>
        <p class="font-weight-regular">{{ chosenThesis.thesis_id }}</p>
        <p class="font-weight-regular">{{ chosenThesis.category }}</p>
        <p class="font-weight-regular">{{ chosenThesis.department }}</p>
        <p class="font-weight-regular">{{ chosenThesis.student_name }}</p>
        <p class="font-weight-regular">{{ chosenThesis.student_id }}</p>
        <p class="font-weight-regular">{{ chosenThesis.student_email }}</p>
        <p class="font-weight-regular">{{ chosenThesis.uploadAt }}</p>
      </div>
    </div>
  </v-container>
  <div class="box_status">
    <p class="status">Other Thesis</p>
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
          background-color: black;
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
        <router-link style="text-decoration: none" to="/detailPage">
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
          </v-btn>
        </router-link>
        <v-card-subtitle style="font-size: 20px; font-family: serif">{{
          thesis.title
        }}</v-card-subtitle>
      </v-card>
    </div>
  </div>
  <footer_dashboard></footer_dashboard>
  <Modal @close="toggleModal" @submitted="update" :modalActive="modalActive">
    <div class="modal-content">
      <h1>Edit Information</h1>
      <form @submit.prevent="submit">
      <v-row style="margin-top:10px">
         <v-text-field
          v-model="student_id"
          :counter="100"
          :error-messages="errors"
          label="Student ID"
          required
          style="padding-right: 20px"
        ></v-text-field>
        <v-text-field
          v-model="student_name"
          :counter="100"
          :error-messages="errors"
          label="Student Name"
          required
        ></v-text-field>
      </v-row>
      <v-row>
         <v-text-field
          v-model="student_email"
          :counter="100"
          :error-messages="errors"
          label="Student Email"
          style="padding-right: 20px"
          required
        ></v-text-field>

        <v-text-field
          v-model="department"
          :counter="100"
          :error-messages="errors"
          label="Department"
          required
        ></v-text-field>
      </v-row>

      <v-row>
         <v-text-field
          v-model="thesis_id"
          :counter="100"
          :error-messages="errors"
          label="Thesis ID"
          style="padding-right: 20px"
          required
        ></v-text-field>

        <v-text-field
          v-model="category"
          :counter="100"
          :error-messages="errors"
          label="Category"
          required
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          v-model="title"
          :counter="100"
          :error-messages="errors"
          label="Title"
          required
        ></v-text-field>
      </v-row>
      <v-row>
         <v-text-field
          v-model="status"
          :counter="100"
          :error-messages="errors"
          label="Status"
          required
        ></v-text-field>
      </v-row>
      </form>
    </div>
  </Modal>
</template>
<script>
import Modal from "@/components/popup_form.vue";
import { ref } from "vue";
import footer_dashboard from "@/components/footer_dashboard.vue";
import header_navbar from "@/components/header_navbar.vue";
import axios from "axios";
export default {
  name: "detailPage",
  components: {
    header_navbar,
    Modal,
    footer_dashboard,
  },
  data: () => ({
    loading: false,
    selection: 1,
    getThesis: null,
    chosenThesis: [1],
    total: null,
    image: [],
    student_id: null,
    student_name: null,
    student_email: null,
    department: null,
    thesis_id: null,
    title: null,
    category: null,
    status: null,
    searchTxt:null
  }),
  mounted() {
    this.getAllThesis();
  },
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal };
  },
  watch: {
    searchTxt: function () {
      this.search(this.searchTxt);
      // console.log(this.searchTxt);
    },
  },
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    async getAllThesis() {
      const url = "http://localhost:3000/admin/getAllThesis";
      const response = await axios.get(url, { withCredentials: true });
      this.getThesis = response.data;
      this.total = response.data.length;
      for (let i = 0; i < this.total; i++) {
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
      // console.log(this.getThesis[0])
      // this.chosenThesis = this.getThesis[0];
      // console.log(this.chosenThesis)
      for (let i = 0; i < this.total; i++) {
        if (this.getThesis[i].thesis_id === localStorage.getItem("thesis_id")) {
          this.chosenThesis = this.getThesis[i];
          console.log(this.chosenThesis);
        }
      }
        (this.student_id = this.chosenThesis.student_id),
        (this.student_name = this.chosenThesis.student_name),
        (this.student_email = this.chosenThesis.student_email),
        (this.department = this.chosenThesis.department),
        (this.thesis_id = this.chosenThesis.thesis_id),
        (this.title = this.chosenThesis.title),
        (this.category = this.chosenThesis.category),
        (this.status = this.chosenThesis.status)
      // localStorage.setItem("thesis_id", "");
    },
    
    async update() {
      axios
        .put(
          "http://localhost:3000/admin/updateThesis/"+this.thesis_id,
          {
            student_id: this.student_id,
            student_name: this.student_name,
            student_email: this.student_email,
            department: this.department,
            thesis_id: this.thesis_id,
            title: this.title,
            category: this.category,
            status: this.status,
            intern_year: this.intern_year,
            uploadAt: this.uploadAt,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res);
        });
      this.toggleModal();
      alert ("Update successfully!")
      window.location.reload();
    },
    async delete2() {
      axios
          .delete(
            "http://localhost:3000/admin/deleteThesis/"+this.thesis_id,
            { withCredentials: true }
          )
      alert ("Are you sure you want to delete this Thesis?")
      this.$router.push("/homepage")
    },
    async viewDetail(thesis){
      localStorage.setItem("thesis_id", thesis.thesis_id);
      this.$router.push("/detailPage")
    }
  },
};
</script>
<style></style>
