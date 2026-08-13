import Cabecalho from "./componentes/cabecalho/Cabecalho"
import Rodape from "./componentes/rodape/Rodape";

export default function App() {
 // Declaração de variaveis e constantes, etc.


  return(
    <div>
      {/** Aqui colocamos a apresentação */}
      <Cabecalho/>
      <main>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil at dignissimos facilis laborum ut, dicta ullam similique, unde beatae blanditiis sunt? Consequatur molestiae, praesentium magni commodi rem animi earum architecto!
      </p>
      </main>
      <Rodape/>
    </div>

    );
}