<template>
  <div>
    <h3 id="heading">Orders by Sourav</h3>
    <div id="container" v-for="product in products">
      <!-- {{ products }} -->
      <div id="lhs">
        <img :src="product.imageUrl" :alt="product.title" srcset="" />
      </div>
      <div id="rhs">
        <p>{{ product.title }}</p>
        <p>&#8377; {{ product.price }}</p>
        <q-btn
          @click="addtoCart(product)"
          id="addtoCart"
          color="black"
          label="Add to Cart"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { db, getDoc, doc } from "../../firebase.js";
import { useRoute } from "vue-router";
import { useCartStore } from "../../store";

const route = useRoute();
const orders = ref({});
const products = ref([]);
const cartStore=useCartStore();

const addtoCart=(product)=>{
  cartStore.addtoCart(product);
}

onMounted(async () => {
  const docRef = doc(db, "orders", route.params.id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    // console.log(docSnap.data());
    let data = docSnap.data();
    data.id = docSnap.id;
    orders.value = data;
    // console.log(orders.value.order);
    products.value = orders.value.order;
  } else {
    console.log("No Such Document");
  }
});
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
  width: 50%;
  margin: auto;
  margin-top: 5%;
  font-size: 180%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 25px;
  margin-bottom: 5%;
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
@media all and (min-width: 550px) and (max-width: 900px) {
  #container {
    width: 70%;
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
  #lhs img {
    width: 100%;
  }
}
</style>
