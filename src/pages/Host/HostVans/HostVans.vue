<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useFetch } from "@/utils/auxFunctions";

import type { Ref } from "vue";
import type { VanData, returnVanData } from "@/config/types";

const hostsVans: Ref<VanData[] | undefined> = ref(undefined);
const fetchError = ref(false);
const errorMessage = ref("");
const fetchLoading = ref(true);

onBeforeMount(async () => {
  const { data, isLoading, isError, error } = await useFetch<returnVanData>(
    `/api/host/vans`
  );
  hostsVans.value = data.value?.vans;
  fetchError.value = isError.value;
  errorMessage.value = error.value;
  fetchLoading.value = isLoading.value;
});
</script>

<template>
  <main class="fallbackContainer" v-if="fetchLoading">
    <h3 class="loadingText">Loading your vans</h3>
  </main>
  <main class="fallbackContainer" v-if="fetchError">
    <p class="errorText">{{ errorMessage }}</p>
  </main>
  <div v-else-if="!fetchLoading && hostsVans?.length === 0">
    <h3>You don't currently have any listed vans</h3>
  </div>
  <main class="container" v-else-if="hostsVans">
    <h2>Your listed vans</h2>
    <section>
      <div
        v-if="hostsVans && hostsVans.length > 0"
        v-for="van of hostsVans"
        :key="van.id"
        class="hostVanCard"
      >
        <router-link :to="{ path: '/host/vans/123', query: { ...van } }">
          <img :src="van.imageUrl" alt="van image" class="hostVanImg" />
          <div class="hostVanInfo">
            <h3>{{ van.name }}</h3>
            <span class="priceTag">${{ van.price }}<small>/day</small></span>
          </div>
        </router-link>
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
</style>
