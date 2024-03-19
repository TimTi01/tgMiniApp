import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router.tsx'
import './index.css'
import {WebAppProvider } from '@vkruglikov/react-telegram-web-app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <WebAppProvider   
    options={{
      smoothButtonsTransition: true,
      smoothButtonsTransitionMs: 500,
    }}
  >
    <RouterProvider router={router} />
  </WebAppProvider>
)
