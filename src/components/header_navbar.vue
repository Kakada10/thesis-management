<template>
    <div style="width:100%; height: 40px; margin-top: 0px; background-color: #0E426A">
        <p class="text" style="color:white ; margin-left: 90%; cursor: pointer" > Log out </p>
    </div>
    <div class="header">
        <v-img style="width: 100px ; height: 100px; margin-top: 1rem" src="@/assets/logo.jpg"></v-img>
        <search_bar style="margin-top: 3rem"></search_bar>
        <v-img style="width: 40px ; height: 40px; margin-top: 3rem" src="@/assets/user.png"></v-img>
        <v-select label="All categories" :items="items" class="text" 
            style="width:14%; height:20px; margin-top:1rem; margin-left: 7%; padding-bottom:1rem;
                   position: absolute; top: 150px"
        ></v-select>
        <div class="text" style="position: absolute; top: 150px; right:5%">
            <v-row style="margin-top: 30px">
                <v-colume id="header-menu">Home</v-colume>
                <v-colume id="header-menu">Thesis</v-colume>
                <v-colume id="header-menu">About</v-colume>
                <v-colume id="header-menu">Contact</v-colume>
            </v-row>
        </div>
    </div>
</template>
<script>
import search_bar from './search_bar.vue';
export default {
  name: "header_navbar",
  components:{
    search_bar
  },
  data: () => ({
    menus: ['Blue', 'Red', 'Yellow', 'Green'],
  }),
};
</script>
<style>
    #header-menu{
        padding-left:50px;
        padding-right:50px;
        font-size:20px; 
        cursor: pointer
    }
    #header-menu:hover{
         border-bottom: none;
         box-shadow: 1px 1px 1px gray;
         text-decoration: underline;
         color: darkblue;
    }
    .text{
        font-size:20px;
        font-family: serif;
    }
    .header{
        width: 100%;
        height: 200px;
        margin-top:0px;
        box-shadow: 3px 5px 10px grey;
        display: flex;
        flex-wrap: wrap;
    }
</style>