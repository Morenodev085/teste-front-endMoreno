
import type { Produto } from '../tipos/Produto.ts';
import { formatarMoeda } from '../utilitarios.ts';

interface Propriedades {
  produto: Produto;
  aoSelecionar: (produto: Produto) => void;
}

export function CartaoProduto({ produto, aoSelecionar }: Propriedades) {
  return (
    <article className="cartao-produto">
      <img
        src={produto.photo}
        alt={produto.productName}
        loading="lazy"
      />
      <h3>{produto.productName}</h3>
      <p className="descricao-produto">{produto.descriptionShort}</p>
      <data value={produto.price}>
        {formatarMoeda(produto.price)}
      </data>
      <p className="frete-gratis">Frete grátis</p>
      <button
        type="button"
        className="botao-comprar"
        onClick={() => aoSelecionar(produto)}
      >
        COMPRAR
      </button>
    </article>
  );
}
