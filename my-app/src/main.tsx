import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './routes/Home/index.tsx'
import EditarProdutos from './routes/EditarProdutos/index.tsx'
import Produtos from './routes/Produtos/index.tsx'
import Error from './routes/Error/index.tsx'


const router = createBrowserRouter([

  {
    path: '/', element: <App />, errorElement: <Error />,
    children: [{
      path: "/", element: <Home />
    }, {
      path: "/editar-produtos/:id", element: <EditarProdutos />
    }, {
      path: "/produtos", element: <Produtos />
    }]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
