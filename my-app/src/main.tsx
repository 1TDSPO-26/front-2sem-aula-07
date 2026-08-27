import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'


//Importando objetos de rota
import { createBrowserRouter, RouterProvider } from 'react-router';

//impotando os componentes de rota
import Home from './routes/Home/index.tsx';
import Produtos from './routes/Produtos/index.tsx';
import EditarProdutos from './routes/EditarProdutos/index.tsx';
import Error from './routes/Error/index.tsx';

//Criando o objeto de rotas
const router = createBrowserRouter([
  {path: '/', element: <App />, errorElement: <Error />,children: [
    {path: '/home', element: <Home />}, 
    {path: '/produtos', element: <Produtos />}, 
    {path: '/editar-produtos/:id', element: <EditarProdutos />}
  ]
  }])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
