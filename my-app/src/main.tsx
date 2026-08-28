import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./globals.css"

//importando obj de rotas
import {createBrowserRouter, RouterProvider} from 'react-router';

import Home from './routes/Home/index.tsx';
import Error from './routes/Error/index.tsx';
import Produtos from './routes/Produtos/index.tsx';
import EditarProdutos from './routes/EditarProdutos/index.tsx';
import Conteudo from './routes/Conteudo/index.tsx';

// criar a URL
const router = createBrowserRouter([{
  path:"/", element:<App/>, errorElement:<Error/>, children:[
    {path:"/", element:<Home/>},
    {path:"/produtos", element:<Produtos/>},
    {path:"/editar-produtos/:id", element:<EditarProdutos/>},
    {path:"/analinda", element:<Conteudo/>},
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
