import { createApp } from 'vue'
import App from './App.vue'

// PrimeVue 関連
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'

import 'primevue/resources/themes/saga-blue/theme.css'       // テーマ
import 'primevue/resources/primevue.min.css'                 // コアスタイル
import 'primeicons/primeicons.css'                           // アイコン

const app = createApp(App)

app.use(PrimeVue)
app.component('Button', Button)  // よく使うコンポーネントはここで登録

app.mount('#app')
