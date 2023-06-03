<template>
  <div>
    <CartSideBar/>
    <NavbarComponent/>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import CartSideBar from './components/CartComponents/CartSideBar.vue';
import NavbarComponent from './components/HomePageComponents/Navbar.vue';
</script>
<style scoped>
body {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  width: 100vw;
}
</style>
