import { useEffect, useState } from 'react';
import type { Produto } from './tipos/Produto';
import { buscarProdutos } from './servicos/produtos';
import { Cabecalho } from './componentes/Cabecalho';
import { Banner } from './componentes/Banner';
import { Categorias } from './componentes/Categoria';
import { VitrineProdutos } from './componentes/VitrineProdutos';
import { ModalProduto } from './componentes/ModalProduto';
import { Parceiros } from './componentes/Parceiros';
import { Marcas } from './componentes/Marcas';
import { Boletim } from './componentes/Boletim';
import { Rodape } from './componentes/Rodape';
export default function App() {
  const [produtos, definirProdutos] = useState<Produto[]>([]);
  const [carregando, definirCarregando] = useState(true);
  const [erro, definirErro] = useState<string | null>(null);
  const [produtoSelecionado, definirProdutoSelecionado] = useState<Produto | null>(null);
  useEffect(() => {
    let ativo = true;
    async function carregar() {
      try {
        const resultado = await buscarProdutos();
        if (ativo) definirProdutos(resultado);
      } catch (falha) {
        if (ativo) definirErro(falha instanceof Error ? falha.message : 'Não foi possível carregar os produtos.');
      } finally {
        if (ativo) definirCarregando(false);
      }
    }
    void carregar();
    return () => { ativo = false; };
  }, []);
  return (

  <>
  <Cabecalho/>
  <main id="inicio">
    <Banner/>
    <Categorias/>
    <VitrineProdutos produtos={produtos} carregando={carregando} erro={erro} aoSelecionar={definirProdutoSelecionado}/>
    <Parceiros/>
    <Marcas/>
  </main>
  <Boletim/>
  <Rodape/>
  <ModalProduto produto={produtoSelecionado} aoFechar={() => definirProdutoSelecionado(null)}/>
</>
  )
}