import Cabecalho from "./components/Cabecalho/cabecalho"
import Rodape from "./components/Rodape/rodape"
import Saudacao from "./components/Saudacao/saudacao" 
import Conteudo from "./components/Conteudo/conteudo"


export default function App() {


  const nome:string = "Ale"
  const sobrenome:string = "Teixeira"
  return(
    <div>
      <Cabecalho/>
      <Conteudo/>
      <Rodape/>
    </div>
  )
}