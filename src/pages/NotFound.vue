<script setup lang="ts"></script>

<template>
  <main class="container">
    <h1>Uh oh! Page not found</h1>
    <router-link to="/" class="homeBtn btn">Return home</router-link>
  </main>
</template>

<style scoped>
.container {
  padding: 1rem 1.6rem;
}
.homeBtn {
  background-color: #161616;
  color: #ffead0;
  padding: 1rem 4rem;
}
</style>
