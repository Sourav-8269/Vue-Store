<template>
  <div>
    <q-dialog seamless :model-value=visibility position="right" auto-close=true>
      <q-card  id="cart_section" style="width: 350px">
        <q-card-section>
          <div v-if="!cartStore.cart.length" >
            <h4> No Recently Added Items</h4>
          </div>
          <div v-else >
            <h4>Recently Added Items</h4>
          </div>

          <q-space />

          <div id="cart_products">
            <div v-for="products in cartStore.cart" id="single_product">
              <div id="lhs">
                <img :src=products.imageUrl alt="" srcset="">
              </div>
              <div id="rhs">
                <q-icon name="close" size="30px" id="remove-icon" @click="removeFromCart(products.id)" >
                  <q-tooltip class="bg-red" :offset="[10, 10]">
                    Remove
                  </q-tooltip>
                </q-icon>
                <p>{{ products.title }}</p>
                <p>&#8377; {{ products.price }}</p>
              </div>
            </div>
          </div>

          <div id="order" v-if="cartStore.cart.length" style="font-family: Poppins;">
            <!-- <router-link to="/orders"> -->
              <q-btn color="secondary" @click="navigateToOrders()" label="Proceed" />
            <!-- </router-link> -->
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
  <div>
    <template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Click me" color="primary" @click="persistent = true" />

    <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-teal text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Login</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Please Login to continue!
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup @click="navigateToLogin()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useCartStore, useUserData } from '../../store';
import { ref } from 'vue';

const userData=useUserData();
const router=useRouter();
const { visibility, close } = defineProps(["visibility", "close"]);
const persistent=ref(false);

const cartStore=useCartStore();

const removeFromCart=(id)=>{
  cartStore.removeFromCart(id)
}

const navigateToLogin=()=>{
  close();
  router.push("/login")
}

const navigateToOrders=()=>{
  // console.log(userData.getFirstName());
  if((userData.getFirstName()==null||userData.getFirstName().value=="")){
    // alert("Please Sign In first")
    persistent.value=true;
  }else{
    close();
    router.push("/orders")
  }
}
</script>

<style scoped>
#cart_section {
  height: 900px;
  margin-top: 13%;
  /* border: 1px solid black; */
}

#single_product {
  display: flex;
  margin-bottom: 5%;
}

#single_product > div {
  /* border: 1px solid black; */
  margin-top: 5%;
}

#lhs {
  display: flex;
  flex: 6;
}

#lhs img{
  width: 90%;
}

#rhs {
  display: flex;
  flex: 4;
  flex-direction: column;
  font-size: 20px;
  font-family: Poppins;
  position: relative;
  padding-right: 30px;
}
#order{
  margin-bottom: 5%;
}
#remove-icon{
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
</style>
