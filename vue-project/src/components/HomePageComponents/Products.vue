<template>
  <div id="products">
    <div v-for="element in data" id="single_product">
      <img :src="element.thumbnail" :alt="element.title" srcset="" />
      <p>Title: {{ element.title }}</p>
      <p>Price: {{ element.price }}</p>
      <p>Rating: {{ element.rating }}</p>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted } from "vue";
import { ref } from "vue";

// Vue Lifecycles
// onMounted
// onUpdated
// onUnmounted

const data = ref([]);

const getData = () => {
  axios
    .get("https://dummyjson.com/products?skip=35")
    .then((res) => {
        // console.log(res.data)
      data.value = res.data.products;
      // console.log(data);
    })
    .catch((err) => console.log(err));
};

onMounted(() => {
  getData();
  let count=0;
  count++;
  console.log(count);
  
});
</script>

<style scoped>
#products {
  display: grid;
  width: 90%;
    margin: auto;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 3%;
    grid-row-gap:1%;
    margin-top: 3%;
}
#single_product{
    /* border: 1px solid red; */
    box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius:25px;
    padding:10%;
    text-align:left;
}
#products img{
    width: 100%;
    border-radius: 10px;
}
</style>
