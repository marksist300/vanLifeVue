<script setup lang="ts" suspendible="false">
import { onBeforeMount, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useFetch } from "../utils/auxFunctions";

import type { VanData, returnVanData } from "../config/types";
import type { Ref } from "vue";
const vans: Ref<VanData[] | undefined> = ref(undefined);
const fetchError = ref(false);
const errorMessage = ref("");
const fetchLoading = ref(true);
onBeforeMount(async () => {
  const { data, isLoading, isError, error } = await useFetch<returnVanData>(
    `api/vans/`
  );
  vans.value = data.value?.vans;
  fetchError.value = isError.value;
  errorMessage.value = error.value;
  fetchLoading.value = isLoading.value;
});
const route = useRoute();

const isActive = ref(route.query.type || "");

const setActive = (name: string) => {
  if (name === "clear") {
    isActive.value = "";
  } else {
    isActive.value = name;
  }
};

const vansToDisplay = computed(() => {
  if (route.query.type) {
    return vans.value?.filter(
      (van: VanData) => van.type.toLowerCase() === route.query.type
    );
  } else {
    return vans.value;
  }
});
</script>

<template>
  <main>
    <h1>Vans ready to go.</h1>
    <nav class="searchFilters">
      <router-link
        to="?type=simple"
        :class="`vanBtn simple ${
          isActive === 'simple' ? 'isActiveSimple' : ''
        }`"
        @click="setActive('simple')"
        >simple</router-link
      >

      <router-link
        to="?type=luxury"
        :class="`vanBtn luxury ${
          isActive === 'luxury' ? 'isActiveLuxury' : ''
        }`"
        @click="setActive('luxury')"
        >luxury</router-link
      >

      <router-link
        to="?type=rugged"
        :class="`vanBtn rugged ${
          isActive === 'rugged' ? 'isActiveRugged' : ''
        }`"
        @click="setActive('rugged')"
        >rugged</router-link
      >
      <router-link
        v-if="route.query.type"
        to=""
        class="clearBtn"
        @click="setActive('clear')"
        >Clear filters</router-link
      >
    </nav>

    <section v-if="fetchLoading" class="fallbackContainer">
      <h3 class="loadingText">Loading</h3>
    </section>
    <section v-else-if="fetchError" class="fallbackContainer">
      <p class="errorText">{{ errorMessage }}</p>
    </section>
    <section class="vanContainerSection" v-else>
      <div :key="van.id" v-for="van of vansToDisplay" class="vanContainer">
        <router-link
          :to="{ path: `/vans/${van.id}`, query: { ...route.query } }"
        >
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
  color: #212120;
  flex-wrap: wrap;
}

.searchFilters > * {
  padding: 0.4rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  transform: none;
}
.searchFilters > *:active {
  scale: 0.95;
  transition: 200ms;
}

.vanBtn {
  background-color: #ffead0;
  color: #4d4d4d;
}

.clearBtn {
  background-color: #f1efec;
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

.simple:hover {
  background-color: #e17654;
  color: #ffead0;
  font-weight: 600;
  transition: 0.2s;
}
.luxury:hover {
  background-color: #161616;
  color: #ffead0;
  font-weight: 600;
  transition: 0.2s;
}
.rugged:hover {
  background-color: #115e59;
  color: #ffead0;
  font-weight: 600;
  transition: 0.2s;
}

.isActiveSimple {
  background-color: #e17654;
  color: #ffead0;
  font-weight: 600;
}
.isActiveLuxury {
  background-color: #161616;
  color: #ffead0;
  font-weight: 600;
}
.isActiveRugged {
  background-color: #115e59;
  color: #ffead0;
  font-weight: 600;
}
</style>
