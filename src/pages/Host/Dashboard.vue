<script setup lang="ts">
import { Suspense } from "vue";
import DashVans from "@/components/DashVans.vue";
</script>

<template>
  <section class="hostDashboardEarning">
    <div class="info">
      <h1>Welcome!</h1>
      <p>Income last <span>30 days</span></p>
      <h2>$2,260</h2>
    </div>
    <router-link to="income">Details</router-link>
  </section>
  <section class="hostDashboardReviews">
    <h2>Review score</h2>
    <font-awesome-icon
      icon="fa-solid fa-star"
      class="hostDashboardReviewStar"
    />
    <p><span>5.0</span>/5</p>
    <router-link to="reviews">Details</router-link>
  </section>
  <section class="hostDashboardVans">
    <div class="top">
      <h2>Your listed vans</h2>
      <router-link to="vans">View all</router-link>
    </div>
    <Suspense>
      <template #fallback>
        <h4>Loading your vans now...</h4>
      </template>
      <template #default>
        <DashVans />
      </template>
    </Suspense>
  </section>
</template>

<style scoped>
.hostDashboardEarning {
  background-color: #ffead0;
  padding: 2rem 1.7rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px 10px 0 0;
}
.hostDashboardEarning > .info > h1 {
  font-size: 2.5rem;
  color: #161616;
  margin: 0;
}
.hostDashboardReviews {
  background-color: #ffddb2;
  padding: 25px 26px;
  display: flex;
  align-items: center;
  border-radius: 0 0 10px 10px;
}

.hostDashboardReviews > h2 {
  margin: 0;
}
.hostDashboardReviewStar {
  color: #ff8c38;
  margin: 0.5rem;
  font-size: 25px;
}
.hostDashboardReviews p {
  font-size: 1.3rem;
  color: #4d4d4d;
  margin-right: auto;
}

.hostDashboardVans {
  padding: 2rem 1.7rem;
}

.hostDashboardVans > .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vanInfo {
  margin-left: 1rem;
}

.star {
  background-color: black;
}
</style>
