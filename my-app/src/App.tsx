import Cabecalho from "./components/Cabecalho/Cabecalho"
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape"



export default function App(){
//Declareção de variaveis e constantes etc;


  return(
    <div>
      {/**Aqui colocamos a apresentação */}
      <Cabecalho/>
      <Conteudo/>
      <Rodape/>
    </div>
  );

}