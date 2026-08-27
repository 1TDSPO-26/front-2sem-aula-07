import Botao from "../Botao/Botao"

export default function Cabecalho() {

    return (
        <header className="bg-amber-200 w-screen text-black flex justify-around">
            <Botao />
            <h1 className="hover:bg-amber-900">Projeto React</h1>
            <h2 className="hover:bg-amber-900">Autor: Rogerio Ceni</h2>
        </header>
    );

}