import {useState } from "react"
import { listaDadosTechStore } from "../../data/listaDadosTech"
import type { Produto } from "../../types/tipoProduto";

export default function Produtos() {

  const [dadosTechLista, setDadosTechLista] = useState<Produto[]>(listaDadosTechStore);

  

  return(
    <main>
      <h2>Produtos</h2>
      <div>
        <table>

          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Imagem</th>
            </tr>
          </thead>

          <tbody>
            {dadosTechLista.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
                <td>{produto.descricao}</td>
                <td><img src={produto.imagem} alt={produto.descricao} /></td>
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
    </main>
  )
}
