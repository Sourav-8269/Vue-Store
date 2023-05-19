<template>
  <div>
    <NavbarComponent />
    <BannerComponent welcomemsg="Welcome to Vue Shop" />
    <ProductComponent/>
  </div>
</template>
<script setup>
import NavbarComponent from "../components/HomePageComponents/Navbar.vue";
import BannerComponent from "../components/HomePageComponents/Banner.vue";
import ProductComponent from "../components/HomePageComponents/Products.vue"
</script>

<style lang="scss" scoped></style>
