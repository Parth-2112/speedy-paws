// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Layout from './components/Layout.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GameModeProvider } from './context/GameModeContext';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <GameModeProvider>
      <Layout>
        <App />
      </Layout>
    </GameModeProvider>
  </BrowserRouter>
)
