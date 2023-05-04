<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getVanData } from "@/utils/auxFunctions";

import type { Ref } from "vue";
import type { VanData } from "@/config/types";

const hostsVans: Ref<VanData[] | []> = ref<VanData[] | []>([]);
const isLoading = ref(false);

onMounted(() => {
  const loadVanData = async () => {
    isLoading.value = true;
    hostsVans.value = (await getVanData(`/api/host/vans`)) as VanData[];
    isLoading.value = false;
  };
  loadVanData();
});
</script>

<template>
  <main class="container">
    <h2>Your listed vans</h2>

    <section>
      <div v-if="isLoading === true">
        <h1>Loading vans now</h1>
      </div>
      <div
        v-else-if="hostsVans?.length > 0"
        v-for="van of hostsVans"
        :key="van.id"
        class="vanCard"
      >
        <router-link :to="{ path: '/host/vans/123', query: { ...van } }">
          <img :src="van.imageUrl" alt="van image" class="vanImg" />
          <div class="vanInfo">
            <h3>{{ van.name }}</h3>
            <span class="priceTag">${{ van.price }}<small>/day</small></span>
          </div>
        </router-link>
      </div>
      <div v-else>
        <h3>You don't currently have any listed vans</h3>
      </div>
    </section>
    <router-view></router-view>
  </main>
</template>

<style scoped>
.container {
  width: 90%;
  margin: auto;
}
.vanCard {
  display: flex;
  align-items: center;
  background-color: rgba(255, 254, 254, 0.953);
  margin-bottom: 1rem;
  padding-block: 1.3rem;
  padding-left: 1.6rem;
}
img {
  height: 9rem;
  width: 9rem;
  cursor: pointer;
}

.vanInfo {
  margin-left: 1rem;
}
</style>
