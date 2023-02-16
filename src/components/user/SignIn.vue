<template>
  <div class="mt-1.5">
    <form class="text-center" @submit.prevent>
      <input type="text" class="input" placeholder="Email">
      <input type="password" class="input" placeholder="Password">
      <button class="btn-primary btn mt-0.5">
        Continue
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import {useSignIn} from "src/composables/useAuth";
const {}=useSignIn()
</script>

<style scoped>

</style>