<template>
  <div class="p-4">
    <Loader :loading="loading" />
    <div v-if="categories" class="max-w-7xl mx-auto">
      <div v-for="category in categories" :key="category.name" class="mb-8">
        <h2 class="text-3xl font-bold mb-4 capitalize">{{ category.name }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ArticleCard
            v-for="article in category.articles"
            :key="article._id"
            :article="article"
            :category="category.name"
          />
        </div>
        <div class="flex justify-center mt-16">
          <button v-if="category.hasMore" @click="loadMore(category.name)" class="btn bg-blue-500 text-white">
            Load More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from '../axios-config.ts'
import ArticleCard from '../components/ArticleCard.vue'
import Loader from '../components/Loader.vue'

export default defineComponent({
  name: 'HomePage',
  methods: {
    l() {
      return l
    },
  },
  components: {
    Loader,
    ArticleCard,
  },
  setup() {
    const categories = ref<{ name: string; articles: any[]; hasMore: boolean }[]>([])
    const loading = ref(true)

    const loadMore = async (category: string) => {
      const categoryData = categories.value.find((c) => c.name === category)
      if (!categoryData) return

      try {
        const response = await axios.get(`/articles/${category}?skip=${categoryData.articles.length}&limit=4`)
        categoryData.articles.push(...response.data)
        categoryData.hasMore = response.data.length === 4
      } catch (err) {
        console.error(`Error loading more articles for category ${category}:`, err)
      }
    }

    const fetchCategories = async () => {
      loading.value = true
      try {
        const response = await axios.get('/statistics/scraped-data-stats')
        const categoriesList = Object.keys(response.data.categories)
        for (const category of categoriesList) {
          const articlesResponse = await axios.get(`/articles/${category}?limit=4`)
          categories.value.push({
            name: category,
            articles: articlesResponse.data,
            hasMore: articlesResponse.data.length === 4,
          })
        }
      } catch (error) {
        console.error(error)
      } finally {
        loading.value = false
      }
    }

    onMounted(fetchCategories)

    return {
      categories,
      loading,
      loadMore,
    }
  },
})
</script>
