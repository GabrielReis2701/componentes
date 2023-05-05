class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles);

    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card");

        const cardLeft =  document.createElement("div");
        cardLeft.setAttribute("class","card_left");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","card_right")
        

        const autor = document.createElement("span");
        autor.textContent= (this.getAttribute("autor") || "By anonymous");

        const titulo = document.createElement("a");
        titulo.textContent = this.getAttribute("titulo");
        titulo.href = this.getAttribute("link-url");

        const descricao = document.createElement("p");
        descricao.textContent=this.getAttribute("descricao");



        cardLeft.appendChild(autor);
        
        cardLeft.appendChild(titulo);
        cardLeft.appendChild(descricao);

        

        const imagem = document.createElement("img");
        imagem.src=(this.getAttribute("imagem") || "assets/default.jpg");

        cardRight.appendChild(imagem);


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot
    }

    styles(){

    }
}

customElements.define("card-news", CardNews);