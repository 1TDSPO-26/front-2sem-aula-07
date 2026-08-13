import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/rodape";

export default function App() {
  //declaracao de variaveis e 
  //constantes etc;

  return(
    <div>
      {/**aqui colocamos a
       * apresentação
       */}
      <Cabecalho/>
    <main>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita minima assumenda perspiciatis repellendus illum delectus recusandae id fugiat, corrupti aut molestias rerum quia quasi nihil nulla, asperiores mollitia voluptas! Debitis.</p>
    </main>
       <Rodape/>
    </div>
  );

}