Algoritmo "app3-ex3-lista1"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Recebe e calcula custos para determinar o custo final de um veiculo
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 13/05/2021
Var
   // Se��o de Declara��es das vari�veis
   custo_fabrica, custo_revendedor, impostos, custo_final: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //Limpa a tela
   limpatela

   //apresenta o app
   escreval ("App 3 - Lista 1")
   escreval("Fun��o: Calcula custos para determinar o valor de um veiculo")

   //pula linha
   escreval ()

   //Recebe o custo de f�brica
   escreva ("Digite o custo de f�brica do ve�culo: ")
   leia (custo_fabrica)

   //Calcula os custos
   custo_revendedor <- (custo_fabrica*(25/100))
   impostos <- (custo_fabrica*(45/100))

   //Realiza a soma dos custos
   custo_final <- (custo_fabrica + custo_revendedor + impostos)

   //Exibe os resultados
   escreval ("Custo de F�brica��o: R$", custo_fabrica)
   escreval ("Custo do Revendedor: R$", custo_revendedor)
   escreval ("Impostos: R$", impostos)
   escreval ("Custo para o Consumidor: R$", custo_final)

Fimalgoritmo