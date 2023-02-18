<template>
  <Header/>
  <Intro/>
  <Tab/>
  <router-view></router-view>
</template>

<script setup lang="ts">
import Header from '../../components/Home/Header.vue'
import Intro from '../../components/Home/Intro.vue'
import Tab from '../../components/Home/Tab.vue'
</script>

<style scoped>

</style>