<template>
  <teleport to="body">
    <div  v-fade:20="props.isShown" class="modal">
      <div class="modal-header">
        <h5>Message from MultiCoin</h5>
        <font-awesome-icon class="h5 cursor-pointer" @click="closeModal" icon="fa-solid fa-x" />
      </div>
      <div class="modal-body">
        <slot/>
      </div>
    </div>
    <div v-fade:10="props.isShown" class="overlay"></div>
  </teleport>
</template>

<script setup lang="ts">
const props=defineProps<{
  isShown:boolean
}>();
const emits=defineEmits<{
  (e:'close'):void
}>()

const closeModal = () => {
  emits('close')
}
</script>

<style lang="scss" >


</style>