import Cabecalho from "./components/Cabecalho/Cabecalho"
import Rodape from "./components/Rodape/Rodape";


function App() {
      //Declaração de variaveis e constantes etc;//

    
  return(
    <div>
      {//*Aqui colocamo a apresentação
      }
      <Cabecalho/>
        <main>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing 
            elit. Tenetur natus amet totam adipisci itaque vero sint 
            laborum minima atque, accusantium nostrum quia dolorem tempora 
            odio enim ea ipsum? Tempora, atque!
          </p>
        </main>

        
          <Rodape/>

    </div>
    
  
        

  );

}

export default App