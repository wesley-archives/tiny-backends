Algoritmo "App12-Ex12-Lista1"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Recebe dois valores e informa o maior
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 17/05/2021
Var
   // Se��o de Declara��es das vari�veis
   valor: vetor [0..1] de real
   i: inteiro
   maior, menor: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //limpa a tela
   limpatela

   //apresenta o app
   escreval ("App 12 - Lista 1")
   escreval ("Fun��o: Recebe dois valores e informa o maior")

   //pula linha
   escreval()

   //recebe os dois valores
   para i de 0 ate 1 passo 1 faca
      escreva ("Digite o ", i+1, "� valor: ")
      leia (valor[i])
   fimpara

   //ordena os numeros de forma crescente
   se valor[0] > valor[1] entao
      maior <- valor[0]
      menor <- valor[1]
   senao
      maior <- valor[1]
      menor <- valor[0]
   fimse


   //aprenta os resultados
   escreval ("Maior n�mero digitado: ", maior)
   escreval ("Menor n�mero digitado: ", menor)

Fimalgoritmo