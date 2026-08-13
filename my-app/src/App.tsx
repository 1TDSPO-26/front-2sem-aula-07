import Cabecalho from "./components/Cabecalho/Cabecalho"
import Rodape from "./components/Rodape/Rodape";


export default function App() {
  //Declaração de variáveis e
  //constante e etc;

  return(
    <div>
      {/**Aqui colocamos a
       * Apresentação
       */}
      <Cabecalho/>
      <main>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero aperiam commodi, sunt atque hic provident totam sit officia animi dolor voluptatibus aliquid eos? Dolores ducimus rerum, quidem enim illo commodi officiis in repellendus corporis vero quam aliquam quae, blanditiis delectus modi ex libero! Doloremque odio ea, nostrum fugiat hic aliquam.
        </p>
      </main>
      <Rodape/>
    </div>
  );
}