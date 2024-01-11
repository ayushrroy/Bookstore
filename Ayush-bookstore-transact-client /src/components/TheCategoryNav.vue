<script setup lang="ts">


import {useCategoryStore} from "@/stores/category";
const categoryStore=useCategoryStore();

</script>

<style scoped>
.category-buttons {
  display: flex;
  flex-direction: row;
  background-color: var(--neutral-color);
  text-align: center;
}

.button.category-button.router-link-active {
  background-color: var(--primary-color);
}

.button.category-button {
  background-color: var(--neutral-color);
}

.button.category-button:hover,
.button.category-button:active {
  background-color: var(--primary-color);
}
</style>

<template>
  <nav class="category-nav">
    <ul class="category-buttons">
      <li v-for="category in categoryStore.categoryList" :key="category.categoryId">
        <router-link
            :to="'/category/' + category.name"
            class="button category-button"
        >
          {{ category.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
