import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { routers } from './Routes/routers.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
       <RouterProvider router={routers} />
  </StrictMode>,
)
