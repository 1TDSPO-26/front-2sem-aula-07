import Cabecalho from "./componentes/cabecalho/Cabecalho"
import Rodape from "./componentes/rodape/Rodape";
import Conteudo from "./componentes/conteudo/Conteudo";
import { Outlet } from "react-router";


export default function App() {
  // Declaração de variaveis e constantes, etc.
  const nome:string = "Roberto";
  const sobrenome:string = "Park";


  return(
    <div>
      <Cabecalho />
        <Outlet/>
      <Rodape />
    </div>

    );
}