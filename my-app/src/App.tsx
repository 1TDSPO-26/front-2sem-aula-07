import Cabecalho from "./components/Cabacalho/Cabecalho"
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape"
import { Saudacao } from "./components/Saudacao/Saudacao";

export default function App() {
  
    //Declaração de variaves e constantes etc;
    const nome:string = "Lipe";
    const sobrenome:string = "Passos";

  return(

    <div>
      {/**Aqui colocamos a apresentação */}
      <h1>Meu componente</h1>
      <Cabecalho />
      <Conteudo/>
      <Rodape />
    </div>

  );
  
}
