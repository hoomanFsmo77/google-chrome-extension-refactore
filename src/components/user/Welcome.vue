<template>
  <section  id="welcome">
    <img src="../../assets/images/welcome.svg" width="300" alt="">
    <h4 class="text-primary text-center my-0.5">You're in!</h4>
    <p class="text-1">We're so glad you're here.</p>
    <div class="mt-0.5 ">
      <router-link :to="{name:'index-home'}" class="btn btn-indigo">
        Home
      </router-link>
      <button @click="logoutHandler" class="btn btn-indigo ml-1">
        Log out
      </button>
    </div>
    <div class="flex items-center">
      <p class="mr-0.5 text-1 text-center">Set interval for alert: <br> (in minutes)</p>
      <input value="1" class="input !w-[40%]" type="number">
    </div>
  </section>
</template>

<script setup lang="ts">
import {useUserIndex} from "../../composables";
const {userStore}=useUserIndex()
const logoutHandler = () => {
  userStore.resetUser()
}




</script>

<style scoped>

</style>