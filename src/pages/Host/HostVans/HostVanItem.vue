<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const router = useRoute();
import { getVanData } from "@/utils/auxFunctions";

import type { VanData } from "@/config/types";
import type { Ref } from "vue";

const van: Ref<VanData | undefined> = ref(undefined);
const props = defineProps([
  "id",
  "description",
  "imageUrl",
  "name",
  "price",
  "type",
]);
onMounted(async () => {
  if (Object.values(props).every(elem => elem !== undefined)) {
    console.log("props found");
    van.value = props as VanData;
  } else {
    console.log("fetching data from api");
    const apiData = await getVanData(`/api/host/vans/${router.params.id}`);
    console.log("ApiData: ", apiData);
    van.value = apiData as VanData;
  }
  console.log("vans set", van.value);
});
</script>

<template>
  <main v-if="van" class="pageContainer">
    <router-link to="../vans" class="breadcrumbLink"
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
        <router-link to="details">Details</router-link>
        <router-link to="pricing">Pricing</router-link>
        <router-link to="photos">Photos</router-link>
      </nav>
      <router-view></router-view>
    </section>
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
