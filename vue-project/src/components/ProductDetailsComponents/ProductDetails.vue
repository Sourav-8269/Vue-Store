<template>
  <div id="container" >
    <!-- <h1>This is PD page</h1> -->
    <div id="lhs">
      <img :src="product.imageUrl" :alt="product.title" srcset="" />
    </div>
    <div id="rhs">
      <p> {{ product.title }}</p>
      <p>&#8377; {{ product.price }}</p>
      <q-btn @click="addtoCart(product)" id="addtoCart" color="black" label="Add to Cart"/>
    </div>
  </div>
  <div class="q-pa-md q-gutter-sm">
        <q-dialog v-model="add" seamless position="bottom">
          <q-card style="width: 350px">
            <q-linear-progress :value=band color="green"/>
            <q-card-section class="row items-center no-wrap">
              <div>
                <div class="text-weight-bold">Product Added</div>
                <!-- <div class="text-grey">Explore your Journey in Vue Store</div> -->
              </div>

              <q-space />

              <q-btn flat round icon="close" v-close-popup />
            </q-card-section>
          </q-card>
        </q-dialog>
    </div>
    <div class="q-pa-md q-gutter-sm">
        <q-dialog v-model="already" seamless position="bottom">
          <q-card style="width: 350px">
            <q-linear-progress :value=band color="blue"/>
            <q-card-section class="row items-center no-wrap">
              <div>
                <div class="text-weight-bold">Already Added</div>
                <div class="text-grey">You can alter quantity in payment page.</div>
              </div>

              <q-space />

              <q-btn flat round icon="close" v-close-popup />
            </q-card-section>
          </q-card>
        </q-dialog>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import {getDoc,doc,db} from "../../firebase.js";
import { useRoute } from "vue-router";
import { useCartStore } from '../../store.js';

const cartStore=useCartStore();
const add=ref(false);
const already=ref(false);
const band=ref(0);

const addtoCart=(product)=>{
  let result=(cartStore.checkInCart(product.id));
  handleAlert(result);
  if(!result){
    cartStore.addtoCart(product);
  }
}
const route=useRoute();
const product=ref({});

onMounted(async()=>{
    const docRef=doc(db,"vuestore",route.params.id);
    const docSnap=await getDoc(docRef);
    if(docSnap.exists()){
        // console.log(docSnap.data());
        let data=docSnap.data();
        data.id=docSnap.id;
        product.value=data;
        // console.log(product)
    }else{
        console.log("No Such Document");
    }
})

const handleAlert=(payload)=>{
  if(!payload){
    add.value=true;
  }else{
    already.value=true;
  }
  let id=setInterval(()=>{
    band.value+=0.5;
    if(band.value>1){
      clearInterval(id)
    }
  },350)
  band.value=0;
}

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
  border-radius:15px;
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
