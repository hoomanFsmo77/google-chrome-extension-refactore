<template>
  <section id="following">
    <FollowingList v-if="loginStatus"/>
    <Welcome v-else/>
  </section>
</template>

<script setup lang="ts">
import Welcome from 'src/components/Home/Welcome.vue'
import FollowingList from 'src/components/Home/FollowingList.vue'
import {useUser} from "src/composables/useUser";
const {loginStatus}=useUser()

</script>

<style scoped>

</style>