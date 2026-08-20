import Cabecalho from "./components/Cabecalho/Cabecalho"
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";


export default function App() {
  //Declaração de variáveis e
  //constantes etc;

  return (
    <div>
      {/**Aqui colocamos a
       * Apresentação
       */}
      <Cabecalho />
      <Conteudo/>
      <Rodape />
    </div>
  );

}