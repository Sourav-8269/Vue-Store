<template>
  <div id="products">
    <div v-for="element in data" id="single_product" @click="showProduct(element.id)">
      <!-- <img :src="element.thumbnail" :alt="element.title" srcset="" /> -->
      <img :src="element.imageUrl" :alt="element.title" srcset="" />
      <p> {{ element.title }}</p>
      <p><span>&#8377;</span>{{ element.price }}</p>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted } from "vue";
import {useRouter} from "vue-router"
import { ref } from "vue";
import {db,collection,getDocs} from "../../firebase.js";
// console.log(db)

const router=useRouter();

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

onMounted(async() => {
  // getData();
  const querySnapshot = await getDocs(collection(db, "vuestore"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    let product=doc.data();
    product.id=doc.id;
    data.value.push(product);
    // console.log(data)
  });
});

const showProduct=(id)=>{
  // console.log(id);
  router.push(`productDetails/${id}`)
}

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
    font-size: 180%;
    /* border: 1px solid red; */
}
#single_product{
    /* border: 1px solid red; */
    box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius:25px;
    padding:10%;
    text-align:left;
    cursor: pointer;
}
#products img{
    width: 100%;
    border-radius: 10px;
}
span{
  margin-right: 10px;
}
</style>
