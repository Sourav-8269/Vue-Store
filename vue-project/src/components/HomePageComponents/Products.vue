<template>
  <div>
    <div v-for="element in data" >{{ element.title}}</div>
    
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted } from "vue";
import {ref} from "vue";

let data=ref([]);

const getData=()=>{
    axios.get("https://dummyjson.com/products")
    .then((res)=>{
        // console.log(res)
        data.value=res.data.products;
        // console.log(data)
    })
    .catch((err)=>console.log(err))
}

onMounted(()=>{
    getData()
})


</script>

<style lang="scss" scoped></style>
