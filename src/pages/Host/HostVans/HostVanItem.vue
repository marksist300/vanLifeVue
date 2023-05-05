<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
import { useFetch } from "@/utils/auxFunctions";

import type { VanData, returnVanDetails } from "@/config/types";
import type { Ref } from "vue";

const van: Ref<VanData | undefined> = ref(undefined);
const fetchError = ref(false);
const errorMessage = ref("");
const fetchLoading = ref(true);

const props = defineProps([
  "id",
  "description",
  "imageUrl",
  "name",
  "price",
  "type",
  "hostId",
]);

onBeforeMount(async () => {
  if (Object.values(props).every(elem => elem !== undefined)) {
    console.log("props found");
    fetchLoading.value = false;
    van.value = props as VanData;
  } else {
    console.log("fetching data from api");
    const { data, isLoading, isError, error } =
      await useFetch<returnVanDetails>(`/api/host/vans/${route.params.id}`);
    van.value = data.value?.vans;
    fetchError.value = isError.value;
    errorMessage.value = error.value;
    fetchLoading.value = isLoading.value;
    if (van.value) {
      router.push({
        query: {
          type: van.value.type,
          name: van.value.name,
          description: van.value.description,
          price: van.value.price,
          imageUrl: van.value.imageUrl,
        },
      });
    }
  }
});
</script>

<template>
  <main class="fallbackContainer" v-if="fetchLoading">
    <h3 class="loadingText">Loading Vans details</h3>
  </main>
  <main class="fallbackContainer" v-else-if="fetchError">
    <p class="errortext">{{ errorMessage }}</p>
  </main>
  <main v-else-if="van" class="pageContainer">
    <router-link to="../" class="breadcrumbLink"
      >👈 <span class="breadcrumbText"> Back to Vans</span></router-link
    >
    <section class="containerCard">
      <div class="vanContainer">
        <img :src="van.imageUrl" class="vanImg" />
        <div class="vanInfo">
          <span :class="`${type}Tag tag`">{{ van.type }}</span>
          <h3 class="nameType">{{ van.name }}</h3>
          <span class="priceTag">{{ van.price }}<small>/day</small></span>
        </div>
      </div>
      <nav class="navLinks">
        <router-link :to="{ name: 'HostVanDetails', query: { ...van } }"
          >Details</router-link
        >
        <router-link :to="{ name: 'HostVanPricing', query: { ...van } }"
          >Pricing</router-link
        >
        <router-link :to="{ name: 'HostVanPhotos', query: { ...van } }"
          >Photos</router-link
        >
      </nav>
      <router-view></router-view>
    </section>
  </main>
  <main v-else class="fallbackContainer">
    <h3 class="loadingText">There seems to have been an error</h3>
    <p class="errorText">
      Either we couldn't find your van or the van you're searching for doesn't
      exist
    </p>
  </main>
</template>

<style scoped>
.pageContainer {
  width: 85%;
  margin: auto;
}
.breadcrumbLink {
  display: block;
  margin: 2.5rem 0;
}

.breadcrumbText {
  text-decoration: underline;
}
.containerCard {
  display: flex;
  flex-direction: column;
  background-color: white;
}
.vanContainer {
  display: flex;
  margin-bottom: 1rem;
  padding-block: 1.2rem;
  padding-left: 1.7rem;
}
.vanImg {
  width: 8rem;
  height: 8rem;
}

.vanInfo {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  justify-content: center;
}

.nameType {
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0;
  margin: 0.5rem 0 0rem 0;
}

.priceTag {
  font-size: 1.3rem;
  font-weight: 600;
}

.navLinks {
  display: flex;
  gap: 1rem;
  padding-left: 1.7rem;
  margin-bottom: 2rem;
  font-weight: 500;
  font-size: 16.1492px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #4d4d4d;
}
.navLinks > :hover,
.router-link-active {
  text-decoration: underline;
  font-weight: 700;
  color: #000;
}
</style>
