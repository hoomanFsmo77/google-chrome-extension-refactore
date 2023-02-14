<template>
  <Header/>
  <Intro/>
  <Tab/>
  <router-view></router-view>
</template>

<script setup lang="ts">
import Header from 'src/components/Home/Header.vue'
import Intro from 'src/components/Home/Intro.vue'
import Tab from 'src/components/Home/Tab.vue'
</script>

<style scoped>

</style>