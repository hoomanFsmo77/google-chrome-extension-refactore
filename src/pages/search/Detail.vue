<template>
    <section id="detail">
      <router-link  :to="{name:'index-search-trending'}">
        <font-awesome-icon class="text-1.5" icon="fa-solid fa-arrow-left" />
      </router-link>
      <DetailCard
          v-if="flag"
          :coin-id="coin_data.id"
          :img="coin_data.image.small ?? ''"
          :name="coin_data.name"
          :symbol="coin_data.symbol"
          :category="coin_data.categories[0] ?? ''"
          :supply="coin_data.market_data?.max_supply ?? ''"
          :volume="coin_data.market_data?.total_volume.usd ?? ''"
          :current="coin_data.market_data?.current_price.usd +'$' ?? ''"
          :market="coin_data.market_data?.market_cap.usd ?? ''"
          :ath="coin_data.market_data?.ath.usd +'$' ?? ''"
          :atl="coin_data.market_data?.atl.usd +'$' ?? ''"
          :ath-c="coin_data.market_data?.ath_change_percentage.usd +'%' ?? ''"
          :atl-c="coin_data.market_data?.atl_change_percentage.usd +'%' ?? ''"
          :h24="coin_data.market_data?.high_24h.usd +'$' ?? ''"
          :l24="coin_data.market_data?.low_24h.usd +'$' ?? ''"
          :c24="coin_data.market_data?.price_change_24h +'$' ?? ''"
          :p24="coin_data.market_data?.price_change_percentage_24h ?? ''"
          :block-link="coin_data.links?.blockchain_site[0] ?? ''"
          :home-link="coin_data.links?.homepage[0] ?? ''"
      />
      <PLoader class="!bg-gray-100/80" v-else />
    </section>
</template>

<script setup lang="ts">
import DetailCard from '../../components/Search/DetailCard.vue'
import PLoader from '../../components/PLoader.vue'
import {useDetail} from "../../composables/useDetail";
const {id}=defineProps<{id:string}>()
const {coin_data,flag}=useDetail(id)

</script>

<style scoped>

</style>