<script setup lang="ts">
import CartTable from "@/components/CartTable.vue";
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();
const clearCart = function () {
  cartStore.clearCart();
};
</script>
<style scoped>
h1 {
  margin: 1em auto;
  text-align: center;
}
.rounded-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #1e90ff;
  color: white;
  border-radius: 10px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  border: none;

}

.rounded-button:hover {
  background-color: #0a6ebd;
  cursor: pointer;
}
.rounded-button-shop {
  display: inline-block;
  padding: 10px 20px;
  background-color: #371eff;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  border: none;

}

.rounded-button-shop:hover {
  background-color: #2614bc;
  cursor: pointer;
}
.top{
  display: flex;
  justify-content: center;
  padding: 2em;
}
.top button:first-child {
  margin-right: 5px; /* Right margin for the first button */
}

.top button:last-child {
  margin-left: 5px; /* Left margin for the last button */
}
.bottom{
  display: flex;
  justify-content: center;
  padding: 2em;
}
.content{
  display: flex;
  justify-content: center;
}
</style>

<template>
  <div class="top">


    <router-link :to="{name:'category-view'}">
      <button class="rounded-button">
        Continue Shopping</button>
    </router-link>
&nbsp;&nbsp;&nbsp;&nbsp;<template v-if="!cartStore.cart.empty">
    <router-link to="/checkout">
      <button class="rounded-button-shop">
        Proceed To Checkout</button>
    </router-link>
  </template>
  </div>

  <template v-if="cartStore.cart.empty">
    <div class="content">
      <h4>
        Your cart is empty please add books to checkout.
      </h4>
    </div>
  </template>
  <template v-if="!cartStore.cart.empty">
    <cart-table></cart-table>


  </template>

  <template v-if="!cartStore.cart.empty">
<div class ="bottom">
  <button class="rounded-button"
          @click="clearCart"
  >Clear Cart</button>
</div>
  </template>

</template>