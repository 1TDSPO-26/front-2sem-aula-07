import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";

export default function App() {
  //Declaração de variáveis
  //Constantes etc;

  return (
    <div>
      {/* Aqui colocamos a apresentação */}
      <Cabecalho />
      <main>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          eum, quaerat consequatur error qui animi nostrum necessitatibus quo
          rerum sequi. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dolore eius quibusdam repellendus commodi! Corporis saepe laborum
          velit harum distinctio ex, animi fugit excepturi accusantium iusto,
          ipsam esse commodi facilis soluta?
        </p>
      </main>
      <Rodape />
    </div>
  );
}
