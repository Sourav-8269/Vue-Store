<template>
  <div>
    <h3 id="heading">Order Summary</h3>
    <div id="orders">
      <div id="container" v-for="product in cartStore.cart">
        <!-- {{ products }} -->
        <div id="lhs">
          <img :src="product.imageUrl" :alt="product.title" srcset="" />
        </div>
        <div id="rhs">
          <p>{{ product.title }}</p>
          <p>&#8377; {{ product.price }}</p>
          <div id="quantity-div">
            <q-icon name="remove" size="30px" id="remove-icon">
              <q-tooltip class="bg-red" :offset="[10, 10]">Remove</q-tooltip>
            </q-icon>
            <p id="quantity">1</p>
            <q-icon
              name="add"
              size="30px"
              id="remove-icon"
              @click="removeFromCart(products.id)"
            >
              <q-tooltip class="bg-red" :offset="[10, 10]">Add</q-tooltip>
            </q-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCartStore } from "../store";
import { ref } from "vue";

const cartStore = useCartStore();
</script>

<style scoped>
#heading {
  text-align: center;
  font-size: 30px;
  margin-top: 10px;
  /* border: 1px solid red; */
}
#container {
  display: flex;
  padding: 5%;
  width: 90%;
  margin: auto;
  margin-top: 5%;
  font-size: 180%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 8px;
  justify-content: space-between;
  /* background-color: #f2f2f2; */
  margin-bottom: 5%;
  /* border: 1px solid red; */
}
#lhs {
  display: flex;
  flex: 5;
}
#lhs img {
  width: 90%;
}
#rhs {
  display: flex;
  flex: 5;
  flex-direction: column;
  margin-left: 5%;
}
#quantity-div {
  display: flex;
  border: 2px solid #e2e8f0;
  border-radius: 5px;
  justify-content: space-around;
  width: 50%;
  align-items: center;
}
#quantity {
  font-size: 25px;
  /* border: 1px solid red; */
  padding: 0%;
  margin: 0%;
}
@media all and (min-width: 550px) and (max-width: 900px) {
  #container {
    width: 90%;
  }
  #lhs img {
    width: 100%;
  }
}
@media all and (min-width: 200px) and (max-width: 550px) {
  #container {
    width: 90%;
    font-size: 20px;
  }
  #quantity {
  font-size: 20px;
  }
  #lhs img {
    width: 100%;
  }
}
</style>
