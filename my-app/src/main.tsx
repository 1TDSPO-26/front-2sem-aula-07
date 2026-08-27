import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'

//Importando os objetos de rotas
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './router/Home/index.tsx';
import Produtos from './router/Produtos/index.tsx';
import EditarProdutos from './router/EditarProdutos/index.tsx';
import Error from './router/Error/index.tsx';


//Importando os componentes de rotas
const router = createBrowserRouter([
  {path:"/", element:<App/>, errorElement:<Error/>, children:[
    {path:"/", element:<Home/>},
    {path:"/", element:<Produtos/>},
    {path:"/editar-produtos/:id", element:<EditarProdutos/>}
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
