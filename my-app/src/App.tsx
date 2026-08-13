import Cabecalho from "./components/Cabecalho/Cabecalho"
import Rodape from "./components/Rodape/Rodape";


function name() {
//declaração de variaveis e 
//constantes etc;

  return(
    <div>
      {/**aqui colocamos a 
       * apresentacção
       */}
       <Cabecalho/>
       <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquid ex tempore neque earum soluta facilis recusandae doloribus fuga, dignissimos optio distinctio cumque repellendus ratione molestiae quam quos suscipit consectetur.
        </p>
       </main>
       <Rodape/>
    </div>

  );

}