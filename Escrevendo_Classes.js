//#3️⃣ Escrevendo as classes de um Jogo
//classe
class dungeon {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    //função
    atk() {
        let skill;

        if(this.tipo == "mago") {
            skill = "Flecha de Fogo";
        } else if(this.tipo == "guerreiro") {
            skill = "Investida Destruidora";
        } else if(this.tipo == "monge") {
            skill = "Chute do Dragão";
        } else if(this.tipo == "ninja") {
            skill = "Shuriken Fantasma";
        } else {
            skill = "uma pedra";
        }

        //saida
        console.log(`O ${this.tipo}, ${this.nome}, atacou usando ${skill}!`)
    }
}

//objetos
let playerMago = new dungeon("Merlin", 63, "mago");
let playerGuerreiro = new dungeon("Ragnar", 45, "guerreiro");
let playerMonge = new dungeon("Buda", 58, "monge");
let playerNinja = new dungeon("Musashi", 34, "ninja");
let playerNovato = new dungeon("Pirralho", 17, "novato");

//chamadas da função
playerMago.atk();
playerGuerreiro.atk();
playerMonge.atk();
playerNinja.atk();
playerNovato.atk();
