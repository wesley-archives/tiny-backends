Algoritmo "Ex10 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula o pv de um autom�vel baseados no custo de fabrica��o, distribuidor e impostos
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   custofabrica, distribuidor, impostos, pv: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex10 - Lista de Desafios")
   escreval ("Fun��o: Calcula o pre�o de venda de um autom�vel")

   //recebe o custo de fabrica��o do automovel
   escreva ("Digite o custo de fabrica��o: ")
   leia (custofabrica)

   //calcula o percentual do distribuidor
   distribuidor <- custofabrica * (28/100)

   //calcula os impostos aplicados � fabrica��o
   impostos <- custofabrica * (45/100)

   //calcula o pre�o de venda do autom�vel
   pv <- custofabrica + distribuidor + impostos

   escreval //pula linha

   //resultado
   escreval ("Pre�o de venda: ", pv)
   escreval ("-----------------------")
   escreval ("Custo de f�brica: ", custofabrica)
   escreval ("Distribuidor: ", distribuidor)
   escreval ("Impostos: ", impostos)

Fimalgoritmo