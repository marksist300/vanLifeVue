<script setup lang="ts"></script>

<template>
  <article>
    <h4 class="submenuTitle">
      Name: <span class="submenuText">{{ $route.query.name }}</span>
    </h4>
    <h4 class="submenuTitle">
      Category: <span class="submenuText">{{ $route.query.type }}</span>
    </h4>
    <h4 class="submenuTitle">
      Description:
      <span class="submenuText">{{ $route.query.description }}</span>
    </h4>
    <h4 class="submenuTitle">
      Visibility: <span class="submenuText">Public</span>
    </h4>
  </article>
</template>

<style scoped>
.submenuTitle {
  font-weight: 700;
  padding-left: 1.7rem;
}
.submenuText {
  font-weight: 400;
}
</style>
