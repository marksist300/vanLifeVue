<script setup lang="ts"></script>

<template>
  <section class="host-income">
    <h1>Income</h1>
    <p>Last <span>30 days</span></p>
    <h2>$2,260</h2>
    <img class="graph" src="#" alt="Income graph" />
    <div class="info-header">
      <h3>Your transactions (3)</h3>
      <p>Last <span>30 days</span></p>
    </div>
    <div class="transactions">
      <div key="{item.id}" class="transaction">
        <h3>${item.amount}</h3>
        <p>{item.date}</p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
