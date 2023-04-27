<script setup lang="ts">
import { Suspense } from "vue";
</script>

<template>
  <header>
    <router-link to="/"><h1>#VanLife</h1></router-link>
    <div class="headerLinks">
      <router-link to="/host">Host</router-link>
      <router-link to="/about">About</router-link>
      <Suspense>
        <template #default>
          <router-link to="/vans">Vans</router-link>
        </template>
        <template #fallback> Loading... </template>
      </Suspense>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
}

h1 {
  font-weight: 900;
  color: #000;
}
header > a {
  font-weight: 600;
  color: #4d4d4d;
}
.headerLinks {
  display: flex;
  gap: 1rem;
}
.headerLinks > *:hover {
  font-weight: 500;
}
a.router-link-active {
  font-weight: 700;
  text-decoration: underline;
  color: #161616;
}
</style>
