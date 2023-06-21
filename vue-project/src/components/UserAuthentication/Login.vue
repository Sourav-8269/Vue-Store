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
</template>

<script setup>
import { auth, provider } from "../../firebase.js";
import { signInWithPopup } from "firebase/auth";
import { useUserData } from "../../store";

function getFirstName(fullName) {
  // Split the full name string into an array of words
  var nameParts = fullName.trim().split(" ");

  // Return the first element of the array (the first name)
  return nameParts[0];
}

const userData=useUserData();
const handleClick = () => {
  try {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        console.log(res.user.displayName);
        userData.user.value=res.user;
        console.log(userData.user.value.displayName)
        let data=getFirstName(userData.user.value.displayName)
        userData.setFirstName(data);
        console.log(userData.getFirstName());
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
*{
  /* outline: 1px solid red; */
  font-size: 20px;
}
#container {
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
