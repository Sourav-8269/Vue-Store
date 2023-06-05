<template>
  <div>
    <h3 id="heading" >Add User Details</h3>
    <div id="addproductform">
      <div class="q-pa-md" style="max-width: 400px">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            filled
            class="input"
            v-model="form.name"
            label="Your Name"
            hint="Your Name"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            filled
            class="input"
            type="number"
            v-model="form.contact"
            label="Your Contact Number"
            hint="Your Contact Number"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== NaN) || 'Please type your age',
            ]"
          />
          <q-input
            filled
            class="input"
            v-model="form.address"
            label="Your Address"
            hint="Your Address"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <div>
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import {useCartStore} from "../store.js";
import {db, collection,addDoc } from "../firebase.js";

const cartStore=useCartStore();

const file = ref(null);
const form = reactive({
  name: "",
  contact: null,
  address: "",
  order:cartStore.cart,
  total:cartStore.carTotal
});

const onSubmit = async () => {
  console.log(form);
  // onReset()

  const docRef=await addDoc(collection(db,"orders"),form);
  console.log(docRef)

};

const onReset = () => {
  // console.log("Reset")
  form.name = "";
  form.contact = null;
  form.address = "";
};
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  /* outline: 1px solid red; */
}
#heading{
  text-align: center;
  font-size: 30px;
  margin-top: 10px;
  /* border: 1px solid red; */
}
#addproductform{
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
}
.input{
  /* border: 1px solid red; */
  width: 280px;
}
</style>
