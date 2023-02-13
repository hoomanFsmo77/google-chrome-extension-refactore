<template>
  <section id="tab">
    <ul class="tab-container">
      <li class="tab-item">
        <router-link exact-active-class="tab-item-active" :to="{name:'index-home-popular'}">
          <font-awesome-icon class="text-0.9 text-gray-600" icon="fa-solid fa-star" />
          <p >Popular</p>
          <span class="tab-tracer"></span>
        </router-link>
      </li>
      <li class="tab-item">
        <router-link exact-active-class="tab-item-active" :to="{name:'index-home-following'}">
          <font-awesome-icon class="text-0.9 text-gray-600" icon="fa-solid fa-heart" />
          <p >Following</p>
          <span class="tab-tracer"></span>
        </router-link>
      </li>
    </ul>
  </section>

</template>

<script setup>

</script>

<style scoped>

</style>