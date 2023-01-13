<template>
  <header_navbar></header_navbar>
  <div class="container">
    <div id="container_1">
    </div>
    <div id="container_2">
      <v-img style="width:500px; height: 300px" src="../assets/thesis.png"></v-img>
    </div>
    <div id="container_3"></div>
  </div>
</template>
<script>
import header_navbar from "@/components/header_navbar.vue";
export default {
  name: "detailPage",
  components: {
    header_navbar
  },
}
</script>
<style>
  .container{
    display: flex;
    flex-wrap: wrap;
  }
  #container_1{
    padding:20px;
    margin: 20px;
    border: 1px solid black;
  }
  #container_2{
    border: 1px solid black;
    width: 190px;
    height: 250px;
    padding: -10px;
    border-radius: 10px;
  }
  #container_3{
    padding:20px;
    margin: 20px;
  }
  #picture{
    width: 200px;
    height:150px;
    border-radius:20px;
    box-shadow: 1px 1px 2px gray;
  }
</style>