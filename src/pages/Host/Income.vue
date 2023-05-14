<script setup lang="ts">
const transactionsData = [
  { amount: 720, date: "Jan 3, '23", id: "1" },
  { amount: 560, date: "Dec 12, '22", id: "2" },
  { amount: 980, date: "Dec 3, '22", id: "3" },
];
</script>

<template>
  <section class="hostIncome">
    <h1>Income</h1>
    <p>Last <span>30 days</span></p>
    <h2>$2,260</h2>
    <img class="graph" src="@/assets/incomeGraph.png" alt="Income graph" />
    <div class="HostInfoHeader">
      <h3>Your transactions (3)</h3>
      <p>Last <span>30 days</span></p>
    </div>
    <div class="transactions">
      <div v-for="item in transactionsData" :key="item.id" class="transaction">
        <h3>{{ item.amount }}</h3>
        <p>{{ item.date }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hostIncome {
  padding-inline: 1.7rem;
  margin-top: 2rem;
  color: #161616;
}

.hostIncome > p {
  color: #4d4d4d;
}

.hostIncome > p span {
  text-decoration: underline;
  font-weight: bold;
}

.hostIncome > h2 {
  font-size: 2.4rem;
  color: #161616;
  font-weight: 900;
}

.graph {
  width: 100%;
  max-width: 500px;
}

.hostIncome .HostInfoHeader > p {
  color: #4d4d4d;
}

.hostIncome .HostInfoHeader > p span {
  text-decoration: underline;
  font-weight: bold;
}

.hostIncome .HostInfoHeader > h3 {
  font-weight: 700;
  font-size: 1.5rem;
  margin-top: 3.5rem;
}

.hostIncome .transaction {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-bottom: 2rem;
  padding: 2rem 1.3rem;
  border-radius: 5px;
}
.hostIncome .transaction > h3 {
  font-size: 2.3rem;
  font-weight: 600;
  margin: 0;
}

.hostIncome .transaction > p {
  font-weight: 500;
  font-size: 1.2rem;
  color: #4d4d4d;
}
</style>
