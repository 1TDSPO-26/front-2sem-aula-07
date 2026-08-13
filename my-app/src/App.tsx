import Cabecalho from "./components/Cabecalho/Cabecalho"
import { Rodape } from "./components/Rodape/Rodape";




export default function App() {
 //Declaração de variaveis e
 //constantes etc;

  return(
  <div>
    {/**Aqui colocamos a Apresentação**/}
      <Cabecalho/>
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio explicabo autem esse eligendi distinctio accusamus, nam iure quae sed debitis ipsam asperiores officia veniam atque ea? Impedit nostrum, quae, esse officia iusto recusandae necessitatibus rem, quam laudantium eum harum labore fuga consequatur! Distinctio corporis illo magnam iste placeat voluptatibus nihil!
        </p>
      </main>
      <Rodape/>
  </div>
  
  );

}