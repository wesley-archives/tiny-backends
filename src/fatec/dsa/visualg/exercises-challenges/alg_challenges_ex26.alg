Algoritmo "Ex26 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Verifica a situa��o do estoque
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   estoque, max, min: inteiro
   media: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex26 - Lista de Desafios")
   escreval ("Fun��o: Verifica a situa��o do estoque")

   //recebe as informa��es de estoque
   escreva ("Digite quantidade em estoque: ") //atual
   leia (estoque)

   escreva ("Digite a quantidade m�xima de estoque: ") //maxima
   leia (max)
   escreva ("Digite a quantidade m�nima de estoque: ") //minima
   leia (min)

   //calcula a quantidade media
   media <- (max +min)/2

   //resultados
   escreval //pula linha
   escreval ("Quantidade m�dia do estoque: ", media)

   se media >= estoque entao //verifica se � necessario comprar mais produtos
      escreval ("O estoque � sufuciente")
   senao
      escreval ("� necess�rio comprar mais mercadoria")
   fimse

Fimalgoritmo