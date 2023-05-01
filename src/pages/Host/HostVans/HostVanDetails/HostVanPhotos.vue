<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
const route = useRoute();
const imgUrl = ref("");
onMounted(() => {
  if (route.query.imageUrl && typeof route.query.imageUrl === "string") {
    imgUrl.value = route.query.imageUrl;
  }
});
</script>

<template>
  <article>
    <img :src="imgUrl" alt="Image of van" class="vanImg" />
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
