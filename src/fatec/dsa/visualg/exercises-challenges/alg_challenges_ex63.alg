Algoritmo "Ex63 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Recebe 10 n�meros e soma
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   n: vetor [1..10] de real
   i: inteiro
   soma: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex63 - Lista de Desafios")
   escreval ("Fun��o: Recebe 10 n�meros e soma")

   para i de 1 ate 10 faca
      escreva ("Digite o ", i, " n�mero: ")
      leia (n[i])

      //soma os n�meros
      soma <- soma + n[i]
   fimpara

   //resultado
   escreval
   escreval ("A soma dos n�meros �: ", soma)

Fimalgoritmo