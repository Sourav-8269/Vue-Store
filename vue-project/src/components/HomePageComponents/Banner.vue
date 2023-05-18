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
  padding: 1%;
  color: #0088cc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
}
h1{
  font-weight: 500;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
