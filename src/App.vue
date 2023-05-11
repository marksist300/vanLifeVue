<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted } from "vue";
import "./config/fauxServer";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const userFound = ref(localStorage.getItem("user"));
provide("user", userFound);

const handleStorageChange = () => {
  userFound.value = localStorage.getItem("user");
};

onMounted(() => {
  window.addEventListener("storage", handleStorageChange);
});

onUnmounted(() => {
  window.removeEventListener("storage", handleStorageChange);
});
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
