<template>
  <div class="absolute w-full h-full flex justify-center items-center left-0 top-0">
    <hollow-dots-spinner
        :animation-duration="1000"
        :dot-size="25"
        :dots-num="3"
        color="#29abe1"
    />
  </div>
</template>

<script setup lang="ts">
import { HollowDotsSpinner } from 'epic-spinners'
</script>

<style scoped>

</style>