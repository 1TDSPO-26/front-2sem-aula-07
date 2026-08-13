import Cabecalho from "./components/cabecalho/Cabecalho"
import Rodape from "./components/Rodape/Rodape";


export default function App() {
  //Declaração de variáveis e
  //constantes etc;


  return(
    <div>
      {/**Aqui colocamos a 
       * Apresentação
       */}
       <Cabecalho/>
       <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sunt fugit repellendus id quasi sed a? Odit ratione sapiente sint, pariatur nihil quibusdam fuga facilis. A vero repellendus, illo quia amet accusantium deserunt ratione nam voluptate tenetur ullam enim? Explicabo delectus tenetur assumenda maiores fugiat accusamus ratione aliquid unde? Pariatur.
        </p>
       </main>
       <Rodape/>
    </div>
  );
}
