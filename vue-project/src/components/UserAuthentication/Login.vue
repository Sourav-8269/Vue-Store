<template>
  <div>
    <h5>Login with Google</h5>
    <div id="container">
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
#container {
  display: flex;
  align-items: center;
  justify-content: center;
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
