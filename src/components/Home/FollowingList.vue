<template>
  <section v-if="favCoinLength>0" id="has-fav-list">

  </section>
  <section v-else class="flex justify-center items-center flex-col p-1" id="no-fav-list">
    <img src="/images/fav.svg" width="250" alt="">
    <h6 class="text-center mt-1 text-primary">You are not following any cryptocurrencies yet.</h6>
  </section>
</template>

<script setup lang="ts">
import {useUserIndex} from "../../composables";
const {favCoinLength}=useUserIndex()
</script>

<style scoped>

</style>