<template>
  <div v-if="show" class="price-card">
    <p v-if="outTrending" class="out_trending_message text-left mb-[8px] w-full  text-0.9 m-0 leading-1 text-red-500">This coin is out of trending
      now.</p>
    <font-awesome-icon @click="removeCoin(coinId)" v-if="outTrending" class="absolute top-[-4px] text-light py-[4px] px-[6px] bg-red-500 rounded-full right-[-5px] cursor-pointer" icon="fa-solid fa-x" />

      <div class="flex justify-between items-center">
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
          <button @click="setAlert(coinId)" v-else>
          <span class="icon-wrapper">
            <font-awesome-icon :class="userStore.isAlertSet(coinId) ? 'text-red-600' : 'text-gray-600'" class="text-1.1 "  icon="fa-solid fa-bell" />
        </span>
          </button>
        </div>
      </div>

  </div>
  <VModal @close="closeModal" :is-shown="modalFlag">
    <p class="h6 text-center mb-0.5">Please sign in/sign up to continue</p>
    <div class="mb-0.5 flex justify-center">
      <router-link class="btn btn-primary" :to="{name:'index-user'}" @click="closeModal">
        Continue
      </router-link>
    </div>
  </VModal>
  <VModal @close="closeAlertModal" :is-shown="alertModalInfo.trigger">
    <p class="h6 text-center mb-0.5" v-html="alertModalInfo.msg"></p>
    <div class="mb-0.5 flex justify-center">
      <button class="btn btn-primary"  @click="closeAlertModal">
        Close
      </button>
    </div>
  </VModal>
</template>

<script setup lang="ts">
import VModal from '../../components/VModal.vue'
import {useAddFav} from "../../composables/useAddFav";
import {useUserIndex} from "../../composables";
import {useSetAlert} from "../../composables/useSetAlert";

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
const {coinName,abbName,icon,price,price_change_percentage_24h,coinId,hasRing,outTrending}=defineProps<Props>()
const {userFavHandler,modalFlag,closeModal,removeCoin,show}=useAddFav()
const {userStore}=useUserIndex()
const {setAlert,alertModalInfo,closeAlertModal}=useSetAlert()
</script>

<style scoped>

</style>