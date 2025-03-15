import Conversation from '../views/Conversation.vue';
import Home from '../views/Home.vue';
import Setting from '../views/Setting.vue';
import { createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/conversation/:id', component: Conversation },
  { path: '/setting', component: Setting }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;