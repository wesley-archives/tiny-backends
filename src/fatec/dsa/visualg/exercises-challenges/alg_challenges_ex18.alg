Algoritmo "Ex18 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Verifica se a pessoa est� apta a votar
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   ano, nascimento, idade: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex18 - Lista de Desafios")
   escreval ("Fun��o: Verifica se a pessoa est� apta a votar")

   //recebe o ano atual
   escreva ("Digite o ano atual: ")
   leia (ano)

   //recebe o ano de nascimento da pessoa
   escreva ("Digite o ano que nasceu: ")
   leia (nascimento)

   //calcula a idade
   idade <- ano - nascimento

   //resultado
   escreval ("Sua idade �: ", idade)
   se idade >= 16 entao
      escreval ("Maiores de 16 anos j� podem votar")
   senao
      escreval ("Menores de 16 anos n�o podem votar")
   fimse

Fimalgoritmo