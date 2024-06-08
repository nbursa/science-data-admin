<template>
  <div
    v-if="loading"
    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center h-64"
  >
    <div
      class="w-9 h-9 border-4 border-solid border-cyan border-r-white/25 border-b-white/25 border-l-white/25 rounded-full animate-spin p-4 bg-gray-600/50 z-50"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Loader',
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
})
</script>
