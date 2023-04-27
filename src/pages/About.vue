<script setup lang="ts"></script>

<template>
  <main class="container">
    <img
      src="https://picsum.photos/1200/500"
      alt="Image of man sitting on Van"
      className="aboutHeroImage"
    />
    <div className="aboutPageContent">
      <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
      <p>
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. (Hitch costs extra 😉)
      </p>
      <p>
        Our team is full of vanlife enthusiasts who know firsthand the magic of
        touring the world on 4 wheels.
      </p>
    </div>
    <div className="ctaSection">
      <h2>Your destination is waiting.<br />Your van is ready.</h2>
      <router-link className="btn linkBtn" to="/vans"
        >Explore our vans
      </router-link>
    </div>
  </main>
</template>

<style scoped>
.container {
  margin-bottom: 4rem;
  color: #161616;
}

.aboutHeroImage {
  width: 100%;
  height: 400px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46))
    no-repeat center center;
}

.aboutPageContent {
  padding: 1rem 1.6rem;
}
.ctaSection {
  max-width: 80%;
  margin: auto;
  background-color: #ffcc8d;
  color: #161616;
  padding: 0.5rem 2rem 4rem 2rem;
  border-radius: 5px;
}

.linkBtn {
  background-color: #161616;
  color: white;
  display: inline-block;
}
</style>
