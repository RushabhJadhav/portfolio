import { createRoot } from 'react-dom/client'
import './assets/scss/main.scss'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
)