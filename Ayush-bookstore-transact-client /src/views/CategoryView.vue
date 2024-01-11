<script setup lang="ts">
import TheCategoryNav from "@/components/TheCategoryNav.vue";
import TheCategoryBookList from "@/components/TheCategoryBookList.vue";
import {useRoute} from "vue-router";
import {useBookStore} from "@/stores/book";
import {watch} from "vue";
import router from "@/router";

const route = useRoute();

const bookStore = useBookStore();

watch(
    () => route.params.name,
    async (newName) => {
       try{
         if(!newName) await router.push('/category/Fiction');
         else await bookStore.fetchBooks(newName as string);
       }
       catch (e) {
         await router.push('/not-found');
       }
    },
    { immediate: true }
);


</script>

<style scoped>
.bg-image {
  position: relative;
  background-image: url('/site-images/Cat_bg.jpg');
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 76vh;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
</style>
<template>
  <div >
    <the-category-nav></the-category-nav>
    <div class="bg-image">
      <the-category-book-list></the-category-book-list>
    </div>

  </div>
</template>
