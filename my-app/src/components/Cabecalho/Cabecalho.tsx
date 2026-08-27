import Botao from "../Botao/Botao"


export default function Cabecalho(){

    return(
        <header className="flex items-center gap-4 bg-slate-800 p-4 text-white">
            <Botao/>
            <h1>Projeto React</h1>
            <h2>Autor:Eu</h2>
        </header>

    );

}