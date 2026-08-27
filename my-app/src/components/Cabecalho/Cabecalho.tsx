import Botao from "../Botao/Botao"

export default function Cabecalho() {

    return (
        <header className="bg-amber-200 w-screen text-black flex justify-around">
            <Botao/>
            <h1 className="minhaClasse">Projeto React</h1>
            <h2>Autor: Eu</h2>
        </header>
        
    );

}