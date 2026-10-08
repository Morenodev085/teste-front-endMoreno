import type { Produto } from '../tipos/Produto';

export const ENDPOINT_PRODUTOS =
  '/api/produtos';

/**
 * 📚 ESTUDAR — EXERCÍCIO PRINCIPAL DO TESTE
 * 1. Use fetch(ENDPOINT_PRODUTOS) para buscar os dados.
 * 2. Confira response.ok e trate falhas.
 * 3. Converta o corpo com response.json().
 * 4. Verifique a propriedade products.
 * 5. Retorne a lista de produtos tipada.
 * Dica: a função é async e retorna Promise<Produto[]>.
 *
 */
export async function buscarProdutos(): Promise<Produto[]> {
  try{
    const resposta = await fetch(ENDPOINT_PRODUTOS);
    if(!resposta.ok){
        throw new Error(`Falha na requisição: ${resposta.status} ${resposta.statusText}`);
    }
    const data = await resposta.json();
    if(!data.products || !Array.isArray(data.products)){
        throw new Error('Resposta inválida: propriedade "products" ausente ou não é um array.');
    }
    return data.products as Produto[];
  } catch (erro) {
    console.error('Erro ao buscar produtos:', erro);
    if (erro instanceof Error) {
      throw erro;
    }
    throw new Error('Não foi possível carregar os produtos.');
  }
}
