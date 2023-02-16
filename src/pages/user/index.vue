<template>
  <Header/>
  <Welcome v-if="loginStatus"/>
  <Auth v-else />
</template>

<script setup lang="ts">
import Auth from 'src/components/user/Auth.vue';
import Welcome from 'src/components/user/Welcome.vue'
import Header from 'src/components/user/Header.vue'
import {useUserIndex} from "src/composables";
const {loginStatus}=useUserIndex()

</script>

<style scoped>

</style>