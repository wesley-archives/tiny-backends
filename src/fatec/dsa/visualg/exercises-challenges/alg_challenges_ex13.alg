Algoritmo "Ex13 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula a m�dia final ponderada de uma aluno
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   n1, n2, n3: inteiro
   mediafinal: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex13 - Lista de Desafios")
   escreval ("Fun��o: Calcula a m�dia final ponderada de uma aluno")

   //recebe as notas do aluno
   escreva ("Digite a nota 1: ")
   leia (n1)
   escreva ("Digite a nota 2: ")
   leia (n2)
   escreva ("Digite a nota 3: ")
   leia (n3)


   //calcula a media final
   mediafinal <- (n1*2+n2*3+n3*5)/10

   escreval //pula linha

   //resultados
   escreval ("M�dia Final: ", mediafinal)

Fimalgoritmo