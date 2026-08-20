
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Conteudo from "./components/conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";

export default function App() {

  return (
    <div>
      {/**Aqui colocamos a 
         * Apresentação
         */}
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </div>
  );
}