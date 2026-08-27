import Botao from "../Botao/Botao";

export default function Cabecalho(){


    return(
        <header className="bg-amber-500 w-screen text-black flex justify-around">
            <Botao/>
            <h1>Projeto React</h1>
            <h2>Autor: EU</h2>
        </header>

    );    
}