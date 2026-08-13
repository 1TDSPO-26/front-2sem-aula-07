import React from 'react'
import Cabecalho from './components/Cabecalho/Cabecalho' //importando o componente Cabecalho
import Rodape from './components/Rodape/Rodape' //importando o componente Rodape

// componente funcional
function App() {
  // area para declarar variaveis e constantes


  return (
    // area HTML
    <div>
      {/*area para a apresentação*/}
      <Cabecalho/>
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident necessitatibus laudantium eaque amet aliquid mollitia ut suscipit? Explicabo hic necessitatibus, odit voluptatibus eaque unde facere, voluptatum iure eos consectetur sapiente.
          Odio dignissimos odit unde nulla, dolores accusantium ea magnam reprehenderit vel dolorum consequuntur aspernatur excepturi totam minus qui id laudantium explicabo? Facilis dolorum corrupti, mollitia eius adipisci aperiam reiciendis possimus!
        </p>
      </main>
      <Rodape/>
    </div>
  )
}

export default App  //conteudo pode ser visto por outros componentes
