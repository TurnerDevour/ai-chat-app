<template>
  <div v-if="conversation" class="h-[10%] bg-gray-200 border-b border-gray-300 flex items-center px-3 justify-between">
    <h3 class="font-semibold  text-gray-900">{{ conversation.title }}</h3>
    <span class="text-sm text-gray-500">{{ conversation.updatedAt }}</span>
  </div>
  <div class="w-[80%] mx-auto h-[85%] overflow-y-auto pt-2">
    <MessageList :messages="filteredMessages" />
  </div>
  <div class="w-[80%] mx-auto h-[15%] flex items-center">
    <MessageInput />
  </div>
</template>

<script setup lang="ts">
import { messages, conversations } from '../testData'
import { MessageProps, ConversationProps } from '../types'
import MessageInput from '../components/MessageInput.vue'
import MessageList from '../components/MessageList.vue'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
const filteredMessages = ref<MessageProps[]>([])
const conversation = ref<ConversationProps>()
const route = useRoute()
let conversationId = parseInt(route.params.id as string)
filteredMessages.value = messages.filter((message) => message.conversationId === conversationId)
conversation.value = conversations.find((conversation) => conversation.id === conversationId)

// 过滤出当前会话的消息
watch(() => route.params.id, (newId: string) => {
  conversationId = parseInt(newId)
  filteredMessages.value = messages.filter((message) => message.conversationId === conversationId)
  conversation.value = conversations.find((conversation) => conversation.id === conversationId)
})
</script>

<style scoped></style>