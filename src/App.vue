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
    <div class="h-full flex-1 flex items-center">
      <div class="w-[80%] mx-auto h-full">
        <div class="flex items-center h-[85%]">
          <ProviderSelect :items="providers" v-model="selectedModel" />
        </div>
        <div class="flex items-center h-[15%]">
          <MessageInput />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ConversationProps, ProviderProps } from './types'
import ConversationList from './components/ConversationList.vue';
import ProviderSelect from './components/ProviderSelect.vue';
import MessageInput from './components/MessageInput.vue';
import { ref } from 'vue';

const selectedModel = ref<string>('')

const items: ConversationProps[] = [
  { id: 1, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用？', createdAt: '2025-3-6', updatedAt: '2025,3-6', providerId: 12342 },
  { id: 2, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用？', createdAt: '2025-3-6', updatedAt: '2025,3-6', providerId: 12342 },
  { id: 3, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用？', createdAt: '2025-3-6', updatedAt: '2025,3-6', providerId: 12342 },
  { id: 4, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用？', createdAt: '2025-3-6', updatedAt: '2025,3-6', providerId: 12342 },
  { id: 5, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用？', createdAt: '2025-3-6', updatedAt: '2025,3-6', providerId: 12342 },
  { id: 6, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用？', createdAt: '2025-3-6', updatedAt: '2025,3-6', providerId: 12342 },
  { id: 7, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用？', createdAt: '2025-3-6', updatedAt: '2025,3-6', providerId: 12342 },
  { id: 8, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用？', createdAt: '2025-3-6', updatedAt: '2025,3-6', providerId: 12342 },
  { id: 9, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用？', createdAt: '2025-3-6', updatedAt: '2025,3-6', providerId: 12342 },
]

const providers: ProviderProps[] = [
  {
    id: 1,
    name: '文心一言',
    desc: '文心一言 百度出品的大模型',
    models: ['ERNIE-4.0-8K', 'ERNIE-3.5-8K', 'ERNIE-Speed-8K'],
    avatar: 'https://qph.cf2.poecdn.net/main-thumb-pb-3004-50-jougqzjtwfqfyqprxbdwofvnwattmtrg.jpeg',
    createdAt: '2024-07-03',
    updatedAt: '2024-07-03'
  },
  {
    id: 2,
    name: '通义千问',
    desc: '通义千问',
    // https://help.aliyun.com/zh/dashscope/developer-reference/api-details?spm=a2c4g.11186623.0.0.5bf41507xgULX5#b148acc634pfc
    models: ['qwen-turbo', 'qwen-plus', 'qwen-max'],
    avatar: 'https://qph.cf2.poecdn.net/main-thumb-pb-3004-50-jougqzjtwfqfyqprxbdwofvnwattmtrg.jpeg',
    createdAt: '2024-07-03',
    updatedAt: '2024-07-03'
  }
]
</script>

<style scoped></style>