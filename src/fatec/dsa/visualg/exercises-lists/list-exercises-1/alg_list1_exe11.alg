Algoritmo "App11-Ex11-Lista1"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula o valor de venda baseado num percentual
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 16/05/2021
Var
   // Se��o de Declara��es das vari�veis
   produto: caractere
   custo, percentual: real
   lucro, pv: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //limpa a tela
   limpatela

   //apresenta o app
   escreval ("App 11 - Lista 1")
   escreval("Fun��o: Calcula o valor de venda baseado num percentual")

   //pula linha
   escreval ()

   //recebe o nome do produto
   escreva ("Digite o nome do produto: ")
   leia (produto)

   //recebe o custo do produto
   escreva ("Digite o custo do produto: ")
   leia (custo)

   //recebe o percentual de lucro
   escreva ("Digite o percentual de lucro pretendido: ")
   leia (percentual)

   //limpa a tela
   limpatela

   //estrutura repita at� que o percentual esteja entre 30% e 60%
   se percentual < 30 entao
      repita
         repita
            escreval ("O percentual deve estar entre 30% e 60%")
            escreva ("Digite novamente: ")
            leia (percentual)
            limpatela
         ate percentual >= 30
      ate percentual <= 60
   fimse

   se percentual > 60 entao
      repita
         repita
            escreval ("O percentual deve estar entre 30% e 60%")
            escreva ("Digite novamente: ")
            leia (percentual)
            limpatela
         ate percentual >= 30
      ate percentual <= 60
   fimse


   //calcula o lucro
   lucro <- (percentual/100) * custo

   //calcula o pre�o de venda
   pv <- lucro + custo

   //limpa a tela
   limpatela

   //exibe os resultados
   escreval ("Produto: ", produto)
   escreval ("Custo: R$", custo)
   escreval ("Porcentagem de lucro pretendido: ", percentual, "%")
   escreval ("Pre�o de Venda: R$", pv)

Fimalgoritmo