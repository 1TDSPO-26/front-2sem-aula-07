import Cabecalho from "./components/Cabecalho/Cabecalho"; //importando o componente Cabecalho
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape"; //importando o componente Rodape

// componente funcional
function App() {
  // area para declarar variaveis e constantes


  return (
    // area HTML
    <div>
      {/*area para a apresentação*/}
      <Cabecalho />
      <Conteudo/>
      <Rodape />
    </div>
  );
}

export default App; //conteudo pode ser visto por outros componentes
