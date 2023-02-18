<template>
  <section id="auth">
    <div class="flex justify-between items-center">
      <h5>{{isLogin ? 'Sign up' : 'Sign in'}}</h5>
      <button @click="toggleAuthState" class="underline text-primary h6">
        {{isLogin ? 'I have an account' : 'I don\'t have an account'}}
      </button>
    </div>
    <SignUp v-if="isLogin"/>
    <SignIn v-else />
  </section>
</template>

<script setup lang="ts">
import SignIn from '../../components/user/SignIn.vue'
import SignUp from '../../components/user/SignUp.vue'
import {useAuth} from "../../composables/useAuth";
const {isLogin,toggleAuthState}=useAuth()
</script>

<style scoped>

</style>