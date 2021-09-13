const prompt = require('prompt-sync')();

/*
Receber votos até que o usuário diga que não tem mais ninguém para votar; (1,0 ponto)

Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional"  ou "Obrigatório"; (2,0 pontos)

Ter uma função chamada votacao(autorizacao, voto) que valida  e contabiliza o voto (número entre 1 e 5) ou retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado; (2,0 pontos) 

Contabilizar os votos de acordo com os significados (3,0 pontos):
1 = Candidato 1
2 = Candidato 2
3 = Candidato 3
4 = Voto Nulo`
5 = Voto em Branco

Ter uma função chamada exibirResultados() que deve mostrar: (2,0 pontos)
 - O total de votos para cada candidato 
 - O total de votos nulos
 - O total de votos em branco
 - Qual candidato venceu a votação*/

var candidato1 = { nome: "Bolsonaro", votos: 0};
var candidato2 = { nome: "Lula", votos: 0};
var candidato3 = { nome: "Mamãe falei", votos: 0};
var nulos = { nome: "Nulo", votos: 0};
var brancos = { nome: "Branco", votos: 0};

 function autorizaVoto() {
  let borndate = +prompt("Em que ano você nasceu?");
  var year = new Date().getFullYear();
  let age = year - borndate;

    if (age >= 18 && age < 70) {
        console.log(`Como você tem ${age} anos seu voto é obrigatorio!`);
        return true;    
     } else if (age >= 16 && age < 18 || age > 70 && age < 120) {
        console.log(`Como você tem entre 16 e 18 anos seu voto é opcional`)
        return true
     } else if (age > 120 || age < 0) {
          console.log("Err")
          return false
    } else {
        console.log("Como você tem menos de 16 anos seu voto foi Negado!")
        return false
    }

}


function votacao() {
    console.log (`
    para votar no ${candidato1.nome} digite "1" 
    para votar no ${candidato2.nome} digite "2"
    para votar no ${candidato3.nome} digite "3"
    para votar no ${nulos.nome} digite "4"
    para votar no ${brancos.nome} digite "5"`
    );
    let num = +prompt("   Voto: ")
      if (num == 1) {
        console.log(`Você votou no ${candidato1.nome}`)
      }
      if (num == 2) {
        console.log(`Você votou no ${candidato2.nome}`)
      }
      if (num == 3) {
        console.log(`Você votou no ${candidato3.nome}`)
      }
      if (num == 4) {
        console.log(`Você votou ${nulos.nome}`)
      }
      if (num == 5) {
        console.log(`Você votou em ${brancos.nome}`)
      }
}

let votando = prompt("Deseja votar [s/n] ?")
  while (votando == "s") {  // validação simples do input para continuar jogando
    autorizaVoto();
    votacao()
    votando = prompt("Alguem mais deseja votar [s/n]?")
};










 