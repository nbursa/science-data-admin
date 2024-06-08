<template>
  <div class="grid grid-rows-[auto,1fr] h-screen">
    <nav class="p-4 flex items-center justify-between">
      <router-link to="/" class="text-2xl font-bold no-underline">
        <h1>Science News</h1>
      </router-link>
      <div class="">
        <router-link to="/" class="mr-4">Home</router-link>
        <router-link to="/dashboard" class="mr-4">Dashboard</router-link>
      </div>
    </nav>
    <div class="overflow-auto font-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Dashboard from './components/SummaryCard.vue'

export default defineComponent({
  name: 'App',
  components: {
    Dashboard,
  },
})
</script>
