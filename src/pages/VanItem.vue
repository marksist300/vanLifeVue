<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getVanData } from "../utils/auxFunctions";

import type { VanData } from "../config/types";
import type { Ref } from "vue";

const { params } = useRoute();
const vanData: Ref<VanData | undefined> = ref(undefined);

onMounted(async () => {
  vanData.value = (await getVanData(`/api/vans/${params.id}`)) as VanData;
  console.log(vanData?.value.name);
});
</script>

<template>
  <main>
    <router-link to="/vans" class="breadcrumbLink">Back to Vans</router-link>
    <img :src="vanData?.imageUrl" alt="Image of Van" class="vanImg" />
    <section class="vanDetailsContainer">
      <span :class="`${vanData?.type}Tag tag`">{{ vanData?.type }}</span>
      <h1 class="title">{{ vanData?.name }}</h1>
      <span class="priceTag">${{ vanData?.price }}<small>/day</small></span>
      <p>{{ vanData?.description }}</p>
      <button class="btn rentBtn">Rent this van</button>
    </section>
  </main>
</template>

<style scoped>
main {
  max-width: 700px;
  max-height: 700px;
  margin: auto;
}
.breadcrumbLink {
  display: block;
  text-decoration: underline;
  width: 90%;
  margin: 1rem auto;
}
.vanImg {
  display: block;
  width: 90%;
  margin: auto;
}

.vanDetailsContainer {
  width: 90%;
  padding: 1rem 1rem 1rem 0;
  max-width: 700px;
  max-height: 700px;
  margin: 1rem auto;
}

.rentBtn {
  background-color: #e17654;
  color: #fff;
  font-weight: 500;
  width: 100%;
}

.rentBtn:hover {
  transform: translate(1px, 1px);
}
</style>
