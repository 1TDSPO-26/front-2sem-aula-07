import Cabecalho from "./components/Cabecalho/Cabecalho"
import Rodape from "./components/Rodape/Rodape";
import Saudacao from "./components/Saudacao/Saudacao";


export default function App() {
  //Declaração de variáveis e
  //constantes etc;

  const nome: string = "Alê";
  const sobrenome: string = "Carlos";

  return (
    <div>
      {/**Aqui colocamos a
       * Apresentação
       */}
      <Cabecalho />
      <main>

        <div>
          <Saudacao nome={"José"} />
        </div>
        
      </main>
      <Rodape />
    </div>
  );

}