<template>
    <div>
        <h1>Order Summary</h1>
        <div id="orders">
            <div id="container" v-for="order in orders">
      <!-- <h1>This is PD page</h1> -->
      <div id="lhs">
        <img
          src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png"
          :alt="order.name"
          srcset=""
        />
      </div>
      <div id="rhs">
        <p>Name: {{ order.name }}</p>
        <p>Address: {{ order.address }}</p>
        <p>Amount: &#8377; {{ order.total }}</p>
        <q-btn
          @click="navigate(order.id)"
          color="black"
          label="Show Products"
        />
      </div>
    </div>
        </div>
    </div>
</template>
<script setup>

</script>

<style scoped>

</style>