<template>
  <div id="is-not-login" class="flex flex-col justify-center items-center ">
    <img width="250" src="/images/login.svg" alt="">
    <h5 class="text-primary text-center my-0.5">You're not signed in yet.</h5>
    <router-link :to="{name:'index-user'}" class="btn btn-warning">Login</router-link>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped>

</style>