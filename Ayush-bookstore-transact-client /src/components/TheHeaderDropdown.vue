<script setup lang="ts">
import {useCategoryStore} from "@/stores/category";

const categoryStore=useCategoryStore();
</script>

<style scoped>
.header-dropdown {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-dropdown ul {
  display: none;
  background-color: white;
  color: black;
}

.header-dropdown li {
  padding: 0.25em 0.5em;
}

.header-dropdown a {
  color: black;
  text-decoration: none;
}

.header-dropdown li:hover {
  background: lightgray;
}

.header-dropdown:hover ul {
  position: absolute;
  top: 80px;
  z-index: 1;
  display: block;
  min-width: 8em;
  cursor: pointer;
}
.button-categories-button{
  font-size: 20px;
  color: white;
}
.fa-caret-down {
  margin-left: 5px;
}
</style>

<template>

  <div class="header-dropdown">
    <div class="button-categories-button">Categories<i class="fas fa-caret-down"></i></div>
    <ul>
      <li v-for="category in categoryStore.categoryList" :key="category.categoryId">
        <router-link :to="'../category/' + category.name">
          {{ category.name }}
        </router-link>
      </li>
    </ul>
  </div>

</template>




