export function Boletim() {
    return(
    <aside className="boletim" id="boletim">
    <div className="conteiner conteudo-boletim">
        <div>
            <h2>Inscreva-se na nossa newsletter</h2>
            <p>Receba novidades e ofertas exclusivas.</p>
        </div>
        <form className="formulario-boletim"
            onSubmit={evento => { evento.preventDefault(); window.alert('Formulário demonstrativo, sem envio.'); }}>
                <label className="somente-leitor-tela" htmlFor="nome">Nome</label>
                <input id="nome" placeholder="Digite seu nome" required/>
                <label className="somente-leitor-tela" htmlFor="email">E-mail</label>
                <input id="email" type="email" placeholder="Digite seu e-mail" required/>
                <button>INSCREVER</button>
                <label className="consentimento">
                <input type="checkbox" required/> Aceito receber comunicações.</label>
        </form>
    </div>
    </aside>
    );
 }