<template>
  <router-link
    :to="{ name: 'ArticlePage', params: { category: category, articleId: article._id } }"
    class="rounded overflow-hidden text-light-cyan hover:text-emerald-100 no-underline shadow-light hover:shadow-medium scale-100 hover:scale-105 flex flex-col h-full ease-in-out transition-transform duration-300"
  >
    <img :src="article.image_urls[0]" alt="Article Image" class="w-full h-32 object-cover mb-2" />
    <div class="p-4 flex flex-col flex-grow justify-between">
      <h3 class="text-lg font-bold mb-2">{{ article.title }}</h3>
      <div v-html="sanitizedContent" class="text-sm"></div>
      <small class="text-xs self-end">Click to read more...</small>
    </div>
  </router-link>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import DOMPurify from 'dompurify'

export default defineComponent({
  name: 'ArticleCard',
  props: {
    article: {
      type: Object as PropType<{ _id: string; image: string; title: string; content: string; image_urls: string[] }>,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // const sanitizedContent = computed(() => {
    //   return DOMPurify.sanitize(props.article.content.substring(0, 100) + '...')
    // })
    const sanitizedContent = computed(() => {
      const rawContent = props.article.content.substring(0, 300) + '...'
      // console.log('Raw content:', rawContent)
      // const sanitized = DOMPurify.sanitize(rawContent)
      // console.log('Sanitized content:', sanitized)
      return DOMPurify.sanitize(rawContent)
    })

    return {
      sanitizedContent,
    }
  },
})
</script>
