import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";

export default function App() {

  // Declaração de variáveis e constantes etc

  return (
    // Conteúdo de apresentação, sempre o primeiro é elemento de bloco html como div
    <div>
      {/** Aqui colocamos a
       * Apresentação
       */}
      <Cabecalho />
      <main>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sed totam non suscipit, recusandae harum facilis dolore alias earum veniam soluta cupiditate, numquam quibusdam hic accusantium ducimus quos tenetur incidunt.</p>
      </main>

      <Rodape />
    </div>
  );
}