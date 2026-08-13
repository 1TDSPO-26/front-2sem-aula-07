import Cabecalho from "./components/Cabecalho/Cabecalho"
import Rodape from "./components/Rodape/Rodape";


export default function App() {
  //Declaração de variáveis e
  //constantes etc;

  const nome:string = "Alê";
  const sobrenome:string = "Carlos";

  return (
    <div>
      {/**Aqui colocamos a
       * Apresentação
       */}
      <Cabecalho />
      <main>
        <p>
          <b>{`Nome:${nome} Sobrenome:${sobrenome}`}</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias molestiae blanditiis omnis quos architecto maxime iure. Consectetur beatae dolores quaerat quod accusantium quidem similique adipisci reprehenderit dolorem fugit dolorum error, ea eius autem perspiciatis nulla vitae quae! Qui aut obcaecati incidunt possimus porro quibusdam delectus at? Soluta cupiditate in voluptates?
        </p>
      </main>
      <Rodape />
    </div>
  );

}