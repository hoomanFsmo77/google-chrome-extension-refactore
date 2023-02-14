<template>
  <div>
    <font-awesome-icon class="text-1.1 text-gray-700" icon="fa-solid fa-magnifying-glass" />
    <SearchBox @search="triggerSearch" v-model="searchText"/>
  </div>
</template>

<script setup lang="ts">
import SearchBox from 'src/components/form/SearchBox.vue'
import {useSearch} from "src/composables/useSearch";
const {triggerSearch,searchText}=useSearch()
</script>

<style scoped>

</style>