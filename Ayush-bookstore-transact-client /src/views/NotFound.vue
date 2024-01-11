<script setup lang="ts">
</script>
<style>
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
.not-found{
  text-align: center;
}
.heading{
  padding-bottom: 20px;
}
.button{
  padding-bottom: 100px;
}
</style>
<template>
  <div class="not-found">
    <div class="heading">
      <h1>Cant Find your page!</h1>
    </div>


      <router-link :to="{ name: 'category-view' }">
      <button class="rounded-button">
        Continue shopping
      </button>
    </router-link>


  </div>
  </template>