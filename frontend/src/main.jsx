import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ClavoxLoadingScreen from './components/LoadingScreen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ClavoxLoadingScreen />
  </StrictMode>,
)
