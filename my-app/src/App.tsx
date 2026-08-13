import Cabecalho from "./components/cabecalho/cabecalho";
import Rodape from "./components/Rodape/Rodape";

export default function App() {
  return(
  //declaração de variaveise cotantes etc
  <div>
    {/**aqui colocamos a  apresentação */}
    <Cabecalho />
    <main>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere possimus veniam fugiat error nam vel ea aliquam. Culpa porro eaque maiores omnis ut, esse voluptate quidem deserunt? Libero, quod voluptas!
      </p>
    </main>
    <Rodape/>
  </div>
  );
}