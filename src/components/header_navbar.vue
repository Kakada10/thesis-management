<template>
    <div class="header">
        <v-img style="left:40px; width: 50px;position: absolute; height:30"  src="@/assets/hat.jpg"></v-img>
        <v-title style="font-family:cursive; left: 100px ;top:5px; position: absolute; font-size: 13px">
            Institutional Technology of Cambodia<br>
            <v-subTitle>Thesis</v-subTitle>
        </v-title>
        <search_bar style="position: absolute;"></search_bar>
        <div class="text" style="margin:auto;position:relative; color: black">
            <v-row style="top:10px; ">
                <router-link  style="text-decoration: none" to="/homepage">
                    <v-colume id="header-menu">Home</v-colume>
                </router-link>
                <router-link style="text-decoration: none" to="/thesisPage">
                    <v-colume id="header-menu">Thesis</v-colume>
                </router-link>
                <router-link style="text-decoration: none" to="/aboutusPage">
                    <v-colume id="header-menu">About Us</v-colume>
                </router-link>
                <router-link style="text-decoration: none" to="/contactPage">
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
        font-size:16px;
        font-family: serif;
    }
    .header{
        width: 100%;
        height: 60px;
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