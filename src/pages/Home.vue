<script setup lang="ts"></script>

<template>
  <main class="container">
    <h2>You got the travel plans, we got the travel vans.</h2>
    <p>
      Add adventure to your life by joining the #vanlife movement. Rent the
      perfect van to make your perfect road trip.
    </p>

    <router-link to="vans" class="btn mainbtn">Find your van</router-link>
  </main>
</template>

<style scoped lang="css">
.container {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),
    url("https://picsum.photos/1200/500") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 350px;
  color: white;
  padding: 4rem 1.6rem;
  display: flex;
  flex-direction: column;
}

.mainbtn {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  background-color: #ff8c38;
  width: 80%;
  max-width: 700px;
  align-self: center;
  margin-top: 27px;
  padding-block: 0.75rem;
  color: white;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
}
</style>
