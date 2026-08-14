import Cabecalho from "./components/Cabacalho/Cabecalho"
import Rodape from "./components/Rodape/Rodape"
import { Saudacao } from "./components/Saudacao/Saudacao";

export default function App() {
  
    //Declaração de variaves e constantes etc;
    const nome:string = "Lipe";
    const sobrenome:string = "Passos";

  return(

    <div>
      {/**Aqui colocamos a apresentação */}
      <h1>Meu componente</h1>
      <Cabecalho />
      <main>

        <div>
        <Saudacao nome={"Felipe"}/>
        </div>

        <p>
          <b>{nome} {sobrenome}</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt laborum fuga nostrum obcaecati minus voluptatibus, assumenda perferendis veniam rem molestias eaque! Voluptate libero quo corrupti eius mollitia iste sed cupiditate debitis itaque! Veritatis, soluta! Minima voluptatum pariatur eligendi facere, obcaecati hic quidem voluptatem! Deleniti ullam non necessitatibus officiis. Optio, sed.
        </p>
      </main>
      <Rodape />
    </div>

  );
  
}
