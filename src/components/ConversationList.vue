<template>
  <div class="conversation-list">
    <div class="item border-gray-300 border-t cursor-pointer bg-white hover:bg-gray-200 p-2" v-for="item in items"
      :key="item.id">
      <a href="#">
        <div class=" flex justify-between items-center text-sm leading-5 text-gray-500">
          <span>{{ item.selectedModel }}</span>
          <span>{{ item.createAt }}</span>
        </div>
        <h2 class=" font-semibold leading-6 text-gray-900 truncate">{{ item.title }}</h2>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ConversationProps } from '../types'

defineProps<{
  items: ConversationProps[]
}>()
</script>

<style scoped></style>