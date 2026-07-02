class Depoimentos {
    constructor() {
        this.depoimentos = document.querySelectorAll(".depoimento");
        this.indiceAtual = 0;
    }

    iniciar() {
        setInterval(() => {
            this.proximo();
        }, 5000); // tempo do intervalo
    }

    proximo() {
        this.depoimentos[this.indiceAtual].classList.remove("ativo");

        this.indiceAtual++;

        if(this.indiceAtual >= this.depoimentos.length) {
            this.indiceAtual = 0; // faz um "looping"
        }
        this.depoimentos[this.indiceAtual].classList.add("ativo"); 
    }
}

// Instanciando
const carrossel = new Depoimentos(".depoimento", 5000); // Recebe o tempo de transição como parâmetro

carrossel.iniciar();

class Tema {
    constructor() {
        this.botaoTema = document.getElementById("botaoTema");
        this.botaoTema.addEventListener("click", ()=> {
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
        this.botaoTema.textContent = novoTema === "dark" ? '☀︎' : '☽';
    })

    document.addEventListener('DOMContentLoaded', () => {
        //Verifica se tem algum tema salvo
        const temaSalvo = localStorage.getItem("tema") || "light";
        
        document.body.classList.add(temaSalvo);

        this.botaoTema.textContent = temaSalvo === "dark" ? '☀︎' : '☽';
    })
    }
}

const botaoTema = new Tema();