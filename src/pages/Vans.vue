<script setup lang="ts" suspendible="false">
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { getVanData } from "../utils/auxFunctions";

import type { VanData } from "../config/types";
import type { Ref } from "vue";

const vans: Ref<VanData[] | undefined> = ref(undefined);
onMounted(async () => {
  vans.value = (await getVanData(`api/vans/`)) as VanData[];
});
const route = useRoute();

const typeFilter = ref(route.query.type || "");

const vansToDisplay = computed(() => {
  if (typeFilter.value) {
    return vans.value?.filter(
      (van: VanData) => van.type.toLowerCase() === typeFilter.value
    );
  } else {
    return vans.value;
  }
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
      <div :key="van.id" v-for="van of vansToDisplay" class="vanContainer">
        <router-link :to="`/vans/${van.id}`">
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
