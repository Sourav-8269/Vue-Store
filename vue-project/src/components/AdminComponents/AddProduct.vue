<template>
  <div>
    <div id="addproductform">
      <div class="q-pa-md" style="max-width: 400px">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            filled
            v-model="form.title"
            label="Product Title"
            hint="Product Name"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-input
            filled
            type="number"
            v-model="form.price"
            label="Product Price"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Please type your age',
            ]"
          />
          <q-file
            filled
            bottom-slots
            v-model="file"
            label="Label"
            counter
            @update:modelValue="fileupload"
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent />
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="file = null"
                class="cursor-pointer"
              />
            </template>

            <template v-slot:hint> Field hint </template>
          </q-file>

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
import {
  getStorage,
  ref as firebaseRef,
  uploadBytesResumable,
  getDownloadURL,
  addDoc,
  db,
  collection
} from "../../firebase.js";

import { reactive, ref } from "vue";
const file = ref(null);
const form = reactive({
  title: "",
  price: 0,
  imageUrl: "",
});
// console.log("Hii Sourav This Side")
const fileupload = () => {
  console.log(file.value);
  form.imageUrl = file.value;

  const storage = getStorage();
  const storageRef = firebaseRef(storage, "Products/" + file.value.name);
  console.log(storageRef);
  const uploadTask = uploadBytesResumable(storageRef, file.value);

  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        form.imageUrl=downloadURL;
      });
    }
  );
};

const onSubmit = async () => {
  console.log(form);

  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "vuestore"),form);
  console.log("Document written with ID: ", docRef.id);
};

const onReset = () => {
  // console.log("Reset")
  form.title = "";
  form.price = 0;
  form.imageUrl = "";
  file.value = "";
};
</script>
<style scoped></style>
