<script setup lang="ts">

</script>

<style scoped>
.home-page {
  display: flex;
}

.primary-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #1e90ff;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 10px;
  font-size: 25px;
  border: none;
}

.primary-button:hover {

  background-color: #0a6ebd;
  cursor: pointer;

}

.hero-image {
  position: relative;
  background-image: url('/site-images/Index_Bg.jpg');
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 80vh;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

h1, p {
  margin: 0;
}

</style>
<template>
  <div class="home-page">
    <div class="hero-image">
      <div>
        <h1>Welcome to Vault!</h1>
        <p>We've got you covered for all your reading adventures.</p>
         <router-link :to="'../category/Fiction'">
        <button class="primary-button">Browse Books</button>
         </router-link>
      </div>
    </div>

  </div>
</template>
