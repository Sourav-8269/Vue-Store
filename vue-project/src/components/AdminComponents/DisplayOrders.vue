<template>
  <div>
    <h3 id="heading">Orders Page</h3>
    <div id="container" v-for="order in orders" >
    <!-- <h1>This is PD page</h1> -->
    <div id="lhs">
      <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png" :alt="order.name" srcset="" />
    </div>
    <div id="rhs">
      <p>Name: {{ order.name }}</p>
      <p>Address: {{ order.address }}</p>
      <p>Amount: &#8377; {{ order.total }}</p>
      <q-btn @click="addtoCart(order)" id="addtoCart" color="black" label="Show Products"/>
    </div>
  </div>
  </div>
</template>
<script setup>
import { onMounted,ref } from "vue";
import {db,collection,getDocs} from "../../firebase.js";

const orders=ref([]);

onMounted(async() => {
  // getData();
  const querySnapshot = await getDocs(collection(db, "orders"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    let order=doc.data();
    order.id=doc.id;
    orders.value.push(order);
    console.log(order);
    // console.log(data)
  });
});</script>

<style scoped>
#heading{
  text-align: center;
  font-size: 30px;
  margin-top: 10px;
  /* border: 1px solid red; */
}
#container{
  display: flex;
  padding: 5%;
  width: 50%;
  margin: auto;
  margin-top: 5%;
  font-size: 180%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius:25px;
  margin-bottom: 5%;
  justify-content: space-between;
}
#lhs{
  display: flex;
  flex: 5;
}
#lhs img{
  width: 90%;
}
#rhs{
  display: flex;
  flex: 5;
  flex-direction: column;
  margin-left: 5%;
}
@media all and (min-width: 550px) and (max-width: 900px) {
  #container{
    width: 70%;
  }
  #lhs img{
  width: 100%;
}
}
@media all and (min-width: 200px) and (max-width: 550px) {
  #container{
    width: 90%;
    font-size: 20px;
  }
  #lhs img{
  width: 100%;
}
}
</style>
