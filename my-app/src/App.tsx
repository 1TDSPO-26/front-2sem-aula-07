import Cabecalho from "./components/Cabecalho/Cabecalho"
import Rodape from "./components/Rodape/Rodape";
import Saudacao from "./components/Saudacao/Saudacao";


export default function App() {
  //Declaração de variáveis e
  //Constantes etc;

  const nome:string = "Kauan";
  const sobrenome:string = "Mattos";

  return(
    <div>
      {/**Aqui colocamos a 
       * Apresentação
       */}
       <Cabecalho />
       <main>

        <div>
          <Saudacao nome={"José"}/>
        </div>

        <p>
          <b>{`Nome:${nome} Sobrenome:${sobrenome}`}</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae necessitatibus iusto ex nulla odio cumque distinctio eos quaerat, eius numquam ipsum quod hic reiciendis accusamus voluptas impedit molestias porro? Maxime rem, omnis maiores impedit illum enim iusto quae possimus. Nihil magnam vero ipsa quam natus sequi nostrum voluptas deserunt assumenda!
        </p>
       </main>
        <Rodape />
    </div>
  );
}