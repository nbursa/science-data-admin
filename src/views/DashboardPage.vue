<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Dashboard</h1>

    <SummaryCard :category-stats="categoryStats" :error="error" :loading="loading" :stats="stats" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import Dashboard from '../components/SummaryCard.vue'
import SummaryCard from '../components/SummaryCard.vue'
import axios from '../axios-config.ts'

export interface Stats {
  totalArticles: number
  categories: Record<string, number>
}

export default defineComponent({
  name: 'DashboardPage',
  components: { SummaryCard, Dashboard },
  setup() {
    const stats = ref<Stats | null>(null)
    const loading = ref(true)
    const error = ref<string | null>(null)
    const categoryStats = ref<{ category: string; count: number }[]>([])

    const fetchStatistics = async () => {
      try {
        const response = await axios.get<Stats>('/statistics/scraped-data-stats')
        stats.value = response.data
      } catch (err) {
        error.value = (err as Error).message || 'Failed to load statistics'
      } finally {
        loading.value = false
      }
    }

    onMounted(fetchStatistics)

    watch(stats, (newStats) => {
      if (newStats) {
        categoryStats.value = Object.entries(newStats.categories).map(([category, count]) => ({
          category,
          count,
        }))
      }
    })

    return {
      stats,
      loading,
      error,
      categoryStats,
    }
  },
})
</script>
