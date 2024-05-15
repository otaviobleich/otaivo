//O vento DOM é acionado quando o HTML foi completamente carregado

document.addEventListener('DOMContentLoaded', function (){
    //Tipos de dados
    //Stringer: Sequencia de caracter
    //Number: números inteiros ou pontos flutuantes (10.4)
    //BooLean: Retorna dois valores, true ou false
    //object: Estrutura de dados que pode armazenar múltiplos valores
    //NULL: quando esta vazio;
    //array: objeto especial ordenado
    //function: bloco de código reutilizavel
    
    //CONST É usado para declarar uma variável cujo valor é permanente 
            const teste = 50;
            
            //LET é usado para declarar variáveis que os valores podem ser
            //retribuidos
            let C = 0;
            C = 10;
            console.log("---otavio é lindão ksksk---")
           
            const notaMedia = 8;
    
            if (notaMedia >= 6){
                alert("Aluno passou");
            } 
            else if (notaMedia >= 4 && notaMedia <6){
                alert("Aluno quase passou");
            }
            else {
                alert("Aluno reprovou");
            }
            
           //----------- Operadores----------
           
           // = sinal de atribuição 
           // == sinal de comparação 
           // === verifica se os dois são iguais e têm o mesmo tipo de dados
           // != se é diferente
           // !== se é estritamente diferente
           // > maior
           // <menor
            
           const num = 6;
           if (num === 6) {
            alert("é igual");
           }
           else{
            alert("O tipo de dado é diferente")
           }
    
          const aluno = "Otavio";
          if(aluno == "Otavio") {
           console.log("Sim é o Otavio")
          } else{
            console.log("Não é o Otavio")
          }

          //------------/--------------

          //funçoes são blocos de codigo que podem ser chamados e reutilizados
          //dentro dos paraenteses da função vai os parametros
          
          function primeiraFunçao(parametro) {
           return parametro + ", " + segundoParametro; //variaveis concatenadas
          } 

          const parametro = "essa é uma função com parametro"
          const segundoParametro = "agora com dois parametros"

        console.log(primeiraFunçao(parametro, segundoParametro));

    });     