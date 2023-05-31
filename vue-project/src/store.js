import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useCartStore = defineStore('cart',()=>{
  // other options...
  const cart=ref([]);
  const cartCount=computed(()=>cart.value.length);

  const addtoCart=(product)=>{
    cart.value.push(product);
    console.log(cart.value);
  }

  return {cart,cartCount,addtoCart};
})