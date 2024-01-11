<script setup lang="ts"></script>

<style scoped>

.search-container {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 5px 10px;
  width: 50%;
  height: 40px;
  border-radius: 10px;
}

.search-input {
  border: none;
  background: none;
  outline: none;
  width: 100%;
  padding-left: 10px;
  color: black;
}

.search-input::placeholder {
  color: black;
}

.search {
  width: 60%;
  text-align: -webkit-center;
  align-self: center;
}

</style>

<template>
  <section class="search">
    <div class="search-container">
      <input type="text" class="search-input" placeholder="Search Books.....">
      <i class="fas fa-search"></i>
    </div>
  </section>
</template>
