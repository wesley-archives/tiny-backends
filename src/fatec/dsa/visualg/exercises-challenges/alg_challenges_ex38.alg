Algoritmo "Ex38 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Acesso � um sistema com usu�rio e senha
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   usuario, senha: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex38 - Lista de Desafios")
   escreval ("Fun��o: Acesso � um sistema com usu�rio e senha")

   //recebe codigo de usuario
   escreva ("C�digo de Usu�rio: ")
   leia (usuario)

   //verifica se o codigo esta correto
   enquanto usuario <> 1234 faca
      escreva ("Usu�rio inv�lido! Tente novamente: ")
      leia (usuario)
   fimenquanto

   escreva ("Senha: ")
   leia (senha)

   enquanto senha <> 9999 faca
      escreva ("Senha incorreta, tente novamente: ")
      leia (senha)
   fimenquanto

   //resultado
   escreval
   escreval ("Acesso Permitido")
Fimalgoritmo