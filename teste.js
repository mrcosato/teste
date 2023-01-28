//Exercícip do while:
   /*
      “Conforme aprendemos na última aula da seção 3 
      “Comandos de decisão ” em nossa aula extra. 
      Utilizando o switch case e o do while, construa
      um menu com 4 opções se o usuário digitar 0 ele sai do menu.”
   */
var readline = require('readline-sync');

  var valor = parseInt(readline.question('Informe um numero valor: '));

   do {
      switch (valor) {
         case 1:
            console.log('Inicio');
            break;

         case 2:
            console.log('Cadastro');
            break;

         case 3:
            console.log('Placar');
            break;

         case 4:
            console.log('Jogo');
            break;
      
         default:
               console.log('Opção inexistente !!!');
            break;
      }

      valor = parseInt(readline.question('Informe um numero valor: '));
   } while (valor != 0);
