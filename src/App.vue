<script setup lang="ts"></script>

<template>
  <header>
    <router-link to="/"><h1>#VanLife</h1></router-link>
    <div class="headerLinks">
      <router-link to="/about">About</router-link>
      <router-link to="/vans">Vans</router-link>
    </div>
  </header>
  <router-view></router-view>
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
</style>
