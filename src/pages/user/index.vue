<template>
  <Header/>
  <Welcome v-if="loginStatus"/>
  <Auth v-else />
</template>

<script setup lang="ts">
import Auth from '../../components/user/Auth.vue';
import Welcome from '../../components/user/Welcome.vue'
import Header from '../../components/user/Header.vue'
import {useUserIndex} from "../../composables";
const {loginStatus}=useUserIndex()

</script>

<style scoped>

</style>