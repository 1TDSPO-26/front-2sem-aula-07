import Cabecalho from "./components/Cabecalho/Cabecalho"
import Rodape from "./components/Rodape/Rodape";



export default function App() {
  //Declaração de variaveis e constantes etc;


  return(
    <div>
      {/**Aqui colocamos a apresentação */}
      <Cabecalho/>
      <main>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, tempore quisquam? Maxime aperiam facilis nostrum, porro deserunt iste, nesciunt voluptas est ut voluptates sit soluta nulla quae nihil dolorem, fugit optio? Ipsam eaque placeat, et nemo necessitatibus quasi laudantium magnam, consequatur alias consequuntur velit? Nihil excepturi voluptas beatae sint esse!
        </p>
      </main>
      <Rodape/>
    </div>
  );

}