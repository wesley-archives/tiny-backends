Algoritmo "Ex1 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Troca valores entre duas Vari�veis
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   a, b, aux: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex1 - Lista de Desafios")
   escreval ("Fun��o: Troca valores entre duas Vari�veis")

   //atribui��o de vari�veis
   a <- 10
   b <- 20

   //vari�veis antes da troca
   escreval ("Valores antes da troca")
   escreval ("Valor de a: ", a)
   escreval ("Valor de b: ", b)

   //troca os valores entre as vari�veis
   aux <- a
   a <- b
   b <- aux

   //pula linha
   escreval

   //resultados
   escreval ("Valores depois da troca")
   escreval ("Valor de a: ", a)
   escreval ("Valor de b: ", b)

Fimalgoritmo