<template>
  <div class="p-4">
    <div v-if="loading" class="loading flex justify-center items-center h-64">
      <div
        class="w-9 h-9 border-4 border-solid border-cyan border-r-white/25 border-b-white/25 border-l-white/25 rounded-full animate-spin z-50"
      ></div>
    </div>
    <div v-if="error" class="text-red-500">
      <p>{{ error }}</p>
    </div>
    <div v-if="article" class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-2">{{ article.title }}</h1>
      <p class="text-sm text-gray-600 mb-4">
        By {{ article.author }} on {{ new Date(article.published_at).toLocaleString() }}
      </p>
      <img :src="article.image_urls[0]" alt="Article Image" class="w-full h-64 object-cover mb-4" />
      <div class="leading-relaxed" v-html="sanitizedContent"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from '../axios-config.ts'
import { useRoute } from 'vue-router'
import DOMPurify from 'dompurify'

interface Article {
  _id: string
  title: string
  author: string
  published_at: string
  content: string
  image_urls: string[]
}

export default defineComponent({
  name: 'ArticlePage',
  setup() {
    const route = useRoute()
    const article = ref<Article | null>(null)
    const loading = ref<boolean>(true)
    const error = ref<string | null>(null)
    const sanitizedContent = ref<string | null>(null)

    const fetchArticle = async () => {
      loading.value = true
      try {
        const response = await axios.get<Article>(`/articles/${route.params.category}/${route.params.articleId}`)
        article.value = response.data
        sanitizedContent.value = DOMPurify.sanitize(article.value.content)
      } catch (err) {
        error.value = 'Failed to load article'
      } finally {
        loading.value = false
      }
    }

    onMounted(fetchArticle)

    return {
      article,
      loading,
      error,
      sanitizedContent,
    }
  },
})
</script>
