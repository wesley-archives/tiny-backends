Algoritmo "Ex35 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula o pre�o do abastecimento de um automovel
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   combustivel: caractere
   litro, custo, desconto, total: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex35 - Lista de Desafios")
   escreval ("Fun��o: Calcula o pre�o do abastecimento de um automovel")

   //recebe o numero de litros vendidos e o tipo de combustivel
   escreva ("Digite o tipo de combust�vel (G/A): ")
   leia (combustivel)

   escreva ("Digite a quantidade de combustivel (em litros): ")
   leia(litro)

   //calcula o total a ser pago
   se combustivel = "G" entao
      custo <- 3.3
      desconto <- custo - (custo * (4/100))
   senao
      custo <- 2.9
      desconto <- custo - (custo * (3/100))
   fimse

   se (combustivel = "G") e (litro>=20) entao
      desconto <- custo - (custo * (6/100))
   fimse

   se (combustivel = "A") e (litro>=20) entao
      desconto <- custo - (custo * (5/100))
   fimse

   total <- desconto * litro

   //resultados
   escreval //pula linha
   escreval ("Total a ser pago: ",total)

Fimalgoritmo