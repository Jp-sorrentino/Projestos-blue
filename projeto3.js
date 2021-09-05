const prompt = require('prompt-sync')();
// • Perguntar quantas rodadas você quer fazer; (1,0 ponto)
// • Perguntar quantos jogadores vão jogar; (1,5 pontos)
// • Criar um objeto pra cada jogador com nome e número tirado; (1,5 pontos)
// • Guarda todos os objetos em uma lista; (2,0 pontos)
// • Ordenar esses objetos, sabendo que o vencedor tirou o maior número
// no dado. (2,0 pontos)
// • Mostrar no final qual jogador ganhou mais rodadas e foi o grande
// campeão. (2,0 pontos)

console.log(`Dice Game!\n`)

// set number of rounds and players 2/6
let rounds = +prompt('How many rounds are we going to play:');
let playnum = +prompt('How many players are we going to have:');


  var playerlist = [] //list that is going to store the object with the players along with the result of each round

for (let i = 0; i < playnum; i++) { //for to input player name each time is required
  var name = prompt("Please input player name:");
  let player = { // obeject to temporalely store data of game
    name: name, // refresh each name
    dicenum: 0, // refresh each round
    roundwin: 0,// refresh each win and will only grow up 
  }
  playerlist.push(player); // saving the result of each object for each player in a list 4/6
};

for (let r = 0; r < rounds; r++) { //for to input generated number until rounds end, 
    for(let i = 0; i < playnum; i++) { 
      playerlist[i].dicenum = Math.floor(Math.random() * 6 + 1);
    
      }
      playerlist.sort(function(a, b){return a.dicenum - b.dicenum}).reverse(); // order player that wins for position zero 5/6
      playerlist[0].roundwin += 1; //add wining number to each object that wins the round
      console.log(playerlist)
      console.log(`${playerlist[0].name} won this round `)     
}
playerlist.sort(function(a, b) {return a.roundwin - b.roundwin}).reverse(); 

console.log(`THE FINAL WINNER IS: ${playerlist[0].name} WITH ${playerlist[0].dicenum} POINTS!!!`); //show at the end the final winner 6/6


























