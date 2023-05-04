<script setup lang="ts">
import "./config/fauxServer";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="site-wrapper">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped>
.site-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
