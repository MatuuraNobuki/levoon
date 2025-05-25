<template>
  <main class="layout-container">
    <div class="reqArea">
      <ApiButton @click="onApiClick" class="p-button-success mb-4" />

    </div>
    <div class="results">

      <ProgressSpinner v-if="loading" />

      <Message severity="error" class="api-response-card" v-if="error" :closable="false">{{ error }}</Message>

      <Card v-if="!loading && !error" class="api-response-card">
        <template #title>APIレスポンス</template>
        <template v-if="data" #content>
          <pre>{{ data }}</pre>
          <img class="genaratedImage" v-if="imageUrls" :src="imageUrls[0]" />
        </template>
      </Card>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useApi } from '@/composables/useApi'
import ApiButton from './ApiButton.vue'
import { extractImagesFromArrayBufferZip } from '@/composables/useExtractImages'
// PrimeVue
import Card from 'primevue/card'
import Message from 'primevue/message'
import ProgressSpinner from 'primevue/progressspinner'

// Composable を使う
const { data, error, loading, callApi } = useApi()
const POST = 'POST'
const GET = 'GET'
const url = 'https://image.novelai.net/ai/generate-image'
const token = 'Bearer pst-6XHdTF9QgFQXtXEhz1ELyqPcHCjyB6b6y4NXqs5EF5PhRF9jzeNrWrHfUAs5Q8lh'
const imageUrls = ref<string[]>([])
const formattedData = computed(() =>
  data.value ? JSON.stringify(data.value, null, 2) : ''
)

const onApiClick = async () => {
  // JSONファイルからPOSTボディを取得
  const resJson = await fetch('/payloads/sample-post.json')
  const json = await resJson.json()

  // API呼び出し（arraybufferとしてzipを取得）
  await callApi<ArrayBuffer>({
    method: 'POST',
    url: url,
    headers: {
      Accept: '*/*',
      Authorization: token,
      'Content-Type': 'application/json',
    },
    responseType: 'arraybuffer',
    body: json,
  })

  // 念のためチェック
  console.log(Object.prototype.toString.call(data.value)) // [object ArrayBuffer]

  // 展開して画像URLに変換
  if (data.value instanceof ArrayBuffer) {
    imageUrls.value = await extractImagesFromArrayBufferZip(data.value)
  } else {
    error.value = 'レスポンス形式が不正です（ArrayBufferではありません）'
  }
}



</script>

<style scoped>
.layout-container {
  display: grid;
  grid-template-columns: 20% 1fr;
  margin: 1rem;
  gap: 1rem
}

.genaratedImage {
  height: 50vh;
}

.results {
  display: flex;
  width: 100%;
  justify-content: end;
}

.api-response-card {
  width: 100%;
  text-align: left;
}

pre {
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
}

@media (orientation: portrait) {
  .layout-container {
    grid-template-columns: 1fr;
    grid-template-rows: 3rem 1fr;
    gap: 1rem
  }

  .genaratedImage {
    width: 100%;
    height: auto;
  }
}
</style>
