import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './components/Context/CartApi.jsx'
import { UserProvider } from './components/Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <CartProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </CartProvider>
    </UserProvider>
  </BrowserRouter>,
)
