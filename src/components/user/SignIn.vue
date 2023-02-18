<template>
  <div class="mt-1.5">
    <form class="text-center" @submit.prevent="signInTrigger">
      <input v-model="user_info.email" type="text" class="input" placeholder="Email">
      <input v-model="user_info.password" type="password" class="input" placeholder="Password">
      <button class="btn-primary btn mt-0.5">
        Continue
      </button>
      <p v-if="signInErrorFlag" class="mt-0.5 text-red-600">There is not any match for your email or password!</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import {useSignIn} from "../../composables/useAuth";
import {useUserIndex} from "../../composables";
const {signInTrigger,user_info}=useSignIn()
const {signInErrorFlag}=useUserIndex()
</script>

<style scoped>

</style>