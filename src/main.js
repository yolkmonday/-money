import {
  createSSRApp
} from 'vue'
import App from './App.vue'
import {
  createRouter
} from './router'
import './index.css'
import {
  createPinia
} from 'pinia'
// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const pinia = createPinia()
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)
  app.use(pinia)
  app
  return {
    app,
    router
  }
}
