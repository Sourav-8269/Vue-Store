<template>
  <div>
    <div id="main">
      <div id="addproductform">
        <div class="q-pa-md" style="max-width: 400px">
          <h3 id="heading" >Add User Details</h3>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            filled
            class="input"
            v-model="form.name"
            label="Your Name"
            hint="Your Name"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            filled
            class="input"
            type="number"
            v-model="form.contact"
            label="Your Contact Number"
            hint="Your Contact Number"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== NaN) || 'Please type your age',
            ]"
          />
          <q-input
            filled
            class="input"
            v-model="form.address"
            label="Your Address"
            hint="Your Address"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <div id="totalDiv">
            <p>Total</p>
            <p>&#8377; {{cartStore.carTotal}}</p>
          </div>

          <div id="buttons">
            <q-btn color="white" text-color="black" label="Cancel" @click="handleNavigate()" />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
              />
            <q-btn label="Submit" type="submit" color="primary" />
          </div>
        </q-form>
      </div>
    </div>
    <div id="order-summary">
      <OrderSummaryComponent/>
    </div>
  </div>
    <div class="q-pa-md q-gutter-sm">
        <q-dialog v-model="seamless" seamless position="bottom">
          <q-card style="width: 350px">
            <q-linear-progress :value=band color="green"/>

            <q-card-section class="row items-center no-wrap">
              <div>
                <div class="text-weight-bold">Thank You for choosing Vue Store</div>
                <div class="text-grey">Your Order will be delivered soon!</div>
              </div>

              <q-space />

              <q-btn flat round icon="close" v-close-popup />
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>
  </div>
</template>

<script setup>
import OrderSummaryComponent from "./OrderSummary.vue";
import { reactive, ref } from "vue";
import {useCartStore} from "../store.js";
import {db, collection,addDoc } from "../firebase.js";
import { useRouter } from "vue-router";

const cartStore=useCartStore();
const seamless=ref(false);
const band=ref(0);
const router=useRouter();

const handleNavigate=()=>{
  router.push("/");
}

const form = reactive({
  name: "",
  contact: null,
  address: "",
  order:cartStore.cart,
  total:cartStore.carTotal
});

const onSubmit = async () => {
  console.log(form);
  // onReset()

  const docRef=await addDoc(collection(db,"orders"),form);
  console.log(docRef)
  handleLogin();
  setTimeout(()=>{
    cartStore.clearCart();
    console.log(cartStore.cart.value);
    handleNavigate();
  },4000)

};

const onReset = () => {
  // console.log("Reset")
  form.name = "";
  form.contact = null;
  form.address = "";
};

const handleLogin=()=>{
  seamless.value=true
  let id=setInterval(()=>{
    band.value+=0.1;
    if(band.value>1){
      clearInterval(id)
    }
  },350)
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  font-family: Poppins;
  /* outline: 1px solid red; */
}
#heading{
  text-align: center;
  font-size: 30px;
  /* margin-top: 2px; */
  margin-bottom: 40px;
  /* border: 1px solid red; */
}
#addproductform{
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* border: 1px solid red; */
}
.input{
  /* border: 1px solid red; */
  width: 280px;
}
#totalDiv{
  background-color: #2464f0;
  /* background-color: #f2f2f2; */
  color: white;
  padding: 10px;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
}
#buttons{
  /* border: 1px solid red; */
  display: flex;
  float: right;
  gap: 20px;
  /* justify-content: space-between; */
}
#main{
  /* border: 1px solid red; */
  display: flex;
  float: right;
  width: 80%;
  margin: auto;
}
#order-summary{
  flex: 1.5;
}
#addproductform{
  flex: 1;
}
@media all and (min-width: 550px) and (max-width: 950px) {
  #main{
    width: 100%;
  }
}
@media all and (max-width: 950px) {
  #main{
    flex-direction: column;
    width: 100%;
  }
}
</style>
