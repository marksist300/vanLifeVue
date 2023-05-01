<script setup lang="ts"></script>

<template>
  <article>
    <h4 class="submenuTitle">Details</h4>
    <p class="submenuText">details: {{ $route.query }}</p>
  </article>
</template>

<style scoped>
.submenuTitle {
  font-weight: 700;
  padding-left: 1.7rem;
}
.submenuText {
  padding: 0.7rem 1.7rem;
}
</style>
