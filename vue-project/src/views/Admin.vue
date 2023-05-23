<template>
  <div>
    <h1>This is Admin Page</h1>
    <input type="text" v-model="form.name" >
    <h2>{{ form }}</h2>
  </div>
</template>

<script setup>
import { ref,reactive } from 'vue';

const form=reactive({
  name:""
});

</script>
<style scoped></style>
