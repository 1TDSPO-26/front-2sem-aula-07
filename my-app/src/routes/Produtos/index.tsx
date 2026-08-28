import {useState } from "react"
import { listaDadosTechStore } from "../../data/listaDadosTech"
import type { Produto } from "../../types/tipoProduto";

export default function Produtos() {

  const [dadosTechLista] = useState<Produto[]>(listaDadosTechStore);

  

  return(
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <section className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <table className="w-full text-left">

            <thead className="bg-slate-800 text-white"> {/* titulo da tabela */}
              <tr>
                <th className="tamanhoThTabela">Nome</th>
                <th className="tamanhoThTabela">Descrição</th>
                <th className="tamanhoThTabela">Preço</th>
                <th className="tamanhoThTabela">Imagem</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200">
              {dadosTechLista.map((produto) => (
                <tr key={produto.id} className="transition-colors hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-800">{produto.nome}</td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-emerald-600">{produto.preco.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}</td>
                  <td className="max-w-md px-6 py-4 text-slate-600">{produto.descricao}</td>
                  <td className="tamanhoThTabela">
                    <img 
                    src={produto.imagem} 
                    alt={produto.descricao} 
                    className="h-20 w-20 rounded-lg object-cover shadow-sm"
                    />
                  </td>
                </tr>
              ))}
            </tbody>   

            <tfoot>
              <tr>
                <td colSpan={5}>
                  Qntdd de produtos: {dadosTechLista.length}
                </td>
              </tr>
            </tfoot>
                
          </table>
        </div>
      </section>
    </main>
  )
}
