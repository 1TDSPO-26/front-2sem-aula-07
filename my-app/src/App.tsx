import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";


export default function App(){
  //Declaração de variáveis e
  //constantes etc;
 
  return(
    <div>
      {/**Aqui colocamos a Apresentação */}
    <Cabecalho />
    <main>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, perferendis cupiditate. Ratione sint odio, facere qui itaque optio architecto pariatur officiis culpa iusto? Mollitia recusandae magni voluptatum, in deleniti ullam.</p>
      </main>
      <Rodape />
    </div>
  );


}

 