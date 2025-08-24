import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/themes/mytheme.scss'
import 'primeicons/primeicons.css'
import { StatusBar } from '@capacitor/status-bar'

// PrimeVue 関連
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura';
import Button from 'primevue/button'                         // アイコン
import 'primeicons/primeicons.css'
const app = createApp(App)
StatusBar.hide()

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.component('Button', Button)  // よく使うコンポーネントはここで登録

app.mount('#app')
