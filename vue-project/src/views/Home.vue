<template>
  <div>
    <BannerComponent welcomemsg="Welcome to Vue Shop" />
    <ProductComponent/>
  </div>
</template>
<script setup>
import BannerComponent from "../components/HomePageComponents/Banner.vue";
import ProductComponent from "../components/HomePageComponents/Products.vue"
</script>

<style scoped></style>
