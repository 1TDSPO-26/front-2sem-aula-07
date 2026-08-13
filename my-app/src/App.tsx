import Cabecalho from "./components/Cabecalho/Cabecalho"
import Rodape from "./components/Rodape/Rodape"


export default function App(){
//Declareção de variaveis e constantes etc;

  return(
    <div>
      {/**Aqui colocamos a apresentação */}
      <Cabecalho/>
      
      <main>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, labore dicta voluptatum aperiam eveniet consequatur. Labore aut fugit laborum explicabo incidunt vitae. Distinctio et dicta expedita temporibus suscipit! Adipisci nam voluptas quisquam unde, nemo tenetur possimus sapiente est eveniet saepe, qui enim voluptate, voluptatum impedit. Quis, hic! At, quae reprehenderit.
        </p>
      </main>

      <Rodape/>
    </div>
  );

}