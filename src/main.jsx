import { createRoot } from 'react-dom/client'
import './assets/styles/global.css'
import App from './components/App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <App />
)
