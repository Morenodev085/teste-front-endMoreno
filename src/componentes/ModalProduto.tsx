
import { useEffect, useRef, useState } from 'react';

import type { Produto } from '../tipos/Produto.ts';
import { formatarMoeda } from '../utilitarios.ts';

interface Propriedades {
  produto: Produto | null;
  aoFechar: () => void;
}

/**
 * 📚 ESTUDAR DEPOIS:
 *
 * useRef: acessa o elemento HTML <dialog>.
 * useState: controla a quantidade.
 * useEffect: abre o modal quando um produto é selecionado.
 */

export function ModalProduto({
  produto,
  aoFechar
}: Propriedades) {

  const referenciaDialogo = useRef<HTMLDialogElement>(null);
  const [quantidade, definirQuantidade] = useState(1);

  useEffect(() => {
    const dialogo = referenciaDialogo.current;
    if (!dialogo) {
      return;
    }
    if (produto) {
      definirQuantidade(1);
      if (!dialogo.open) {
        dialogo.showModal();
      }
    } else if (dialogo.open) {
      dialogo.close();
    }
  }, [produto]);

  function fecharModal() {
    referenciaDialogo.current?.close();
  }

  function diminuirQuantidade() {
    definirQuantidade(atual => Math.max(1, atual - 1));
  }

  function aumentarQuantidade() {
    definirQuantidade(atual => Math.min(99, atual + 1));
  }

  function confirmarCompra() {

    if (!produto) {
      return;
    }
    window.alert(
      `${quantidade} unidade(s) de ${produto.productName} selecionada(s).`
    );
  }

  return (
    <dialog
      ref={referenciaDialogo}
      className="modal-produto"
      aria-labelledby="titulo-modal"
      onClose={aoFechar}
      onClick={evento => {
        if (evento.target === referenciaDialogo.current) {
          fecharModal();
        }
      }}
    >
      {produto && (
        <div className="corpo-modal">
          <button
            type="button"
            className="fechar-modal"
            aria-label="Fechar modal"
            onClick={fecharModal}
          >
            ×
          </button>
          <img
            src={produto.photo}
            alt={produto.productName}
          />
          <div className="conteudo-modal">
            <h2 id="titulo-modal">
              {produto.productName}
            </h2>
            <data
              className="preco-modal"
              value={produto.price}
            >
              {formatarMoeda(produto.price)}
            </data>
            <p>
              {produto.descriptionShort}
            </p>
            {/* AÇÕES DO MODAL */}
            <div className="acoes-modal">
              <div className="controle-quantidade">
                <button
                  type="button"
                  aria-label="Diminuir quantidade"
                  onClick={diminuirQuantidade}
                  disabled={quantidade <= 1}
                >
                  −
                </button>
                <output aria-live="polite">
                  {String(quantidade).padStart(2, '0')}
                </output>
                <button
                  type="button"
                  aria-label="Aumentar quantidade"
                  onClick={aumentarQuantidade}
                  disabled={quantidade >= 99}
                >
                  +
                </button>
              </div>
              <button
                type="button"
                className="botao-amarelo"
                onClick={confirmarCompra}
              >
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      )}
    </dialog>

  );
}
