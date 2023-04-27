<script setup lang="ts" suspendible="false">
import { onMounted, ref } from "vue";
import { getVanData } from "../utils/auxFunctions";

import type { VanData } from "../config/types";
import type { Ref } from "vue";

const vans: Ref<VanData[] | undefined> = ref(undefined);

onMounted(async () => {
  vans.value = (await getVanData(`api/vans`)) as VanData[];
});
</script>

<template>
  <main>
    <h1>Vans ready to go.</h1>
    <div class="searchFilters">
      <button class="btn">simple</button>
      <button class="btn">luxury</button>
      <button class="btn">rugged</button>
    </div>

    <section class="vanContainerSection">
      <div
        :key="van.id"
        v-if="vans !== null"
        v-for="van of vans"
        class="vanContainer"
      >
        <router-link :to="`vans/${van.id}`">
          <img :src="van.imageUrl" alt="Image of van" class="vanImg" />
          <div class="vanInfoContainer">
            <span class="vanTitle">{{ van.name }}</span>
            <span class="priceTag">${{ van.price }}<small>/day</small></span>
          </div>
          <span :class="`${van.type}Tag tag`">{{ van.type }}</span>
        </router-link>
      </div>
    </section>
  </main>
</template>

<style scoped lang="css">
main {
  color: black;
  padding: 1rem 1.6rem;
}

.searchFilters {
  display: flex;
  gap: 1rem;
  color: #4d4d4d;
}

.vanContainerSection {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 2.5rem;
  margin-top: 3rem;
}
.vanContainer {
  display: flex;
  flex-direction: column;
}

.vanInfoContainer {
  display: flex;
  align-self: start;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  margin-top: 0.3rem;
}

.priceTag {
  display: flex;
  flex-direction: column;
}

.vanImg {
  width: 10rem;
  height: 10rem;
  cursor: pointer;
}
</style>
