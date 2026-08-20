import Cabecalho from "./components/Cabecalho/Cabecalho"
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";


export default function App() {
  //Declaração de variáveis e
  //constante e etc;

  const nome: string = "Mateus";
  const sobrenome: string = "Isaque";
  return (
    <div>
      <Cabecalho />
      <Conteudo/>
      <Rodape />
    </div>
  );
}