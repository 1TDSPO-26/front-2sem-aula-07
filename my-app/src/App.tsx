import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import Saudacao from "./components/Saudacao/Saudadao";

export default function App(){
  //Declaração de variáveis e 
  //constantes etc;
  
  return(
    <div>
      {/**Aqui colocamos a Apresentação */}
    <Cabecalho/>
    <main>
      <div>
        <Saudacao nome={"José"}  />
      </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur dolorem aliquam quasi ipsum vitae optio ea inventore. Nemo, dolorem fuga. Maiores neque quaerat numquam recusandae optio, quia tenetur officiis.
        </p>
      </main>
      <Rodape/>
    </div>
  );

}