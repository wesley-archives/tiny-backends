Algoritmo "Ex48 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : calcula a m�dia de notas
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   n1, n2: inteiro
   media: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex48 - Lista de Desafios")
   escreval ("Fun��o: calcula a m�dia de notas")

   //recebe as notas
   escreva ("Digite a 1� nota: ")
   leia (n1)

   //verifica nota 1
   enquanto (n1 < 0) ou (n1 > 10) faca
      escreva ("Nota inv�lida, digite novamente: ")
      leia (n1)
   fimenquanto

   escreva ("Digite a 2� nota: ")
   leia (n2)

   //verifica nota 2
   enquanto (n2 < 0) ou (n2 > 10) faca
      escreva ("Nota inv�lida, digite novamente: ")
      leia (n2)
   fimenquanto

   //calcula a media
   media <- (n1+n2)/2

   //resultados
   escreval
   escreval ("M�dia: ", media)

Fimalgoritmo