class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

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
        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        
        .card{
            width: 80%;
            -webkit-box-shadow: 10px 10px 51px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 10px 10px 51px 0px rgba(0, 0, 0, 0.75);
            box-shadow: 10px 10px 51px 0px rgba(0, 0, 0, 0.75); 
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        .card_left > span {
            font-weight: 400;
        }
        .card_left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card_left > p{
            color: rgb(70,70,70);
        }
        
        `


        return style;
    }
}

customElements.define("card-news", CardNews);