
import Cabecalho from './components/Cabecalho/Cabecalho'
import  Rodape from './components/Rodape/Rodape'

function App() {
  //declaaração de variáveis e funções do componente
  //constantes 

  const nome:string = "Gustavo";
  const sobrenome:string = "Borba";
  return (
    <div>
     <Cabecalho/>
     <main>
      <b>{`${nome} ${sobrenome}`}</b>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eum commodi magnam, pariatur iusto corrupti, accusantium omnis natus nam vel doloremque ut. Nihil aspernatur laudantium at, molestias, soluta impedit nesciunt modi minus quos eum in repellendus numquam quam, molestiae asperiores cupiditate facilis voluptate! Odit, in distinctio delectus repudiandae tempora facilis!
       </p>
     </main>

     <Rodape/>
    </div>
  )
}

export default App
