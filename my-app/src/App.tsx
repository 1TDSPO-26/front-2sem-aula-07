import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/rodape";
import Saudacao from "./components/Saudacao/Saudacao";

export default function App() {

  const nome:string = 'Matheus';
  const sobrenome:string = 'Ruiz';

  return(
    <div>
      {/**aqui colocamos a
       * apresentação
       */}
      <Cabecalho/>
      <main>
        <div>
          <Saudacao nome={"Matheus"}
        </div>
        <p>
        <b>{`Nome:${nome} Sobrenome:${sobrenome}`}</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam reprehenderit necessitatibus, excepturi dolores veritatis iusto dignissimos dolor nobis eligendi, vitae expedita harum perspiciatis porro sapiente at odit explicabo consectetur.
        </p>
      </main>
      <Rodape/>
    </div>
  );

}