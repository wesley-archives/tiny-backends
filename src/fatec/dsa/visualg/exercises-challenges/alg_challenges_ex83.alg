Algoritmo "Ex83 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Recebe um vetor e imprime em ordem inversa
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   n: vetor [1..20] de real
   i: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex83 - Lista de Desafios")
   escreval ("Fun��o: Recebe um vetor e imprime em ordem inversa")

   //recebe os n�meros
   para i de 1 ate 20 faca
      escreva ("Digite o ", i, " n�mero: ")
      leia (n[i])
   fimpara

   //resultado
   limpatela
   escreval ("N�meros lidos")
   escreval
   para i de 20 ate 1 passo -1 faca
      escreval (n[i])
   fimpara

Fimalgoritmo