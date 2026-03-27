import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Hanya panggil App.jsx
import './index.css' // Untuk mengaktifkan Tailwind CSS 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)