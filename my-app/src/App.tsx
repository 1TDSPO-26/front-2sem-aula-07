import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho/Cabecalho"; //importando o componente Cabecalho
import Rodape from "./components/Rodape/Rodape"; //importando o componente Rodape

// componente funcional
function App() {
  // area para declarar variaveis e constantes

  return (
    // area HTML
    <div className="flex min-h-screen flex-col">
      {/*area para a apresentação*/}
      <Cabecalho />
      <div className="flex-1">
        <Outlet />
      </div>
      <Rodape />
    </div>
  );
}

export default App; //conteudo pode ser visto por outros componentes
