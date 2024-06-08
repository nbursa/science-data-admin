<template>
  <div class="relative min-h-64">
    <Loader :loading="loading" />

    <div v-if="error" class="error text-red-500 text-center">
      <p>{{ error }}</p>
    </div>

    <div v-if="stats" class="rounded-lg p-4 shadow-light">
      <h4 class="text-lg font-bold">Stats</h4>
      <p class="mb-4">Total Articles: {{ stats.totalArticles }}</p>
      <div class="border-collapse">
        <div class="flex font-semibold p-2">
          <div class="flex-1">Category Name</div>
          <div class="w-32 text-center">Article Count</div>
        </div>
        <div v-for="category in categoryStats" :key="category.category" class="flex p-2 border-t">
          <div class="flex-1 text-sm">{{ category.category }}</div>
          <div class="w-32 text-center">{{ category.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Stats } from '../views/DashboardPage.vue'
import Loader from './Loader.vue'

export default defineComponent({
  name: 'SummaryCard',
  components: { Loader },
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
    error: {
      type: String as PropType<string | null>,
      required: false,
    },
    stats: {
      type: Object as PropType<Stats | null>,
      required: true,
    },
    categoryStats: {
      type: Array as PropType<{ category: string; count: number }[]>,
      required: true,
    },
  },
})
</script>
