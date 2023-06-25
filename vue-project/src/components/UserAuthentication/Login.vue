<template>
  <div>
    <div id="container">
      <img class="vue-store-logo" src="../../assets/vuestore.png" alt="" srcset="">
      <p>Welcome to Vue Store</p>
      <p>Log in with your account to continue</p>
      <button class="google-login-button" @click="handleClick">
        <img src="../../assets/google-logo-png-29546.png" alt="Google" />
        <span>Login with Google</span>
        <!-- <p>{{ userData.user.UserImpl.displayName }}</p> -->
      </button>
      <!-- <h1 v-if="userData.user.value.displayName!=undefined">{{userData.user.value.displayName}}</h1> -->
    </div>
  </div>
  <div class="q-pa-md q-gutter-sm">
        <q-dialog v-model="seamless" seamless position="bottom">
          <q-card style="width: 350px">
            <q-linear-progress :value=band color="green"/>

            <q-card-section class="row items-center no-wrap">
              <div>
                <div class="text-weight-bold">Login Success</div>
                <div class="text-grey">Explore your Journey in Vue Store</div>
              </div>

              <q-space />

              <q-btn flat round icon="close" v-close-popup />
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>
</template>

<script setup>
import { auth, provider } from "../../firebase.js";
import { signInWithPopup } from "firebase/auth";
import { useUserData } from "../../store";
import {ref} from "vue"
import { useRouter } from "vue-router";
const seamless=ref(false);
const band=ref(0);

const router=useRouter();

function getFirstName(fullName) {
  // Split the full name string into an array of words
  var nameParts = fullName.trim().split(" ");

  // Return the first element of the array (the first name)
  return nameParts[0];
}


const handleLogin=()=>{
  seamless.value=true
  let id=setInterval(()=>{
    band.value+=0.1;
    if(band.value>1){
      clearInterval(id)
    }
  },350)
}

const userData=useUserData();
const handleClick = () => {
  try {
    signInWithPopup(auth, provider)
      .then((res) => {
        // console.log(res);
        // console.log(res.user.displayName);
        userData.user.value=res.user;
        // console.log(userData.user.value.displayName)
        let data=getFirstName(userData.user.value.displayName)
        userData.setFirstName(data);
        // console.log(userData.getFirstName());
        handleLogin();
        setTimeout(()=>{
          router.push("/")
        },4000)
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};
</script>
<style scoped>
#container {
  font-size: 20px;
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  height: 80vh;
  /* line-height: 1px; */
  justify-content: center;
  flex-direction: column;
}
#container p:nth-child(1){
  font-size: 24px;
  border: 1px solid red;
}
.vue-store-logo{
  width: 100px;
  /* height: 100px; */
}
.google-login-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 6px;
  cursor: pointer;
}

.google-login-button img {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.google-login-button span {
  font-size: 14px;
}
@media all and (min-width: 200px) and (max-width: 550px) {
  *{
    font-size: 16px;
  }
}
</style>
