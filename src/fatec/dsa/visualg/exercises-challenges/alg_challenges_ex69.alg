Algoritmo "Ex69 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula a soma e a m�dia do valor de estoque
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   preco, soma, media: real
   cont: inteiro
   resposta: caractere

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex69 - Lista de Desafios")
   escreval ("Fun��o: Calcula a soma e a m�dia do valor de estoque")

   //recebe o preco da mercadoria
   escreval
   escreva ("Digite o preco da mercadoria: ")
   leia(preco)
   soma <- preco
   cont <- 1

   //verifica se tem mais mercadoria
   escreva ("Mais mercadoria (S/N)? ")
   leia (resposta)
   
   escreval //pula linha
   
   //repeticao para adicionar mercadoria
   enquanto resposta = "S" faca
      escreva ("Digite o preco da mercadoria: ")
      leia(preco)
      soma <- soma + preco
      cont <- cont + 1
      
      escreval
      escreva ("Mais mercadoria (S/N)? ")
      leia (resposta)
   fimenquanto
   
   //calcula m�dia
   media <- soma/cont

   //resultados
   escreval
   escreval ("Soma dos pre�os ", soma)
   escreval ("M�dia de pre�os ", media)

Fimalgoritmo