<template>
  <div class="mt-1.5">
    <form class="text-center" @submit.prevent="signupHandler">
      <input v-model="user_info.email" type="text" class="input" placeholder="Email">
      <div class="mb-1">
        <input v-model="user_info.password" type="password" class="input !mb-0.3" placeholder="Password">
        <p class="text-left text-0.8">1- password must be between 8 and 16 characters.</p>
        <p class="text-left text-0.8">2- password must not contain #$@*!.</p>
      </div>
      <button :disabled="loginFetchFlag" class="btn-primary btn mt-0.5 mb-1">
        Continue
      </button>
      <p class="text-center text-red-600" v-if="errorFlag">Please enter valid email or password!</p>
      <p class="text-center" v-if="loginFetchFlag">connecting to server. please wait...</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import {useUserIndex} from "../../composables";
import {useSignUp} from "src/composables/useAuth";
const {signupHandler,user_info,errorFlag}=useSignUp()
const {loginFetchFlag}=useUserIndex()
</script>

<style scoped>

</style>