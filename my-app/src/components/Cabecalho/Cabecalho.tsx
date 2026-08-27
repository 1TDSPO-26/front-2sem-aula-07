import Botao from "../Botao/Botao"

function Cabecalho() {
  return (
    <header className="bg-amber-500 w-screen text-black flex justify-around">
      <Botao/>
        <h1 >Projeto React</h1>
        <h2 >Autor: GB</h2>
    </header>
  )
}

export default Cabecalho
