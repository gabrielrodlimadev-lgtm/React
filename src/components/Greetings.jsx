function Greetings ({ nome, messagem = "Seja bem vindo(a)!" }) {
    return(
        <div className="greeting">
            <span className="greeting_eyebrow">React - Primeiros Passos</span>
            <h1>{nome}, {messagem}</h1>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Nulla id gravida magna, ut semper sapien. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.</p>
        </div>
    );
}

export default Greetings;