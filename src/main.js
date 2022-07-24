import { createApp } from 'vue'
import App from './App.vue'

// Get all components beggining with "Base"
const requireComponent = require.context(
    './components',
    false,
    /Base[A-Z]\w+\.(vue|js)$/
)

const app = createApp(App)

// Import components beggining with "Base" in all the application
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    
    const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')

    app.component(componentName, componentConfig.default || componentConfig)
})

app.mount('#app')