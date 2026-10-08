const categorias = [
  { nome:'Tecnologia', icone:'▣' },{ nome:'Supermercado', icone:'▤' },{ nome:'Bebidas', icone:'♙' },
  { nome:'Ferramentas', icone:'⚒' },{ nome:'Saúde', icone:'♡' },{ nome:'Esportes e Fitness', icone:'♧' },{ nome:'Moda', icone:'♢' }
];
export function Categorias() { 
  return <section className="conteiner categorias" id="categorias" aria-label="Categorias">
    <ul className="lista-categorias">
      {categorias.map(categoria => <li key={categoria.nome}>
        <a href="#produtos"><span className="icone-categoria" aria-hidden="true">{categoria.icone}</span>{categoria.nome}</a>
        </li>
        )}
        </ul>
        </section>
        ; }