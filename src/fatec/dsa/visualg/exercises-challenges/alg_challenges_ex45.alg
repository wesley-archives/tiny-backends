Algoritmo "Ex45 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   :
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
// Se��o de Declara��es das vari�veis
   n1, n2: inteiro
   divisao: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex45 - Lista de Desafios")
   escreval ("Fun��o: faz uma divis�o")

   //recebe 2 valores
   escreva ("Digite o 1� valor: ")
   leia (n1)
   
   escreva ("Digite o 2� valor: ")
   leia (n2)

   enquanto n2 = 0 faca
      escreva ("Digite um valor diferente de 0: ")
      leia (n2)
   fimenquanto

   divisao <- n1/n2

   //resultados
   escreval //pula linha
   escreval (n1, " / ", n2, " = ", divisao)
Fimalgoritmo