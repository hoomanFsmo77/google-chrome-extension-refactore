<template>
  <input
         @input="input($event)"
         :value="modelValue"
         placeholder="Search coin..."
         class="ml-0.5" type="text"
  >
</template>

<script setup lang="ts">
let timeout:any=null
let delay:number=1500
const emit=defineEmits<{
  (e:'update:modelValue',value:string):void,
  (e:'search'):void
}>();
const {modelValue}=defineProps<{modelValue:string}>()
const input = (ev:Event) => {
  if(timeout){
    clearTimeout(timeout)
  }
  timeout=setTimeout(()=>{
    const el=ev.target as HTMLInputElement
      emit('update:modelValue',el.value.toLowerCase())
      emit('search')
  },delay)
}
</script>

<style scoped>

</style>