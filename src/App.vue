<template>
  <div class=" flex items-center justify-between h-screen">
    <div class="bg-gray-200 w-[300px] h-full border-r border-gray-300">
      <div class=" h-[90%] overflow-y-auto">
        <ConversationList :items="conversations" />
      </div>
      <div class="h-[10%] grid grid-cols-2 gap-2 p-2">
        <router-link to="/">
          <Button icon-name="radix-icons:chat-bubble" class="w-full">
            新建聊天
          </Button>
        </router-link>
        <router-link to="/setting">
          <Button icon-name="radix-icons:gear" plain class="w-full">
            应用设置
          </Button>
        </router-link>
      </div>
    </div>
    <div class="h-full flex-1">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { conversations } from './testData'
import ConversationList from './components/ConversationList.vue';
import Button from './components/Button.vue';
</script>

<style scoped></style>