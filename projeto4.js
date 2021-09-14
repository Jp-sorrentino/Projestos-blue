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

 function autorizaVoto(borndate) {
  var year = new Date().getFullYear();
  let age = year - borndate;

    if (age >= 18 && age < 70) {
        console.log(`Como você tem ${age} anos seu voto é obrigatorio!`);
        return false;    
     } else if (age >= 16 && age < 18 || age > 70 && age < 120) {
        console.log(`Como você tem entre 16 e 18 anos seu voto é opcional`)
        return false
     } else if (age > 120 || age < 0) {
          console.log("Err")
          return true
    } else {
        console.log("Como você tem menos de 16 anos seu voto foi Negado!")
        return true
    }

}


function votacao(autorizaVoto, voto) {
  console.log (`
    para votar no ${candidato1.nome} digite "1" 
    para votar no ${candidato2.nome} digite "2"
    para votar no ${candidato3.nome} digite "3"
    para votar ${nulos.nome} digite "4"
    para votar em ${brancos.nome} digite "5"`
    );
    voto = +prompt("   Voto: ")
      if (voto == 1) {
        console.log(`Você votou no ${candidato1.nome}`)
        candidato1.votos++
      }
      else if (voto == 2) {
        console.log(`Você votou no ${candidato2.nome}`)
        candidato2.votos++
      }
      else if (voto == 3) {
        console.log(`Você votou no ${candidato3.nome}`)
        candidato3.votos++
      }
      else if (voto == 4) {
        console.log(`Você votou ${nulos.nome}`)
        nulos.votos++
      }
      else if (voto == 5) {
        console.log(`Você votou em ${brancos.nome}`)
        brancos.votos++
      }
}

let votando = prompt("Deseja votar [s/n] ?")
  while (votando == "s") {  // validação simples do input para continuar jogando
    while (autorizaVoto(borndate = +prompt("Em que ano você nasceu?")));
    votacao()
    votando = prompt("Alguem mais deseja votar [s/n]?")
    if (votando == "n") {
    exibirResultados()}
};

function exibirResultados() {

  let listacandidatos = [];
  listacandidatos.push(candidato1)
  listacandidatos.push(candidato2)
  listacandidatos.push(candidato3)
  
  let nulosBrancos = [];
  nulosBrancos.push(nulos)
  nulosBrancos.push(brancos)

  listacandidatos.sort((a, b) => {
    if (b.votos < a.votos) {
           return-1
       } else {
           return true;
       }
  });
  console.log(listacandidatos)
  console.log(nulosBrancos)
  votoFinal = (listacandidatos[0].votos + brancos.votos)
  console.log(`O candidato ganhardor da eleção é ${listacandidatos[0].nome} com ${votoFinal} votos.`) 
}



 