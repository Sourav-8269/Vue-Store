<template>
  <div>
    <h1>Products Page</h1>
  </div>
</template>
<script setup>
import axios from "axios";
axios.get("https://dummyjson.com/products")
.then((res)=>{
    console.log(res)
})
.catch((err)=>console.log(err))
</script>

<style lang="scss" scoped></style>
