<template>
  <div>
    <div id="navbar">
      <div id="left">
        <h5 @click="navigate()">Home</h5>
      </div>
      <div id="right">
        <h5>Account:</h5>
        <div id="cart">
            <q-icon name="shopping_cart" size="20px" >{{ msg }}</q-icon>
          <div id="cart_count">1</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router=useRouter();
const navigate=()=>{
  console.log("clicked");
  router.push("/")
}
</script>

<style scoped>
h1 {
  font-size: 40px;
  font-weight: 500;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
#navbar {
  width: 90%;
  padding: 1%;
  margin: auto;
  display: flex;
  height: 70px;
  align-items: center;
  border-bottom: 1px solid black;
}
#left {
  display: flex;
  flex: 3;
  align-items: center;
}
#right {
  display: flex;
  flex: 7;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}
#cart{
    display: flex;
    align-items: center;
}
#cart_count{
    padding-bottom: 12px;
}
</style>
