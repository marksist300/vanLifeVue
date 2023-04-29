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
  <main v-if="van" class="container">
    <img :src="van.imageUrl" class="vanImg" />
    <div class="vanInfo">
      <span>{{ van.type }}</span>
      <span>{{ van.name }}</span>
      <span>{{ van.price }}<small>/day</small></span>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  margin: auto;
  width: 85%;
  align-items: center;
  background-color: white;
  margin-bottom: 15px;
  padding-block: 18px;
  padding-left: 24px;
}
.vanImg {
  width: 8rem;
  height: 8rem;
}

.vanInfo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 1rem;
  justify-content: center;
}
</style>
