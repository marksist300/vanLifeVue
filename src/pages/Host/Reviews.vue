<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const reviewsData = [
  {
    rating: 5,
    name: "Elliot",
    date: "January 3, 2023",
    text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
    id: "1",
  },
  {
    rating: 5,
    name: "Sandy",
    date: "December 12, 2022",
    text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
    id: "2",
  },
  {
    rating: 3,
    name: "Jeff",
    date: "October 19, 2022",
    text: "Great time, but the in the bad weather the van gets a little cold",
    id: "3",
  },
  {
    rating: 4,
    name: "Tim",
    date: "September 3, 2022",
    text: "We had a great time, friendly and helpful hosts. Pick up location was convenient, but time are not always the most flexible",
    id: "4",
  },
  {
    rating: 4,
    name: "Elsa",
    date: "August 9, 2022",
    text: "We had a lovely summer in the van, was a good introduction to van life for us",
    id: "5",
  },
];
</script>

<template>
  <section class="hostReviews">
    <div class="topText">
      <h2>Your reviews</h2>
      <p>Last <span>30 days</span></p>
    </div>
    <img class="graph" src="@/assets/reviewGraph.png" alt="Review graph" />
    <h3>Reviews ({{ reviewsData.length }})</h3>
    <div v-for="review of reviewsData" :key="review.id">
      <div class="review">
        <font-awesome-icon
          class="hostDashboardReviewStar"
          key="i"
          v-for="n in 5"
          :icon="n <= review.rating ? 'fa-star fa-solid' : 'fa-star fa-regular'"
        />
        <div class="info">
          <p class="name">{{ review.name }}</p>
          <p class="date">{{ review.date }}</p>
        </div>
        <p>{{ review.text }}</p>
      </div>
      <hr />
    </div>
  </section>
</template>

<style scoped>
.fa-star {
  color: #ff8c38;
  font-size: 1.2rem;
}
.hostReviews {
  margin-top: 2rem;
  padding-inline: 1.7rem;
  color: #161616;
}

.topText {
  display: flex;
  align-items: center;
  margin-bottom: 32px;
}

.topText > h2 {
  font-weight: 700;
  font-size: 32px;
  margin: 0;
  margin-right: 20px;
}

.topText > p {
  margin: 0;
  color: #4d4d4d;
}

.topText > p span {
  text-decoration: underline;
  font-weight: bold;
}

.graph {
  margin-bottom: 36px;
  max-width: 500px;
}

.review {
  margin-block: 25px;
}

.review .info {
  display: flex;
}

.review .name {
  color: #161616;
  margin-right: 10px;
  font-weight: 600;
}

.review .date {
  color: #8c8c8c;
}

hr {
  background-color: #c7c7c7;
  height: 1px;
  border: 0;
}
</style>
