import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./globals.css"

import { createBrowserRouter, RouterProvider } from 'react-router'

import Home from "./routes/home/index.tsx"
import Produtos from "./routes/Produtos/index.tsx"
import EditarProdutos from "./routes/EditarProdutos/index.tsx"
import Error from "./routes/Error/index.tsx"
import path from 'path'

const router = createBrowserRouter([
  {path:"/", element: <App/>, errorElement:Error, children:[
    {path:"/", element: <Home/>},
    {path:"/", element: <Produtos/>},
    {path:"/", element: <EditarProdutos/>}
  ]}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
