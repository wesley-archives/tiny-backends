Algoritmo "Ex79 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula a m�dia de alunos e os alunos acima da m�dia
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   n: vetor [1..20] de real
   i, cont: inteiro
   media, soma: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex79 - Lista de Desafios")
   escreval ("Fun��o: Calcula a m�dia de alunos e os alunos acima da m�dia")
   escreval
   
   //recebe as notas
   para i de 1 ate 20 faca
      escreva ("Digite a nota do aluno ", i, ": ")
      leia (n[i])
      soma <- soma + n[i]
   fimpara

   //calcula m�dia
   media <- soma / 20

   //conta notas acima da m�dia
   para i de 1 ate 20 faca
      se n[i] > media entao
         cont <- cont +1
      fimse
   fimpara

   //resultados
   escreval
   escreval ("M�dia das Turma: ", media)
   escreval ("Alunos Acima da M�dia: ", cont)

Fimalgoritmo