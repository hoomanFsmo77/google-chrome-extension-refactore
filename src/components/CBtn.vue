<template>
  <font-awesome-icon @click="closeWindow" class="text-1.2 cursor-pointer text-gray-600" icon="fa-solid fa-x" />
</template>

<script setup lang="ts">
const closeWindow = () => {
  window.close()
}
</script>

<style scoped>

</style>