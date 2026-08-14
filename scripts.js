class Depoimentos {

    constructor(seletor, intervalo) {
        this.depoimentos = document.querySelectorAll(seletor);
        this.indiceAtual = 0;
        this.intervalo = intervalo;
    }

    iniciar() {

        setInterval(() => {
            this.proximo();
        }, this.intervalo);

    }

    proximo() {
        this.depoimentos[this.indiceAtual].classList.remove("depoimentos__depoimento--ativo");

        this.indiceAtual++;

        if(this.indiceAtual >= this.depoimentos.length) {
            this.indiceAtual = 0; // faz um "looping"
        }
        this.depoimentos[this.indiceAtual].classList.add("depoimentos__depoimento--ativo"); 
    }
}

// Instanciando
const carrossel = new Depoimentos(".depoimentos__depoimento", 5000); // Recebe o tempo de transição como parâmetro

carrossel.iniciar();

class Tema {
    constructor() {
        this.buttonTema = document.getElementById("buttonTema");
        this.buttonTema.addEventListener("click", ()=> {
        //Verificar se o usuário já tem um tema pré-definido
        const temaAtual = localStorage.getItem("tema");
        //Verificar qual é o tema e inverter
        const novoTema = temaAtual === "dark" ? "light" : "dark";
        //Adicionar a classe dark no elemento body
        document.body.classList.remove("dark", "light");

        document.body.classList.add(novoTema);
        //Salvar as preferências no LocalStorage
        localStorage.setItem("tema", novoTema);
        //Atualiza o texto do botão
        this.buttonTema.textContent = novoTema === "dark" ? '☀︎' : '☽';
    })

    document.addEventListener('DOMContentLoaded', () => {
        //Verifica se tem algum tema salvo
        const temaSalvo = localStorage.getItem("tema") || "light";
        
        document.body.classList.add(temaSalvo);

        this.buttonTema.textContent = temaSalvo === "dark" ? '☀︎' : '☽';
    })
    }
}

const buttonTema = new Tema();