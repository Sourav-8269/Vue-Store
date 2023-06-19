<template>
  <div id="welcome_div" >
    <h1>{{welcomemsg}}</h1>
  </div>
</template>

<script setup>
defineProps(["welcomemsg"]);
</script>
<style scoped>
#welcome_div{
  width: 90%;
  margin: auto;
  color: #0088cc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
}
h1{
  font-size: 35px;
  font-weight: 400;
  /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
}
@media all and (min-width: 200px) and (max-width: 450px) {
  h1{
    font-size: 25px;
  }
}
</style>
