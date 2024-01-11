<script setup lang="ts">
import type {BookItem} from "@/types";
import {useCartStore} from "@/stores/cart";
const cartStore=useCartStore();
const props = defineProps<{
  book: BookItem;
}>();
const bookImagePrefix = `${import.meta.env.BASE_URL}/book-images`;
const bookImageFileName = function (book: BookItem): string {
  let name = book.title.toLowerCase();
  name = name.replace(/ /g, "-");
  name = name.replace(/'/g, "");
  return `${name}.gif`;
};
</script>
<style scoped>

.book-box {
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
  padding: 1em;
  gap: 0.25em;
  align-items: center;
  font-family: fangsong;
  transition: transform 0.2s;
}

.book-box:hover {
  transform: scale(1.5);
}

.book-title {
  font-weight: bold;
  color: white;
  padding-top: 10px;
}

.book-author {
  font-style: italic;
  color: white;
}

.book-price {
  color: white;
  padding-bottom: 15px;
}

.book-image {
  width: 100px;
  height: 150px;
  position: relative;
  padding: 5px;
}

.overlay-button {
  background-color: #1e90ff;
  position: absolute;
  top: 0.50em;
  right: 0.50em;
  border: none;
  border-radius: 10px;
}

.overlay-button:hover {
  background-color: #0a6ebd;
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
.fa-readme{

  color: white;

}
.fa-readme:hover{

  cursor: pointer;
}
</style>

<template>

  <li class="book-box">
    <div class="book-image">
      <img
          :src="`${bookImagePrefix}/${bookImageFileName(book)}`"
          :alt="book.title"
      />
      <button v-if="props.book.isPublic" class="overlay-button">
        <i class="fab fa-readme" style="color: #ffffff;"></i>
      </button>
    </div>
    <div class="book-title">{{ book.title }}</div>
    <div class="book-author">{{ book.author }}</div>
    <div class="book-price">${{ (book.price / 100).toFixed(2) }}</div>
    <button class="rounded-button"
    @click="cartStore.addToCart(props.book)"
    >Add to Cart</button>
  </li>

</template>
