Algoritmo "Ex66 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   :
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   n1, n2, soma, i: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex66 - Lista de Desafios")
   escreval ("Fun��o: Recebe 2 valores e calcula a soma dos inteiros entre eles")

   escreva ("Digite o 1� valor: ")
   leia (n1)

   escreva ("Digite o 2� valor: ")
   leia (n2)

   se n2 > n1 entao
      para i de n1 ate n2 faca
           soma <- soma + i
      fimpara
      
      senao
      
      escreval
      escreval ("Soma de tr�s para frente")
      para i de n2 ate n1 faca
           soma <- soma + i

      fimpara
   fimse

   //resultado
   escreval
   escreval ("Soma: ", soma)

Fimalgoritmo