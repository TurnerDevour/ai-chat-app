<template>
  <div class=" flex items-center justify-between h-screen">
    <div class="bg-gray-200 w-[300px] h-full border-r border-gray-300">
      <div class=" h-[90%] overflow-y-auto">
        <ConversationList :items="items" />
      </div>
      <div class="h-[10%] grid grid-cols-2 gap-2 p-2">
        <button
          class="shadow-sm inline-flex items-center justify-center bg-green-700 text-white hover:bg-green-700/90 border-green-700 h-[32px] py-[8px] px-[15px] text-sm rounded-[4px]">
          <Icon class="mr-2" icon="radix-icons:chat-bubble" />
          新建对话
        </button>
        <button
          class="shadow-sm inline-flex items-center justify-center bg-green-50 text-green-700 hover:bg-green-700 hover:text-white border border-green-700 h-[32px] py-[8px] px-[15px] text-sm rounded-[4px]">
          <Icon class="mr-2" icon="radix-icons:gear" />
          应用设置
        </button>
      </div>
    </div>
    <div class="h-full flex-1">
      content
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ConversationProps } from './types'
import ConversationList from './components/ConversationList.vue';

const items: ConversationProps[] = [
  { id: 1, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用？', createAt: '2025-3-6', updatedAt: '2025,3-6', providerId: 12342 },
  { id: 2, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用？', createAt: '2025-3-6', updatedAt: '2025,3-6', providerId: 12342 },
  { id: 3, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用？', createAt: '2025-3-6', updatedAt: '2025,3-6', providerId: 12342 },
  { id: 4, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用？', createAt: '2025-3-6', updatedAt: '2025,3-6', providerId: 12342 },
  { id: 5, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用？', createAt: '2025-3-6', updatedAt: '2025,3-6', providerId: 12342 },
  { id: 6, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用？', createAt: '2025-3-6', updatedAt: '2025,3-6', providerId: 12342 },
  { id: 7, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用？', createAt: '2025-3-6', updatedAt: '2025,3-6', providerId: 12342 },
  { id: 8, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用？', createAt: '2025-3-6', updatedAt: '2025,3-6', providerId: 12342 },
  { id: 9, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用？', createAt: '2025-3-6', updatedAt: '2025,3-6', providerId: 12342 },
]
</script>

<style scoped></style>