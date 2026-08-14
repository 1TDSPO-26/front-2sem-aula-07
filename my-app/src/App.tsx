import Cabecalho from "./componentes/cabecalho/Cabecalho"
import Rodape from "./componentes/rodape/Rodape";
import Saudacao from "./componentes/saudacao/Saudacao";

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
          
          <Saudacao nome=("Jose")/>

        </div>
        <p>
          <b>{`nome:${nome} Sobrenome:${sobrenome}`}</b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil at dignissimos facilis laborum ut, dicta ullam similique, unde beatae blanditiis sunt? Consequatur molestiae, praesentium magni commodi rem animi earum architecto!
        </p>
      </main>
      <Rodape/>
    </div>

    );
}