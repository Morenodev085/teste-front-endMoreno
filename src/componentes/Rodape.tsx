export function Rodape() { 
    return(

    <footer className="rodape-site">
        <div className="conteiner colunas-rodape">
            <div>
                <a href="#inicio" className="logotipo">
                <span>e</span>converse
                </a>
                <p>Loja demonstrativa para o teste de Front-End.</p>
            </div>
            <nav aria-label="Institucional">
                <h2>Institucional</h2>
                <a href="#inicio">Sobre nós</a>
                <a href="#boletim">Contato</a>
            </nav>
            <nav aria-label="Ajuda">
                <h2>Ajuda</h2>
                <a href="#boletim">Dúvidas</a>
                <a href="#boletim">Trocas e devoluções</a>
            </nav>
            <nav aria-label="Termos">
                <h2>Termos</h2>
                <a href="#boletim">Privacidade</a>
                <a href="#boletim">Cookies</a>
            </nav>
        </div>
        <p className="direitos-autorais">© 2026 eConverse — projeto de estudo.</p>
    </footer>
    );
}