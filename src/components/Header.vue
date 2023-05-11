<script setup lang="ts">
import { inject } from "vue";
import { useRouter } from "vue-router";

const user = inject("user");
const router = useRouter();

const gotoLogin = () => {
  router.push("/login");
};

const logOut = () => {
  window.dispatchEvent(
    new StorageEvent("storage", {
      //@ts-ignore
      newValue: localStorage.removeItem("user"),
    })
  );
};
</script>

<template>
  <header>
    <router-link to="/"><h1>#VanLife</h1></router-link>
    <div class="headerLinks">
      <router-link to="/host" replace>Host</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/vans">Vans</router-link>
      <font-awesome-icon
        icon="fa-regular fa-user"
        class="userIcon"
        @click="gotoLogin()"
        v-if="!user"
      />
      <a href="#" v-else @click="logOut()">Logout</a>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
}

h1 {
  font-weight: 900;
  color: #000;
}
header > a {
  font-weight: 600;
  color: #4d4d4d;
}
.headerLinks {
  display: flex;
  gap: 1rem;
}
.headerLinks > *:hover {
  font-weight: 500;
}
a.router-link-active {
  font-weight: 700;
  text-decoration: underline;
  color: #161616;
}

.userIcon:hover {
  transform: translate(1px, 1px);
  cursor: pointer;
}
</style>
