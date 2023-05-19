<template>
  <div id="products">
    <div v-for="element in data" id="single_product">
      <img :src="element.images[0]" :alt="element.title" srcset="" />
      <p>{{ element.title }}</p>
      <p>{{ element.price }}</p>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted } from "vue";
import { ref } from "vue";

const data = ref([]);

const getData = () => {
  axios
    .get("https://dummyjson.com/products")
    .then((res) => {
      //   console.log(res)
      data.value = res.data.products;
      console.log(data);
    })
    .catch((err) => console.log(err));
};

onMounted(() => {
  getData();
});
</script>

<style scoped>
#products {
    /* margin-top: 3%; */
    display: grid;
    width: 90%;
    margin: auto;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 3%;
}
#single_product{
    border: 1px solid red;
}
#products>div img{
    width: 100%;
}
</style>
