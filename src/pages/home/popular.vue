<template>
  <section id="popular" >
    <PLoader v-if="!fetchFlag" />
    <template v-else>
      <PriceCard
          v-for="(coin,index) in popularCoinLists"
          :key="index"
          :has-ring="'no'"
          :icon="coin.image"
          :coin-id="coin.id"
          :coin-name="coin.name"
          :abb-name="coin.symbol"
          :price="coin.current_price"
          :price_change_percentage_24h="coin.price_change_percentage_24h"
      />
    </template>
  </section>
</template>

<script setup lang="ts">
import PriceCard from 'src/components/Home/PriceCard.vue'
import {useHome} from "src/composables/useHome";
import PLoader from 'src/components/PLoader.vue'
const {popularCoinLists,fetchFlag}=useHome()
</script>

<style scoped>

</style>