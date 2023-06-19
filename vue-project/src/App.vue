<template>
  <div>
    <NavbarComponent/>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import NavbarComponent from './components/HomePageComponents/Navbar.vue';
</script>
<style scoped>
body {
  font-family: "Poppins" !important;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  width: 100vw;
}
</style>
