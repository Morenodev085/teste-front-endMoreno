const parceiros = [
  { titulo:'Parceiros', imagem:'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=85' },
  { titulo:'Parceiros', imagem:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=85' }
];
export function Parceiros() {
     return (
       <section className="conteiner parceiros" aria-label="Parceiros">{parceiros.map((parceiro, indice) => 
       <article className="cartao-parceiro" key={indice} style={{backgroundImage:`linear-gradient(90deg,#0009,#0003),url(${parceiro.imagem})`}}>
              <h2>{parceiro.titulo}</h2>
              <p>Conheça nossas ofertas e novidades.</p>
              <a className="botao-amarelo" href="#marcas">CONFIRA</a>
              </article>
          )}
        </section>
     ); 
}