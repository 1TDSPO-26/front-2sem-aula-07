import Cabecalho from "./componentes/cabecalho/Cabecalho"
import Rodape from "./componentes/rodape/Rodape";


export default function App() {
  // Declaração de variaveis e constantes, etc.
  const nome:string = "Roberto";
  const sobrenome:string = "Park";


  return(
    <div>
      {/** Aqui colocamos a apresentação */}
      <Cabecalho/>
      <main>
        <div>
          <Saudacao nome="Jose" />
        </div>
      </main>
      <Rodape/>
    </div>

    );
}