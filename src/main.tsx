import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/* =========================
   PAGE LOAD PROGRESS BAR
========================= */

function initProgressBar() {
  const bar = document.createElement('div')
  bar.id = 'progress-bar'
  document.body.appendChild(bar)

  let width = 0
  let interval: ReturnType<typeof setInterval>

  // Fast start
  interval = setInterval(() => {
    if (width < 70) {
      width += Math.random() * 8
    } else if (width < 90) {
      width += Math.random() * 2
    } else {
      clearInterval(interval)
    }
    bar.style.width = width + '%'
  }, 80)

  // Complete on load
  window.addEventListener('load', () => {
    clearInterval(interval)
    bar.classList.add('complete')
    setTimeout(() => bar.remove(), 700)
  })
}

initProgressBar()

/* =========================
   RENDER
========================= */

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)