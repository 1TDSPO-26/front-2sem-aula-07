import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";


export default function App() {
  //Declaração de variáveis
  //Constantes etc;


  return (
    <div>
      <Cabecalho />
      <Outlet/>
      <Rodape />
    </div>
  );
}
