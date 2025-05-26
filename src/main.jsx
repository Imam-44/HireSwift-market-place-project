import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import './App.css';
import { RouterProvider } from 'react-router'
import router from './routes/router'
import AuthProvider from './context/AuthProvider'
import LoadingProvider from './context/LoadingContext'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
         <LoadingProvider>
            <RouterProvider router={router}/> 
         </LoadingProvider>
     </AuthProvider>
 
  </StrictMode>,
)
