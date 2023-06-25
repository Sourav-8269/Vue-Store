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

  const carTotal=computed(()=>{
    return cart.value.reduce((total,product)=>{
      console.log(total,product)
      return Number(total)+Number(product.price);
    },0)
  })

  const addtoCart=(product)=>{
    cart.value.push(product);
  }

  const removeFromCart=(id)=>{
    console.log(id)
    cart.value=cart.value.filter((el)=>{
      return el.id!==id;
    })
  }

  return {cart,cartCount,addtoCart,removeFromCart,carTotal};
})

export const useUserData=defineStore("user",()=>{
  const user=ref({});

  const firstName=ref("");

  const setFirstName=(name)=>{
    firstName.value=name;
  }

  const getFirstName=()=>{
    if(firstName.value){
      return firstName;
    }else{
      return null;
    }
  }

  const logout=()=>{
    user.value={};
    setFirstName(null);
  }

  return {user,firstName,setFirstName,getFirstName,logout}
})