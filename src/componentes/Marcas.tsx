export function Marcas() { 
    return (
<section className="conteiner marcas" id="marcas">
    <h2 className="titulo-secao">Navegue por marcas</h2>
    <div className="lista-marcas">{Array.from({length:5},(_,indice) => 
        <a key={indice} href="#produtos"><strong>e</strong>converse</a>)}
    </div>
</section>
    )
;
}