<template>
  <header_navbar></header_navbar>
  <div class="home">
    <button
      class="bt-modal"
      style="
        background-color: orange;
        padding: 5px;
        border: 1px solid gray;
        margin-top:10px;
        box-shadow: 1px 1px 2px grey;
        font-family: serif;
        color: black
      "
      @click="toggleModal"
      type="button"
    >
      Add New
    </button>
  </div>
  <listThesis></listThesis>
  <Modal @close="toggleModal" @submitted="upload" :modalActive="modalActive">
    <div class="modal-content">
      <h1>Add New Information</h1>
      <form @submit.prevent="submit">
        <v-row style="margin-top: 10px">
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
        <input type="file" id="addDocument" class="form-control-file" />
      </form>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/popup_form.vue";
import { ref } from "vue";
import axios from "axios";
import header_navbar from "@/components/header_navbar.vue";
import listThesis from "@/components/listThesis.vue";
export default {
  name: "thesisPage",
  components: {
    header_navbar,
    Modal,
    listThesis
  },
  data() {
    return {
      student_id: null,
      student_name: null,
      student_email: null,
      department: null,
      thesis_id: null,
      title: null,
      category: null,
      status: null,
      intern_year: null,
      uploadAt: null,
      }
   },
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal };
  },
  methods: {
    upload() {
      const fileSelector = document.getElementById("addDocument");
      axios
        .post(
          "http://localhost:3000/admin/uploadThesis",
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
            contentType: fileSelector.files[0].type,
            name: fileSelector.files[0].name,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res);
        });
      this.toggleModal();
      alert("Upload successfully!");
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  // background-color: rgba(0, 176, 234, 0.5);
  // height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // float: right;
  margin-left: 91%;
}

.bt-modal {
  border-style: solid;
  border-radius: 5px;
  border-width: medium;
  background-color: blue;
  color: white;
  padding: 5px;
}

.modal-content {
  display: flex;
  flex-direction: column;

  h1,
  p {
    margin-bottom: 16px;
  }

  h1 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
  }
}
</style>
