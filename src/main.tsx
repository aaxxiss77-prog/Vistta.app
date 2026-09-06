import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ErrorBoundary } from './components/ErrorBoundary'

window.addEventListener('error', event => {
  console.error('Erro global do VISTTA:', event.error?.name || 'Erro de execução');
});

window.addEventListener('unhandledrejection', event => {
  const reason = event.reason instanceof Error ? event.reason.name : 'Rejeição assíncrona';
  console.error('Promise rejeitada no VISTTA:', reason);
});

const savedTheme = localStorage.getItem('otica_theme')
document.documentElement.classList.toggle('dark', savedTheme === 'dark')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
