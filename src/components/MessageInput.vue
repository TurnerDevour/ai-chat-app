<template>
  <div
    class="message-input w-full shadow-sm border rounded-lg border-gray-300 flex items-center py-1 px-2 focus-within:border-green-700">

    <input class="outline-none border-0 flex-1 bg-white focus:ring-0" type="text" v-model="model">
    <Button icon-name="radix-icons:paper-plane" @click="onCreate">
      发送
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from './Button.vue'

const emit = defineEmits<{
  create: [value: string]
}>()
const model = defineModel<string>()

const onCreate = () => {
  if (model.value && model.value.trim() !== '') {
    emit('create', model.value)
    model.value = ''
  }
}
</script>

<style scoped></style>