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
            Year
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
      <tbody v-for="(item, i) in desserts" v-bind:key="i" id="getForm">
        <td
          style="
            border-bottom: 1px solid lightgray;
            padding-bottom: 10px;
            padding-top: 5px;
            padding-left: 100px;
            padding-right: 50px;
          "
        >
          {{ item.id }}
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
          {{ item.department }}
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
          {{ item.year }}
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
          {{ item.title }}
        </td>
        <td>
          <v-btn class="float-right" style="margin-left:10px ; font-size:13px" depressed color="red darken-1">
            Delete
          </v-btn>
          <v-btn class="float-right" style="margin:auto; font-size:13px; padding-left:10px" depressed color="teal lighten-1">
            Detail
          </v-btn>
        </td>
      </tbody>
    </table>
  </div>
</template>

<script>
// import popup_form from './popup_form.vue';
export default {
  //   name: "popup_form",
  //   components:{
  //       popup_form
  // },
  data() {
    return {
      dialog: false,
      desserts: [
        {
          id: 1,
          department: "GIC",
          year: 2018,
          title: "Lebrary Management",
        },
        {
          id: 2,
          department: "GIC",
          year: 2018,
          title: "Lebrary Management",
        },
        {
          id: 3,
          department: "GIC",
          year: 2018,
          title: "Lebrary Management",
        },
        {
          id: 4,
          department: "GIC",
          year: 2018,
          title: "Lebrary Management",
        },
        {
          id: 5,
          department: "GIC",
          year: 2018,
          title: "Lebrary Management",
        },
        {
          id: 6,
          department: "GIC",
          year: 2018,
          title: "Lebrary Management",
        },
        {
          id: 7,
          department: "GIC",
          year: 2018,
          title: "Lebrary Management",
        },
        {
          id: 8,
          department: "GIC",
          year: 2018,
          title: "Lebrary Management",
        },
        {
          id: 9,
          department: "GIC",
          year: 2018,
          title: "Lebrary Management",
        },
        {
          id: 10,
          department: "GIC",
          year: 2018,
          title: "Lebrary Management",
        },
      ],
    };
  },
};
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
