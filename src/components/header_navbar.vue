<template>
    <div style="width:100%; height: 40px; margin-top: 0px; background-color: #0E426A">
        <v-img class="icon" id="log-out" src="@/assets/log-out.png"></v-img>
        <p class="text" style="color:white ; margin-left: 90%; cursor: pointer" > Log out </p>
    </div>
    <div class="header">
        <v-img style="margin-left:2%; margin-bottom:3%; width: 100px;height:50"  src="@/assets/hat.jpg"></v-img>
        <v-title style="font-family:cursive; margin-top:3%; margin-right:9%; font-size: 20px">
            Institutional Technology of Cambodia<br>
            <v-subTitle>Thesis</v-subTitle>
        </v-title>
        <search_bar style="margin-top: 6rem; margin-right:10%"></search_bar>
        <!-- <v-select label="All categories" :items="items" class="text" 
            style="width:14%; height:20px; margin-top:-20px; margin-left: 7%; padding-bottom:1rem;
                   position: absolute; top: 150px"
        ></v-select> -->
        <div class="text" style="position: absolute; top: 15px; right:0.5%">
            <v-row style="margin-top: 30px">
                <router-link to="/homepage">
                    <v-colume id="header-menu">Home</v-colume>
                </router-link>
                <router-link to="/thesisPage">
                    <v-colume id="header-menu">Thesis</v-colume>
                </router-link>
                <router-link to="/aboutusPage">
                    <v-colume id="header-menu">About Us</v-colume>
                </router-link>
                <router-link to="/contactPage">
                    <v-colume id="header-menu">Contact</v-colume>
                </router-link>
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
         text-decoration: underline;
         color: darkblue;
    }
    .text{
        font-size:20px;
        font-family: serif;
    }
    .header{
        width: 100%;
        height: 180px;
        margin-top:0px;
        box-shadow: 3px 5px 10px grey;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 3%
    }
    .icon{
        width: 30px;
        height: 30px;
    }
    #log-out{
        right:110px;
        top:5px;
        position: absolute;
    }
</style>