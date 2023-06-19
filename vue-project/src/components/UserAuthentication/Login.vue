<template>
  <div>
    <div id="container">
      <img class="vue-store-logo" src="../../assets/vuestore.png" alt="" srcset="">
      <p>Welcome to Vue Store</p>
      <p>Log in with your OpenAI account to continue</p>
      <button class="google-login-button" @click="handleClick">
        <img src="../../assets/google-logo-png-29546.png" alt="Google" />
        <span>Login with Google</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { auth, provider } from "../../firebase.js";
import { signInWithPopup } from "firebase/auth";
const handleClick = () => {
  try {
    signInWithPopup(auth, provider)
      .then((res) => {
        // console.log(res);
        console.log(res);
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
  outline: 1px solid red;
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
#container>p:nth-child(1){
  font-size: 24px;
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
</style>
