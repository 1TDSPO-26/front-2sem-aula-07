import Botao from "../Botao/Botao";

export default function Cabecalho() {

  return (
    <header className="bg-amber-300 w-screen text-blue-900 flex justify-around">
      <h1>Projeto React</h1>
      <h2 className="minhaClasse">Autor: Ana Mendes Sempre Linda</h2>
      <Botao/>
    </header>
  )
}