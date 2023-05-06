<script setup lang="ts"></script>

<template>
  <article>
    <img :src="`${$route.query.imageUrl}`" alt="Image of van" class="vanImg" />
  </article>
</template>

<style scoped>
article {
  padding: 2rem 1.7rem;
}
.vanImg {
  height: 8rem;
  width: 8rem;
  margin-bottom: 0.5rem;
}
</style>
