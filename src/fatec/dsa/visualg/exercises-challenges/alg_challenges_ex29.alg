Algoritmo "Ex29 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Soma os dois maiores numeros entre 3
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   n1, n2, n3, maior1, maior2, soma: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex29 - Lista de Desafios")
   escreval ("Fun��o: Soma os dois maiores numeros entre 3")

   //recebe tres valores
   escreva ("Digite o 1� valor: ")
   leia (n1)

   escreva ("Digite o 2� valor: ")
   leia (n2)

   se n1 = n2 entao
      escreva ("Os numeros n�o podem se repetir, digite novamente: ")
      leia (n2)
   fimse

   escreva ("Digite o 3� valor: ")
   leia (n3)

   se (n3 = n1) ou (n3 = n2) entao
      escreva ("Os numeros n�o podem se repetir, digite novamente: ")
      leia (n3)
   fimse

   //verifica qual o maior valor
   se (n1 > n2) e (n1 > n3) entao
      maior1 <- n1
      se n2 > n3 entao
         maior2 <- n2
      senao
         maior2 <- n3
      fimse
   senao
      maior1 <- n2
      se n1 > n3 entao
         maior2 <- n1
      senao
         maior2 <- n3
      fimse
   fimse

   se (n3 > n1) e (n3 > n2) entao
      maior1 <- n3
      se n1 > n2 entao
         maior2 <- n1
      senao
         maior2 <- n2
      fimse
   fimse

   //soma os dois maiores valores
   soma <- maior1 + maior2

   //resultado
   escreval //pula linha
   escreval ("Maior valor: ", maior1)
   escreval ("O segundo maior valor �: ", maior2)
   escreval ("A soma dos dois maiores valores �: ", soma)
Fimalgoritmo