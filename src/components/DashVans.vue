<script setup lang="ts" async>
import { ref } from "vue";
import { useFetch } from "@/utils/auxFunctions";

import type { Ref } from "vue";
import type { VanData, returnVanData } from "@/config/types";

const hostsVans: Ref<VanData[] | undefined> = ref(undefined);
const fetchError = ref(false);
const errorMessage = ref("");
const fetchLoading = ref(true);

const { data, isLoading, isError, error } = await useFetch<returnVanData>(
  `/api/host/vans`
);
hostsVans.value = data.value?.vans;
fetchError.value = isError.value;
errorMessage.value = error.value;
fetchLoading.value = isLoading.value;
</script>

<template>
  <section>
    <div
      v-if="hostsVans && hostsVans.length > 0"
      v-for="van of hostsVans"
      :key="van.id"
      class="hostVanCard"
    >
      <router-link :to="{ path: '/host/vans/123', query: { ...van } }">
        <img :src="van.imageUrl" alt="van image" class="hostVanImg" />
        <div class="vanInfo">
          <h3>{{ van.name }}</h3>
          <span class="priceTag">${{ van.price }}<small>/day</small></span>
        </div>
      </router-link>
      <router-link
        :to="{ path: '/host/vans/123', query: { ...van } }"
        class="viewVan"
      >
        view
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.viewVan {
  flex-direction: column;
  align-self: start;
  margin-left: auto;
  padding: 0.3rem 0.7rem;
}
</style>
