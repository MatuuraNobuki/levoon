// src/composables/useApi.ts
import { ref } from 'vue'
import axios, { AxiosRequestConfig, Method, ResponseType } from 'axios'

interface ApiOptions {
  method?: Method
  url: string
  body?: any
  headers?: Record<string, string>
  responseType?: ResponseType // ← text / json / blob / arraybuffer
}

export function useApi<T = any>() {
  const data = ref<T | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(false)

  async function callApi(options: ApiOptions): Promise<void> {
    loading.value = true
    error.value = null

    const config: AxiosRequestConfig = {
      method: options.method || 'GET',
      url: options.url,
      headers: options.headers || {},
      responseType: options.responseType || 'json', // ← ここがミソ
      transformResponse: [(data) => data], // JSON以外はそのまま扱う（破損防止）
    }

    if (options.method?.toUpperCase() === 'POST') {
      config.data = options.body
    } else {
      config.params = options.body
    }

    try {
      const res = await axios.request<T>(config)
      data.value = res.data
    } catch (e: any) {
      error.value = e.response?.data?.message || e.message || 'API エラー'
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    error,
    loading,
    callApi,
  }
}
