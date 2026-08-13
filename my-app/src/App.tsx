
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";

export default function App() {

  const nome:string = "Murilo";
  const sobrenome:string = "Cruz";

  return (
    <div>
      {/**Aqui colocamos a 
         * Apresentação
         */}
      <Cabecalho/>
      <main><p><b>{`Nome: ${nome} ${sobrenome}`}</b>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt neque aut molestias. Nulla commodi adipisci molestias neque? Quasi quos esse, nobis provident, expedita accusantium possimus, mollitia libero placeat aspernatur non eaque iusto deserunt suscipit eos molestias laboriosam vitae delectus praesentium exercitationem alias consectetur? Obcaecati fugiat animi maiores saepe doloremque veniam.</p></main>
      <Rodape />
    </div>
  );
}