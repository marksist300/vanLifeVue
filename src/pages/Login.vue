<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");

const handleSubmit = () => {
  localStorage.setItem("user", email.value);
  router.push({ name: "Dashboard" });
};
</script>

<template>
  <main class="loginContainer">
    <h1>Sign in to your account</h1>
    <form @submit.prevent="handleSubmit" class="loginForm">
      <input
        name="email"
        type="email"
        placeholder="Email address"
        v-model.trim="email"
      />
      <p>{{ email }}</p>
      <input
        name="password"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      {{ password }}
      <button>Log in</button>
    </form>
  </main>
</template>

<style scoped>
.loginContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 27px;
}

.loginForm {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
}

.loginForm > input {
  border: 1px solid rgba(209, 213, 219);
  border-radius: 5px;
  height: 3rem;
  text-indent: 0.8rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  font-weight: 400;
}

.loginForm > button {
  background-color: #ff8c38;
  border: none;
  border-radius: 8px;
  height: 4rem;
  margin-top: 1.6rem;
  color: white;
  font-weight: 500;
  cursor: pointer;
}
</style>
