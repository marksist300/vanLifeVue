<script setup lang="ts" suspendible="false">
import { onMounted, ref } from "vue";
import type { VanData } from "../config/types";
import type { Ref } from "vue";

const vans: Ref<VanData[] | null> = ref(null);

const getVanData = async () => {
  try {
    const response = await fetch(`api/vans`);
    const data = await response.json();
    if (data) {
      return data.vans;
    } else {
      throw new Error("Failed to fetch Van data");
    }
  } catch (error) {
    console.error(error);
  }
};
onMounted(async () => {
  vans.value = await getVanData();
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
      <div v-if="vans !== null" v-for="van of vans" class="vanContainer">
        <img :src="van.imageUrl" alt="Image of van" class="vanImg" />
        <div class="vanInfoContainer">
          <span class="vanTitle">{{ van.name }}</span>
          <span class="priceTag">{{ van.price }}<small>/day</small></span>
        </div>
        <span :class="`${van.type} tags`">{{ van.type }}</span>
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

.vanContainer {
  display: flex;
  flex-direction: column;
}

.vanImg {
  width: 10rem;
  height: 10rem;
}

.tags {
  color: #fff;
  font-weight: 500;
  align-self: start;
  margin-left: 0.15rem;
  padding: 0.3rem 1.2rem;
  border-radius: 5px;
}

.simple {
  background-color: #e17654;
}

.rugged {
  background-color: #115e59;
}

.luxury {
  background-color: #161616;
}
</style>
