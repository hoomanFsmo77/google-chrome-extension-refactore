<template>
  <section id="following" class="overflow-y-auto p-0.5 h-[300px]">
    <FollowingList v-if="loginStatus"/>
    <Welcome v-else/>
  </section>
</template>

<script setup lang="ts">
import Welcome from '../../components/Home/Welcome.vue'
import FollowingList from '../../components/Home/FollowingList.vue'
import {useUserIndex} from "../../composables";
const {loginStatus}=useUserIndex()

</script>

<style scoped>

</style>