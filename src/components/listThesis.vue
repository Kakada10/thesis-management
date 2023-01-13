<template>
  <!-- Button -->
  <div>
  <v-btn class="ml-10" variant="flat" color="blue lighten-1"> Select </v-btn>
  <v-btn class="ml-5" variant="flat" color="blue-grey lighten-1">
    Create new
  </v-btn>
  </div>

  <!-- Text -->
  <h1 class="text-h4 mt-5 ml-10 font-weight-bold">List of Thesis</h1>

  <!-- Table -->
  <v-table class="w-auto ml-10 mr-10 mt-6">
    <thead class="header">
      <tr>
        <th class="text-left text-h6">ID</th>
        <th class="text-left text-h6">Department</th>
        <th class="text-left text-h6">Year</th>
        <th class="text-left text-h6">Title</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.department }}</td>
        <td>{{ item.year }}</td>
        <td>{{ item.title }}</td>
        <td>
        <v-btn class="float-right" depressed color="teal lighten-1">
          Detail
        </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  data() {
    return {
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
</style>