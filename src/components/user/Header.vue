<template>
  <header class="user-header">
    <p class="text-1" v-if="userEmail">{{userEmail}}</p>
    <font-awesome-icon v-else class="text-1.3" icon="fa-solid fa-user-plus" />
    <CBtn/>
  </header>
</template>

<script setup lang="ts">
import CBtn from 'src/components/CBtn.vue'
import {useUserIndex} from "../../composables";
const {userEmail}=useUserIndex()
</script>

<style scoped>

</style>