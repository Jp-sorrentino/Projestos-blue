const prompt = require('prompt-sync')();
const year = new Date().getFullYear(); 
// tem bastante erro de ortografia, sorry

while (true) { 
    class estagiario { 
        constructor(nome) {
            this.nome = nome
        }         
// historia
        acordar() {
            console.log(`
            ${pessoa.nome} acordou com uma mensagem no seu celular dizendo
             que o servidor do seu serviço estava com problemas porem ele 
             estava preparado ja que tinha acordado cedo e ia conseguir chegar 
             antes da empresa abrir para resolver o transtorno
             `)
        }

        dormir() {
            console.log(`
            ${pessoa.nome} resolveu dormir mais um pouco entretanto
            acordou asustado quando seu chefe o ligou, dizendo que o servidor do seu 
            serviço estava com problemas porem como ele tinha dormido demais seu chefe
            ficou puto com ele apos o mesmo chegar atrasado
              `);
        }

        ram() {
            console.log(`
            Já que o servidor tinha absurdos 4gb de ram, ${pessoa.nome} pensou que
            isso com certeza estava ocasionando os problemas, ele solicita para 
            seu chefe então que faça um upgrade de ram na maquina
             `);
        }

        gpu() {
           console.log(`
           ${pessoa.nome} percebeu tambem um artefato na tela, 
           o qual ficou em duvida se era culpa do cabo ou da maquina, 
           no final ele supos que os artefatos eram culpa da placa de 
           video e que talvez a mesma estivesse com problema de solda BGA 
           e provavelmente isso estava ocasionando os problemas, ele solicita 
           para seu chefe então que faça uma troca de GPU da maquina 
           `);
        }

        badend() {
            console.log(`
           Suas escolhas geramram consequencias voce não acordou 
           cedo e nem conseguiu resolver o problema, pois não era
           a placa de video e sim a falta de memoria ram,
            voce esta demitido!`);
        }

        normalend() {
            console.log(`Você cumpre parte das suas obrigações e consegue manter o emprego`);
        }

    
    };
// consequencia 
    class funcionario extends estagiario {
        constructor(nome, cargo) {
          super(nome);
          this.nome = nome,
          this.cargo = cargo
        }

        goodend() {
            console.log(`Suas escolhas geraram consequencias boas consegui identificar o problema no servidor que esse tempo todo atrapalhava seu trabalho e ainda chegou cedo para resolver o problema
            voce foi promovido a ${this.cargo}`)
        }
    }
    let pessoa = new estagiario(prompt("Digite o nome do seu nome: "));

    console.log(`Escolhas tem consequencias! ${pessoa.nome} se lembrava hoje em ${year} as consequencias das escolhas que definiram sua vida em 2012`);
    console.log("");








// escolhas
let primeiraescolha = +prompt("Digite 0 para cochilar, ou, Digite 1 para acordar: ");
   
    if (primeiraescolha == 1) {
        pessoa.acordar()


    } else if (primeiraescolha == 0) {
        pessoa.dormir()
    }



let segundaescolha = +prompt(`    // prompt-sync da erros no vs code a partir da variavel 2, os comandos ficam repetindo a cada letra digitada


        Ao chegar no serviço ele pode verificar que o servidor estava rodando em hyper-v 
        e apesar de não saber devidamente o porque de ter ocorrido o crash, ele supos que: 
    
        OPÇÃO 0 GPU: (pois ele notou um artefato na tela, mas ficou em duvida se era o cabo vga de baixa qualidade ou a placa de video)
        OPÇÃO 1 RAM: (Pois o servidor estava rodando duas instancias do windows server com miseros 4gb de ram)
        
        ESCOLHA UMA OPÇÃO: `);
        
        
    if (segundaescolha == 0) {
      pessoa.gpu()
      
    } else if (segundaescolha == 1) {
      pessoa.ram()

    }
 
            
      function final() { // calcula e gera resultado para as escolhas
        let pessoa2 = new funcionario()  
        let final = primeiraescolha + segundaescolha
        console.log(final)
        if (final == 0)
           pessoa.badend()

            if (final == 1)
            pessoa.normalend()

                if (final == 2)
                pessoa2.nome = pessoa.nome
                pessoa2.cargo = "Gestor do departamento de T.I."
                pessoa2.goodend()
    }



final()  


let repetir = prompt(`

Deseja jogar novamente?
Escolha 0 se deseja sair.
Escolha 1 para continuar jogando
: `);

    if (repetir == 0) {
console.log("Obrigado por jogar!");
break
};

}

