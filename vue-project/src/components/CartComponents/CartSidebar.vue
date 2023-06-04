<template>
  <div id="cart">
    <q-dialog :seamless="true" :model-value=visibility position="right" auto-close="true">
      <q-card id="cart_section" style="width: 350px">
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
                <p>Title: {{ products.title }}</p>
                <p>Price: {{ products.price }}</p>
                <q-icon name="delete" @click="removeFromCart(products.id)" />
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { useCartStore } from '../../store';
defineProps(["visibility"]);

const cartStore=useCartStore();

const removeFromCart=(id)=>{
  cartStore.removeFromCart(id)
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
}

#single_product > div {
  border: 1px solid black;
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
}
</style>
