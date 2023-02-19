<template>
  <div class="detail_card ">
    <div class="flex  pb-0.7 gap-1 justify-center w-full items-center border-b-[1px] border-b-gray-200">
      <img :src="props.img" width="80" alt="">
      <div class="flex flex-col gap-0.3">
            <span class="text-0.8 text-dark">
              <i class="bi bi-coin mr-0.5"></i>
              Name: 
              <span class="name  text-gray-500">{{props.name}}</span>
            </span>
        <span class="text-0.8 text-dark">
              <i class="bi bi-braces mr-0.5"></i>Symbol: 
              <span class="symbol text-gray-500">{{props.symbol}}
            </span>
            </span>
        <span class="text-0.8 text-dark">
              <i class="bi bi-tag mr-0.5"></i>
              Category: 
              <span class=" text-gray-500 category">{{props.category}}</span>
            </span>
        <span class="text-0.8 text-dark flex items-center ">
              <i class="bi bi-box2  mr-0.5"></i>Max supply: <span
            class="text-gray-500 supply">{{props.supply}}</span>
            </span>
        <span class="text-0.8 text-dark flex items-center ">
              <i class="bi bi-basket3  mr-0.5"></i>Max volume: <span
            class="text-gray-500 volume">{{props.volume}}</span>
            </span>
      </div>
    </div>
    <div class="p-0.5 w-full">
      <h6 class="text-left ">Price details:</h6>
      <div class="row py-0.5">
        <div class="col-12">
             <span class="text-0.8 text-dark flex items-center">
               <i class="bi bi-cash-coin mr-0.5"></i> price:
               <span class="text-green-600-600 current">{{props.current}}</span>
             </span>
        </div>
        <div class="col-12 flex justify-content-end">
               <span class="text-0.8 text-dark flex items-center">
                   <i class="bi bi-bank mr-0.5"></i> Market cap:
                 <span class="text-green-600 market">{{props.market}}</span>
               </span>
        </div>
      </div>
      <div class="row">
        <div class="col-6 flex justify-start">
              <span class="text-0.8 text-dark flex items-center my-0.5">
                <i class="bi bi-graph-up text-green-600 mr-0.5"></i>ATH: 
                <span class="text-green-600 ath">{{props.ath}}</span></span>
        </div>
        <div class="col-6 flex ">
              <span class="text-0.8 text-dark flex items-center my-0.5">
                <i class="bi bi-graph-down mr-0.5 text-red-600"></i>ATL:
                <span class="text-red-600 atl">{{props.atl}}</span></span>
        </div>
      </div>
      <div class="row">
        <div class="col-12 flex justify-start">
            <span class="text-0.8 text-dark flex items-center my-0.5">
               <i class="bi bi-percent text-green-600 mr-0.5"></i>ATH change:
              <span class="text-green-600 ath-c">{{props.athC}}</span>
            </span>
        </div>
        <div class="col-12 flex justify-start">
              <span class="text-0.8 text-dark flex items-center my-0.5">
                  <i class="bi bi-percent text-red-600 mr-0.5"></i>ATL change:
               <span class="text-red-600 atl-c">{{props.atlC}}</span></span>
        </div>
      </div>
      <div class="row">
        <div class="col-12 flex justify-start">
                <span class="text-0.8 text-dark flex items-center my-0.5">
                   <i class="bi bi-thermometer-high text-green-600 mr-0.5"></i>
                     24h high:
                   <span class="text-green-600 ">{{props.h24}}</span>
                 </span>
        </div>
        <div class="col-12 flex justify-start">
                  <span class="text-0.8 text-dark flex items-center my-0.5">
                    <i class="bi bi-thermometer-low text-red-600 mr-0.5"></i>
                    24h low:
                    <span class="text-red-600 ">{{props.l24}}</span>
                  </span>
        </div>
      </div>
      <div class="row">
        <div class="col-12 flex justify-start">
              <span class="text-0.8 text-dark flex items-center my-0.5 ">
                <i class="bi bi-currency-dollar text-green-600 mr-0.3"></i>
                24h price change: 
                <span class="text-green-600 c-24">{{props.c24}}</span>
              </span>
        </div>
        <div class="col-12 flex justify-start">
              <span class="text-0.8 text-dark flex items-center my-0.5 ">
                <i class="bi bi-percent text-red-600 mr-0.3"></i>
                24h percent change: 
                <span class="text-red-600 p-0.5">{{props.p24}}</span>
              </span>
        </div>
      </div>
      <div class="row">
        <div class="col-12 flex justify-start">
                                    
              <span class="text-0.8 text-dark flex items-center my-0.5">
                Blockchain site:
                  <a class="ml-0.5 block-link text-primary underline break-all" target="_blank" :href="props.blockLink">{{props.blockLink}}</a>
              </span>
        </div>

        <div class="col-12 flex justify-start">
              <span class="text-0.8 text-dark flex items-center mt-0.5">
                         Homepage:
                         <a class="ml-0.5 home-link text-primary underline break-all" target="_blank" :href="props.homeLink">
                           {{props.homeLink}}
                         </a>
              </span>
        </div>
      </div>
      <div class="flex justify-center">
        <button @click="userFavHandler(props.coinId)" :class="userStore.isCoinExist(props.coinId) ? 'btn-green' : 'btn-dark'" class="btn  mt-0.5 btn-sm !px-0.7 !rounded-full">

          <template  v-if="userStore.isCoinExist(props.coinId)">
            Following
            <font-awesome-icon class="text-0.9 text-light ml-0.3" icon="fa-solid fa-check" />
          </template>
          <template v-else>
            Follow
            <font-awesome-icon  class="text-0.9 text-light ml-0.3" icon="fa-solid fa-heart" />
          </template>

        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useAddFav} from "../../composables/useAddFav";
import {useUserIndex} from "../../composables";

export interface Props {
  img:string|number,
  symbol:string|number,
  category:string|number,
  supply:string|number,
  volume:string|number,
  current:string|number,
  market:string|number,
  ath:string|number,
  atl:string|number,
  athC:string|number,
  atlC:string|number,
  h24:string|number,
  l24:string|number,
  c24:string|number,
  p24:string|number,
  blockLink:string|number,
  homeLink:string|number,
  coinId:string,
  name:string
}
const props=defineProps<Props>()
const {userFavHandler}=useAddFav()
const {userStore}=useUserIndex()
</script>

<style scoped>

</style>