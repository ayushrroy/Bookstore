<script setup lang="ts">
import TheHeaderDropdown from "@/components/TheHeaderDropdown.vue";
import TheHeaderSearchBar from "@/components/TheHeaderSearchBar.vue";
import {useCartStore} from "@/stores/cart";
const cartStore=useCartStore();

</script>


<style scoped>
header {
  background: var(--secondary-background-color);
  display: flex;


}

.text-logo {
  font-family: var(--title-font-family);
  color: white;
  padding-top: 12px;
  display: flex;
}


.login-container {
  position: relative;
  display: inline-block;
  padding: 5px;
  font-size: larger;
}


.dropdown-content a {
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
}


.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.category-menu ul {
  list-style: none;
  padding: 0;
}


.category-item a {
  text-decoration: none;
  color: #ffffff;
}

.dropdown a {
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
}



.cart {
  color: #ffffff;
  font-size: 45px;
  position: relative;
  padding-left: 5px;
  padding-top: 15px;
}

.cart-parent {
  display: flex;
  justify-content: center;
  align-items: center;

}

.cart-count {
  position: absolute;
  font-size: 17px;
  color: white;
  padding: 2px 5px;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
}


.user-login {
  color: white;
}

.login-container-parent {
  display: flex;
  justify-content: center;
  align-items: center;

}

.left-elements {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}

.bookstore-logo {
  display: flex;
}

.fa-search {
  color: black;
}

</style>

<template>
  <header class="container">
    <section class="bookstore-logo">
      <div class="text-logo">
        <router-link to="/">

          <img
              src="/site-images/logo.png"
              alt="Another Bookstore Logo"
              width="100"
              height="auto"
              style="margin-top: -9px"
          />

        </router-link>
        <router-link to="/">
          <h1 class="text-logo">Vault</h1>
        </router-link>

      </div>

    </section>

    <!-- Search bar -->
   <the-header-search-bar></the-header-search-bar>

    <!-- login -->
    <div class="left-elements">
      <section class="login-container-parent">
        <div class="login-container">
          <div  class="user-login">
            Hi Ayush!
          </div>
        </div>
      </section>
      <TheHeaderDropdown></TheHeaderDropdown>
      <router-link to="/cart">
      <section class="cart-parent">
        <div class="cart">
          <i class="far fa-bookmark"><span class="cart-count">
          {{cartStore.count}}</span></i>
        </div>
      </section>
      </router-link>
    </div>

  </header>
</template>
