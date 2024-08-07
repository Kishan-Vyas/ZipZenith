import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AppBar } from '@repo/ui/appbar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppBar isAdmin={true} login={() => {}} />
    <App />
  </React.StrictMode>,
)
