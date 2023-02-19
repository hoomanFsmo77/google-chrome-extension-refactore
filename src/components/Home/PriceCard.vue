<template>
  <div class="price-card">
      <div class="price-details">
        <img :src="icon" width="30" alt="">
        <div>
          <p class="font-700 text-1 mb-0.2">
            {{coinName}}
            <sub class="text-green-500 text-0.6">{{abbName.toUpperCase()}}</sub>
          </p>
          <p>
            <span class="text-gray-600 text-0.8">{{price}}$</span>
            <span class="mx-0.3">|</span>
            <span
                :class="`${price_change_percentage_24h}`.includes('-') ? 'text-red-600': 'text-green-600'" >
              <font-awesome-icon class="text-0.6 "
                                 :icon="`${price_change_percentage_24h}`.includes('-') ? 'fa-arrow-down-long' :'fa-arrow-up-long'"
                                 icon="fa-solid"
              />
              {{price_change_percentage_24h.toFixed(3)}}%
            </span>
          </p>
        </div>

      </div>
      <div>
        <button v-if="hasRing==='no'" @click="userFavHandler(coinId)">
          <span class="icon-wrapper">
           <font-awesome-icon class="text-1.1 " :class="userStore.isCoinExist(coinId) ? 'text-green-600' : 'text-gray-600'" icon="fa-solid fa-heart" />
        </span>
        </button>
        <button v-else>
          <span class="icon-wrapper">
            <font-awesome-icon class="text-1.1 text-gray-600"  icon="fa-solid fa-bell" />
        </span>
        </button>
      </div>
  </div>
</template>

<script setup lang="ts">
import {useAddFav} from "../../composables/useAddFav";
import {useUserIndex} from "../../composables";
interface Props{
  icon:string,
  coinName:string,
  abbName:string,
  price:number,
  hasRing:'no'|'yes',
  coinId:string,
  outTrending?:boolean,
  price_change_percentage_24h:number
}
const {coinName,abbName,icon,price,price_change_percentage_24h,coinId,hasRing}=defineProps<Props>()
const {userFavHandler}=useAddFav()
const {userStore}=useUserIndex()
</script>

<style scoped>

</style>