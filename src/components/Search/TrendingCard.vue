<template>
  <div class="trending-card">
    <div class="p-0.5 border-[1px] border-gray-400 rounded-full">
      <img :src="icon" width="40" alt="">
    </div>
    <div class="mt-0.2">
      <h6 class="font-500 text-center">{{coinName}}</h6>
      <p class="text-0.7 text-green-600 text-center my-0.2">{{symbol}}</p>
      <div class="flex text-0.8 text-gray-600 my-0.3" >
        <p>
          {{price.toFixed(2)}}$
        </p>
        <p class="mx-0.5">|</p>
        <p>
          Rank:{{rank}}
        </p>
      </div>
      <div class="text-center">
        <button class="btn btn-dark mt-0.5 btn-sm !px-0.7 !rounded-full">
          Follow
          <font-awesome-icon class="text-0.9 text-light ml-0.3" icon="fa-solid fa-heart" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props{
  icon:string
  coinName:string,
  symbol:string,
  price:number,
  rank:number,
  id:number|string
}
const {icon,coinName,symbol,price,rank,id}=defineProps<Props>()
</script>

<style scoped>

</style>