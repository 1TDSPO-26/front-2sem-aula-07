import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho/Cabecalho"; //importando o componente Cabecalho
import Rodape from "./components/Rodape/Rodape"; //importando o componente Rodape

// componente funcional
function App() {
  // area para declarar variaveis e constantes

  return (
    // area HTML
    <div className="flex flex-col justify-between w-screen h-screen ">
      {/*area para a apresentação*/}
      <Cabecalho />
      <Outlet />
      <Rodape />
    </div>
  );
}

export default App; //conteudo pode ser visto por outros componentes
