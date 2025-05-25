<template>
  <main>
    <ApiButton @click="callApi" />
    <div v-if="loading">読み込み中...</div>
    <pre v-else-if="data">{{ data }}</pre>
    <div v-else-if="error">エラー: {{ error }}</div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import ApiButton from './ApiButton.vue'

const data = ref<string | null>(null)
const error = ref<string | null>(null)
const loading = ref(false)

async function callApi() {
  loading.value = true
  error.value = null
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    data.value = JSON.stringify(res.data, null, 2)
  } catch (e: any) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}
</script>
