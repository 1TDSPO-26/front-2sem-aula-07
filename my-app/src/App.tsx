import Cabecalho from "./components/Cabecalho/cabecalho"
import Rodape from "./components/Rodape/rodape"
import Saudacao from "./components/Saudacao/saudacao"


export default function App() {


  const nome:string = "Ale"
  const sobrenome:string = "Teixeira"
  return(
    <div>
      <Cabecalho/>
      <main>

        

        <p>
          <b>Olá, {nome} {sobrenome}</b>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur corrupti atque voluptatibus? Ut dolores est fuga facilis dignissimos? Atque inventore minus quae reprehenderit ipsum, ex autem ipsa consectetur ullam officia!</p>
      </main>
      <Rodape/>
    </div>
  )
}