<template>
  <div id="cart">
    {{ visibility }}  
    <q-dialog :seamless="true" :modelValue="visibility" position="right">
      <q-card id="cart_section" style="width: 350px">
        <q-card-section>
          <div>
            <h4>Recently Added Items</h4>
          </div>

          <q-space />

          <div id="cart_products">
            <div v-for="item in 3" id="single_product">
              <div id="lhs">Image</div>
              <div id="rhs">Product Name</div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

defineProps(["visibility"]);
const dialog = ref(true);
console.log(dialog.value);
</script>

<style scoped>
#cart_section {
  height: 900px;
  margin-top: 10%;
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

#rhs {
  display: flex;
  flex: 4;
}
</style>
