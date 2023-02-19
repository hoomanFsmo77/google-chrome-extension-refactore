<template>
  <section v-if="favCoinLength>0" id="has-fav-list" class="flex justify-center items-center flex-col p-1">
    <template v-if="activePreloader">
      <PriceCard
          v-for="(coin,index) in coinInfoContainer"
          :key="index"
          has-ring="yes"
          :icon="coin.image.small"
          :coin-id="coin.id"
          :coin-name="coin.name"
          :abb-name="coin.symbol"
          :price="coin.market_data.current_price.usd"
          :price_change_percentage_24h="coin.market_data.price_change_percentage_24h"
      />
    </template>
  </section>
  <section v-else class="flex justify-center items-center flex-col p-1" id="no-fav-list">
    <img src="/images/fav.svg" width="250" alt="">
    <h6 class="text-center mt-1 text-primary">You are not following any cryptocurrencies yet.</h6>
  </section>
</template>

<script setup lang="ts">
import PriceCard from '../Home/PriceCard.vue'
import {useUserIndex} from "../../composables";
import {useFollowing} from "../../composables/useFollowing";
const {favCoinLength}=useUserIndex()
const {coinInfoContainer,activePreloader}=useFollowing()
</script>

<style scoped>

</style>