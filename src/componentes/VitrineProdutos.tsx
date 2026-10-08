
import type { Produto } from '../tipos/Produto.ts';
import { CartaoProduto } from './CartaoProduto.tsx';

interface Propriedades {
  produtos: Produto[];
  aoSelecionar: (produto: Produto) => void;
  carregando: boolean;
  erro: string | null;
  titulo?: string;
}

const abas = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS'
];

export function VitrineProdutos({
  produtos,
  aoSelecionar,
  carregando,
  erro,
  titulo = 'Produtos relacionados'
}: Propriedades) {
  return (
    <section className="conteiner vitrine" id="produtos" aria-labelledby="titulo-produtos">
      <h2 className="titulo-secao" id="titulo-produtos">
        {titulo}
      </h2>
      <nav className="abas" aria-label="Categorias de produtos">
        {abas.map((aba, indice) => (
          <span
            key={aba}
            className={indice === 0 ? 'aba-ativa' : ''}
          >
            {aba}
          </span>
        ))}
      </nav>
      {carregando && (
        <p role="status">Carregando produtos...</p>
      )}
      {!carregando && erro && (
        <p className="aviso-estudo" role="alert">
          {erro}
        </p>
      )}
      {!carregando && !erro && produtos.length === 0 && (
        <p>Nenhum produto encontrado.</p>
      )}
      {!carregando && !erro && produtos.length > 0 && (
        <div className="grade-produtos">
          {produtos.map((produto, indice) => (
            <CartaoProduto
              key={`${produto.productName}-${indice}`}
              produto={produto}
              aoSelecionar={aoSelecionar}
            />
          ))}
        </div>
      )}
    </section>
  );
}
