<template>
  <!-- Text -->
  <div style="display: flex; flex-wrap: wrap">
    <h1 style="text-align: left; margin-left: 20px; margin-right: 940px">
      List of Thesis
    </h1>
  </div>
  <div class="file_wrappers" id="getStudents2">
    <table class="table table-hover" id="file_wrapper">
      <thead class="thead-dark">
        <tr>
          <th
            style="
              padding-bottom: 20px;
              padding-top: 5px;
              padding-left: 100px;
              padding-right: 50px;
            "
            scope="col"
          >
            ID
          </th>
          <th
            style="
              padding-bottom: 20px;
              padding-top: 5px;
              padding-left: 100px;
              padding-right: 100px;
            "
            scope="col"
          >
            Department
          </th>
          <th
            style="
              padding-bottom: 20px;
              padding-top: 5px;
              padding-left: 100px;
              padding-right: 100px;
            "
            scope="col"
          >
            Category
          </th>
          <th
            style="
              padding-bottom: 20px;
              padding-top: 5px;
              padding-left: 100px;
              padding-right: 100px;
            "
            scope="col"
          >
            Title
          </th>
          <th
            style="
              padding-bottom: 20px;
              padding-top: 5px;
              padding-left: 100px;
              padding-right: 100px;
            "
            scope="col"
          ></th>
        </tr>
      </thead>
      <tbody v-for="(thesis, i) in getThesis" v-bind:key="i" id="getForm">
        <td
          style="
            border-bottom: 1px solid lightgray;
            padding-bottom: 10px;
            padding-top: 5px;
            padding-left: 100px;
            padding-right: 50px;
          "
        >
          {{ thesis.thesis_id }}
        </td>
        <td
          style="
            border-bottom: 1px solid lightgray;
            padding-bottom: 10px;
            padding-top: 5px;
            padding-left: 100px;
            padding-right: 100px;
          "
        >
          {{ thesis.department }}
        </td>
        <td
          style="
            border-bottom: 1px solid lightgray;
            adding-bottom: 10px;
            padding-top: 5px;
            padding-left: 100px;
            padding-right: 100px;
          "
        >
          {{ thesis.category }}
        </td>
        <td
          style="
            border-bottom: 1px solid lightgray;
            padding-bottom: 10px;
            padding-top: 5px;
            padding-left: 100px;
            padding-right: 100px;
          "
        >
          {{ thesis.title }}
        </td>
        <td>
          <v-btn
            class="float-right"
            style="margin-left: 10px; font-size: 13px"
            depressed
            color="red darken-1"
            @click = "delete2(thesis)"
          >
            Delete
          </v-btn>
          <v-btn
            class="float-right"
            style="margin: auto; font-size: 13px; padding-left: 10px"
            depressed
            color="teal lighten-1"
            @click = "viewDetail(thesis)"
          >
            Detail
          </v-btn>
        </td>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
      return {
        dialog: false,
        thesis_id: null,
        department: null,
        category: null,
        title: null,
        getThesis: null,
        searchTxt:null
    }
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
    },
    async viewDetail(thesis){
      localStorage.setItem("thesis_id", thesis.thesis_id);
      this.$router.push("/detailPage")
    },
    async delete2(thesis_id) {
      axios
          .delete(
            "http://localhost:3000/admin/deleteThesis/"+thesis_id,
            { withCredentials: true }
          )
      alert ("Are you sure you want to delete this Thesis?")
      this.$router.push("/thesisPage")
    },
     async search(thesis) {
      const url = "http://localhost:3000/searchThesis/"+thesis;
      if (this.searchTxt != null) {
        const response = await axios.post(
          url,
          { search: thesis },
          { withCredentials: true }
        );
        this.getThesis = response.data;
        this.total = response.data.length;
      }
    },
  },
}
</script>

<style scoped>
.header {
  background-color: #b0bec5;
}
.file_wrappers {
  margin-top: 30px;
  margin-left: 20px;
  padding: 20px;
  font-size: 18px;
  font-family: serif;
  box-shadow: 1px 1px 1px 1px gray;
  margin-bottom: 50px;
  margin-right: 20px;
  background-color: rgba(211, 211, 211, 0.1);
}
#getForm:hover {
  background-color: rgba(0, 0, 0, 0.148);
  cursor: pointer;
  transition: margin-top 0.5s;
}
</style>
