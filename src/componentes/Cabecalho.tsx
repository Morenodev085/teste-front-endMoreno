export function Cabecalho() {
  return (

  <header className="cabecalho-site">
    <div className="beneficios"><div className="conteiner beneficios-conteudo"><span>✓ Compra <strong>100% segura</strong></span><span>▣ <strong>Frete grátis</strong> acima de R$ 200</span><span>▤ <strong>Parcele</strong> suas compras</span></div></div>
    <div className="conteiner conteudo-cabecalho">
      <a className="logotipo" href="#inicio" aria-label="eConverse, início"><span>e</span>converse</a>
      <form className="formulario-busca" role="search" onSubmit={evento => { evento.preventDefault(); document.getElementById('produtos')?.scrollIntoView({behavior:'smooth'}); }}>
        <label className="somente-leitor-tela" htmlFor="busca">Buscar produtos</label><input id="busca" type="search" placeholder="O que você está buscando?"/><button aria-label="Buscar">⌕</button>
      </form>
      <nav aria-label="Conta"><a href="#produtos" aria-label="Favoritos">♡</a><a href="#boletim" aria-label="Minha conta">♙</a><a href="#produtos" aria-label="Carrinho">🛒</a></nav>
    </div>
    <nav className="navegacao-principal" aria-label="Menu principal"><div className="conteiner links-menu">{['TODAS CATEGORIAS','SUPERMERCADO','LIVROS','MODA','LANÇAMENTOS','OFERTAS DO DIA','ASSINATURA'].map(nome => <a key={nome} href="#categorias">{nome}</a>)}</div></nav>
  </header>
  )
  ;
}