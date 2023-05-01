<script setup lang="ts"></script>

<template>
  <article>
    <h4 class="submenuTitle">${{ $route.query.price }}<small>/day</small></h4>
  </article>
</template>

<style scoped>
.submenuTitle {
  font-weight: 700;
  font-size: 2rem;
  padding-left: 1.7rem;
}
small {
  font-weight: 300;
  font-size: 1rem;
  color: #4d4d4d;
}
</style>
