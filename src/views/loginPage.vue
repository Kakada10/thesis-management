<template>
  <div class="Login_Background">
    <div class="Login_Background_Pic">
        <div class="Login_Box">
            <div class="Login_Box_Text">
                <b><p>Welcome!</p></b>
                <input  type="text" id="login_input" v-model="email" placeholder="Email">
                <input   type="password" id="login_input" v-model="password" placeholder="Password">
                <div class="error_message" v-html="error"></div>
                <p style="position: absolute; top: 160px; font-size:10px; right: 20px">Forgot Password</p>
                    <button ref="input" @click="login" type="button" class="btn btn-light" data-toggle="modal" data-target="#exampleModalCenter" id="button_login">
                        Log in
                    </button>
            </div>
        </div>
        <!-- <img class="Login_Background_Logo" src="../assets/logo.png"> -->
    </div>
  </div>
</template>
<script>
//  import axios from 'axios';
//  import async from 'async--await';
    export default {
        data(){
            return {
                email: '',
                password: '',
                error: null
            }
        },
        methods: {
           async  login() { 
                    // const url="http://localhost:3000/login";
                    // axios.post(url,{email: this.email,password: this.password},{withCredentials:true})
                    // .then(response => {
                        
                    //     if(response.data.user.role === "student"){
                    //         window.localStorage.setItem('UserId',JSON.stringify(response.data.user.stuId));
                    //         this.$router.push('/studentHomePage');
                    //     }
                    //     else if(response.data.user.role === "teacher"){
                    //         window.localStorage.setItem('UserId',JSON.stringify(response.data.user.teacherId));
                    //         this.$router.push('/teacherHomePage');
                    //     }else{
                    //         this.$router.push('/adminHomePage');
                    //     }
                    //     console.log(response);
                    // }).catch((error) => {
                    //     this.error = error.response.data.error;
                    //     alert("The username and / or password is incorrect");   
                    // });
                    if(this.email=='admin' && this.password=='admin'){
                        this.$router.push('/dashboard');
                    }
                }
        }
    };
</script>

<style>
.error_message{
    color:rgb(111, 28, 28);
    font-size: 10px;
}
    .Login_Background{
        margin-top: 40px;
    }
    #login_input{
        width: 260px;
        height: 40px;
        font-size: 13px;
        margin-top: 10px;
        border-radius: 7px;
        border: 1px solid black;
    }
    
    #button_login{
        width: 263px;
        margin-top: 60px;
        background-color: #13506A; 
        color: white;
    }
    /* .Login_Background_Pic{
        margin: auto;
        position: relative; 
        width: 800px;
        height: 600px;
        background-image: url("../assets/logo.png");
        border-radius:20px;
    } */
    .Login_Box{
        width: 300px;
        height: 350px;
        border: 2px solid black;
        background-color: white;
        border-radius: 10px;
        top: 140px;
        right: 50px;
        position: absolute;
    }
    .Login_Background_Logo{
        position: absolute;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        top: 140px;
        left: 160px;
    }
    .Login_Box_Text{
        position: absolute;
        top: 25px;
        color: black;
        font-size: 25px;
    }
</style>