Algoritmo "Ex14 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Verifica se o valor digitado � maior que 10
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   valor: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex14 - Lista de Desafios")
   escreval ("Fun��o: Verifica se o valor digitado � maior que 10")

   //recebe um valor
   escreva ("Digite um valor: ")
   leia (valor)

   escreval //pula linha

   //verifica se � maior que 10
   se valor < 10 entao
      escreval ("O n�mero digitado � menor que 10")
   fimse

   se valor > 10 entao
      escreval ("O n�mero digitado � maior que 10")
   fimse

   se valor = 10 entao
      escreval ("O n�mero digitado � igual a 10")
   fimse
Fimalgoritmo