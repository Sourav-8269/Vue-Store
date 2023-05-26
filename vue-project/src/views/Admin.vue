<template>
  <div>
    <!-- <h1>This is Admin Page</h1> -->
    <!-- <input type="text" v-model="form.name" > -->
    <AddProductComponent/>
    <!-- <h2>{{ form }}</h2> -->
  </div>
</template>

<script setup>
import AddProductComponent from '../components/AdminComponents/AddProduct.vue';
import { ref,reactive } from 'vue';

const form=reactive({
  name:""
});

</script>
<style scoped></style>
