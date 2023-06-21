<template>
  <div>
    <div id="navbar">
      <div id="left">
        <h5 id="home" @click="navigateHome()">Home</h5>
      </div>
      <div id="right">
        <h5 @click="navigateOrders()">Orders</h5>
        <button class="login-button" @click="navigateLogin()" v-if="userData.user.value==undefined">Login</button>
        <button class="login-button" @click="Logout()" v-else="userData.user.value==undefined">Logout</button>
        <h5 id="account" v-if="userData.user.value!=undefined">{{ userData.getFirstName().value }}</h5>
        <!-- <h5 id="account" v-if="userData.user.value!=undefined">{{userData.user.value.displayName}}</h5> -->
        <h5 id="account" v-else>Account:</h5>
        <div id="cart">
            <q-icon name="shopping_cart" @click="dialog=!dialog" size="20px" ></q-icon>
            <div id="cart_count">{{ cartStore.cartCount }}</div>
            <CartSideBarComponent :visibility="dialog"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useCartStore, useUserData } from '../../store.js';
import CartSideBarComponent from '../CartComponents/CartSideBar.vue';
import {  ref } from 'vue';

const dialog=ref(false);

const userData=useUserData();
const cartStore=useCartStore();
// console.log(cartStore)

const router=useRouter();
const navigateHome=()=>{
  router.push("/")
}
const navigateOrders=()=>{
  router.push("/showOrders")
}
const navigateLogin=()=>{
  router.push("/login")
}
</script>

<style scoped>
#navbar {
  width: 90%;
  padding: 1%;
  margin: auto;
  display: flex;
  height: 70px;
  align-items: center;
  border-bottom: 1px solid black;
}
#left {
  display: flex;
  flex: 3;
  align-items: center;
  /* border: 1px solid red; */
  /* justify-content: space-around; */
}
#right>h5:nth-child(1){
  cursor: pointer;
  margin-right: 7px;
  /* border: 1px solid red; */
}
#home{
  cursor: pointer;
}
#right {
  display: flex;
  flex: 7;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}
#cart{
    display: flex;
    align-items: center;
    cursor: pointer;
}
#cart_count{
    padding-bottom: 12px;
}
.login-button {
  padding: 8px 20px;
  font-size: 16px;
  font-weight: 500;
  font-weight: bold;
  color: black;
  background-color: white;
  /* background-color: #5f9ea0; */
  border: 1px solid #E2E8F0;
  /* border: none; */
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #e0e9e9;
}

@media all and (min-width: 350px) and (max-width: 500px) {
  #right>h5{
    font-size: 20px;
  }
  #home{
    font-size: 20px;
  }
  #account{
    display: none;
  }
}
@media all and (min-width: 200px) and (max-width: 350px) {
  #right>h5:nth-child(1){
    margin-right: 1%;
  }
  #right>h5{
    gap: 5px;
    font-size: 18px;
  }
  #home{
    font-size: 18px;
  }
}
</style>
