<template>
<div class="login-container">
        <div class="ui container login-form">
            <h2 class="ui teal header">Login</h2>
            <div class="ui form large">
                <div class="field">
                  <div class="ui grid">
                    <div class="eight wide column">
                      <label for="email">Email</label>
                      <div class="ui left icon input">
                          <input type="email" v-model="email" placeholder="Email">
                          <i class="user icon"></i>
                      </div>
                    </div>
                    <div class="eight wide column">
                      <label for="username"> Or Username</label>
                      <div class="ui left icon input">
                          <input type="text" v-model="username" placeholder="Username">
                          <i class="user icon"></i>
                      </div>
                    </div>

                  </div>


                </div>
                <div class="field">
                    <label for="password">Password</label>
                    <div class="ui left icon input">
                        <input type="password" v-model="password" placeholder="Password">
                        <i class="lock icon"></i>
                    </div>
                </div>
                <button @click="loginFunction()" class="ui fluid large teal submit button">Login</button>
                <div v-if="errorMessage" class="ui negative message">
                  <i class="close icon" @click="clearToast"></i>
                  <div class="header">Error</div>
                  <p>{{ errorMessage }}</p>
                </div>
                
                <div class="ui message">
                    Don't have an account? <a href="#">Sign up</a>
                </div>
              </div>
        </div>

</div>

</template>

<script setup>
//import axios from 'axios';
import { ref } from 'vue';
import axios from 'axios';

const username = ref("")
const password = ref("")
const email = ref("")
const errorMessage = ref("")


const loginFunction =async() =>{
  

console.log(email.value);
console.log(password.value);
console.log(username.value);
try {
        const url="http://localhost:3000/easym/v1/users/login"
        const body ={
          email:email.value,
          username:username.value,
          password:password.value
        }
        //await axios.post('http://localhost:3000/easym/v1/users/login', {email:email.value, username:username.value, password:password.value} )
        const res=await axios.post(url, body,{ withCredentials: true })
        console.log(res.data)

//      window.open(res.data, '_blank');

    } catch (error) {
        console.log(error.message)
        errorMessage.value=error.response.data.message
    }


}


const clearToast=()=>{
  errorMessage.value=""
}

</script>

<style scoped>

body {
            background-color: #f4f4f4;
        }
        .login-container {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .login-form {
            width: 35%;
            max-width: 200px;
            padding: 2rem;
            background-color: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
        }
        .login-form h2 {
            text-align: center;
            margin-bottom: 1.5rem;
        }
</style>