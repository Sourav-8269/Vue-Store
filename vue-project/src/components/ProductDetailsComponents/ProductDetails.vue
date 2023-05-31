<template>
  <div id="container" >
    <!-- <h1>This is PD page</h1> -->
    <div id="lhs">
      <img :src="product.imageUrl" :alt="product.title" srcset="" />
    </div>
    <div id="rhs">
      <p>Title: {{ product.title }}</p>
      <p>Price: {{ product.price }}</p>
      <q-btn @click="addtoCart(product)" id="addtoCart" color="black" label="Add to Cart"/>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import {getDoc,doc,db} from "../../firebase.js";
import { useRoute } from "vue-router";
import { useCartStore } from '../../store.js';

const cartStore=useCartStore();

const addtoCart=(product)=>{
  cartStore.addtoCart(product);
}
const route=useRoute();
const product=ref({});

onMounted(async()=>{
    const docRef=doc(db,"vuestore",route.params.id);
    const docSnap=await getDoc(docRef);
    if(docSnap.exists()){
        // console.log(docSnap.data());
        product.value=docSnap.data();
        // console.log(product)
    }else{
        console.log("No Such Document");
    }
})

</script>

<style scoped>
#container{
  display: flex;
  padding: 5%;
  width: 50%;
  margin: auto;
  margin-top: 5%;
  font-size: 180%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius:25px;
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
}
</style>
