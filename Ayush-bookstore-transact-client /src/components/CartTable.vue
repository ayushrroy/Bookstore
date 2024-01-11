<script setup lang="ts">
import type { BookItem } from "@/types";
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();

const bookImageFileName = function (book: BookItem): string {
  let name = book.title.toLowerCase();
  name = name.replace(/ /g, "-");
  name = name.replace(/'/g, "");
  return `${name}.gif`;
};
const bookImagePrefix = `${import.meta.env.BASE_URL}/book-images`;

const updateCart = function (book: BookItem, quantity: number) {
  cartStore.cart.update(book, quantity);
};
</script>

<style scoped>
.cart-table {
  display: grid;
  grid-template-columns: max-content minmax(10em, 20em) repeat(3, max-content);
  row-gap: 1em;
  width: fit-content;
  margin: 0 auto;
  background-color: aliceblue;
}

ul {
  display: contents;
}

ul > li {
  display: contents;
}

.table-heading {
  background-color: #333;
  color: white;
}

.table-heading > * {
  background-color: #333;
  padding: 0.5em;
}

.heading-book {
  grid-column: 1 / 3;
}

.heading-price {
  grid-column: 3 / 5;
  text-align: right;
  display: flex;
}

.heading-subtotal {
  text-align: right;
  grid-column: -2 / -1;
  padding-left: 5em;
}

.fas{
  font-size: 25px;
}
cart-book-image {
  padding: 1em;

}
.cart-book-title{

}

.cart-book-image > * {
  margin-right: 0;
  height: 100px;
  width: auto;
}

img {
  display: block;
  width: 100px;
  height: auto;
}

.rect {
  background-color: var(--primary-color-dark);
}

.narrow-rect {
  width: 75px;
  height: 100px;
}

.square {
  width: 100px;
  height: 100px;
}

.wide-rect {
  width: 125px;
  height: 100px;
}

.cart-book-price {
  padding-left: 1em;
  text-align: right;
}

.cart-book-quantity {
  padding-left: 2em;
  padding-right: 1em;
  display: flex;
}

.cart-book-subtotal {
  text-align: right;
  padding-left: 1em;
  padding-right: 1em;
}

/* Row separators in the table */

.line-sep {
  display: block;
  height: 2px;
  background-color: gray;
  grid-column: 1 / -1;
}

/* Increment/decrement buttons */

.icon-button {
  border: none;
  cursor: pointer;
}

.inc-button {
  font-size: 1.125rem;
  color: var(--primary-color);
  margin-right: 0.25em;
}

.inc-button:hover {
  color: var(--primary-color-dark);
}

.dec-button {
  font-size: 1.125rem;
  color: #ccc;
}

.dec-button:hover {
  color: #aaa;
}

/* Chevron buttons */

.dec-arrow-button,
.inc-arrow-button {
  font-size: 1rem;
  color: var(--primary-color);
}

.dec-arrow-button:hover,
.inc-arrow-button:hover {
  color: var(--primary-color-dark);
}

input[type="number"] {
  width: 4em;
}

select {
  background-color: var(--primary-color);
  color: white;
  border: 2px solid var(--primary-color-dark);
  border-radius: 3px;
}
</style>

<template>
  <div class="cart-table">
    <ul>
      <li class="table-heading">
        <div class="heading-book">Book</div>
        <div class="heading-price">&nbsp;&nbsp;&nbsp;Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Quantity</div>
        <div class="heading-subtotal">Amount</div>
      </li>

      <template v-for="item in cartStore.cart.items" :key="item.book.bookId">
        <li>
          <div class="cart-book-image">
            <img
                :src="`${bookImagePrefix}/${bookImageFileName(item.book)}`"
                :alt="item.book.title"
                width="100px"
                height="auto"
            />
          </div>
          <div class="cart-book-title">{{ item.book.title }}</div>
          <div class="cart-book-price">
            ${{ (item.book.price / 100).toFixed(2) }}
          </div>
          <div class="cart-book-quantity">
            <div class="quantity">{{ item.quantity }}</div
            >&nbsp;
           <div>
             <button
               class="icon-button inc-button"
               @click="updateCart(item.book, item.quantity + 1)"
           >
             <i class="fas fa-plus-circle"></i>
           </button>
             <button
                 class="icon-button dec-button"
                 @click="updateCart(item.book, item.quantity - 1)"
             >
               <i class="fas fa-minus-circle"></i>
             </button></div>

          </div>
          <div class="cart-book-subtotal">
            ${{ (item.book.price *item.quantity/ 100).toFixed(2) }}
          </div>
        </li>
        <li class="line-sep"></li>

      </template>

    </ul>
    <div>
      <div v-if="cartStore.count==1">
        <div class="content">
          <div>
            You have {{cartStore.count}} book
          </div>
          <div >
            Total:${{cartStore.getTotalAmount}}
          </div>
        </div>
      </div>
      <div v-else>
        <div class="content">
          You have {{cartStore.count}} books
        </div>
        <div >
          Total:${{cartStore.getTotalAmount}}
        </div>

      </div>

    </div>
  </div>
</template>