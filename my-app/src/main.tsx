import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import"./globals.css"


//importando objetos de rotas
import { createBrowserRouter,RouterProvider } from 'react-router'


//importando os objetos de rotas
import Home from './routes/Home/index.tsx'
import Error from './routes/Error/index.tsx'
import EditarProdutos from './routes/EditarProdutos/index.tsx'
import Produtos from './routes/Produtos/index.tsx'

const router = createBrowserRouter([
  {path:"/", element:<App/>, errorElement:<Error/>, children:[
    {path:"/", element: <Home/>},
    {path:"/Produtos", element:<Produtos/>},
    {path:"/EditarProdutos/:id", element: <EditarProdutos /> },
  ]
}]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import type { format } from 'path'

