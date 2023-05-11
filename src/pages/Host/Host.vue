<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
// import { inject } from "vue";

// inject();
const goToLogin = () => {
  if (!localStorage.getItem("user")) {
    router.replace("/login");
  }
};
onMounted(() => {
  window.addEventListener("storage", goToLogin);
});

onUnmounted(() => {
  window.removeEventListener("storage", goToLogin);
});
</script>

<template>
  <nav class="hostNav">
    <ul>
      <li>
        <router-link :to="{ name: 'Dashboard' }" class="hostNavLinks"
          >Dashboard</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'Income' }" class="hostNavLinks"
          >Income</router-link
        >
      </li>
      <li>
        <router-link :to="{ path: '/host/vans/' }" class="hostNavLinks"
          >Vans</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'Reviews' }" class="hostNavLinks"
          >Reviews</router-link
        >
      </li>
    </ul>
  </nav>
  <router-view></router-view>
</template>

<style scoped>
ul {
  display: flex;

  margin: 0;
  padding: 0;
  list-style: none;
}

.hostNavLinks {
  text-decoration: none;
  color: #4d4d4d;
  font-weight: 500;
  padding: 5px 20px;
}

.hostNavLinks:hover {
  color: #161616;
  text-decoration: underline;
  font-weight: 600;
}

a.router-link-active {
  text-decoration: underline;
  font-weight: 700;
  color: #e17654;
}
</style>
