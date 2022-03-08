/* alert("Mensagem fora do arquivo 01");

var idade;     //variável tipo inteiro (int)
var nome;      //varável tipo string
var salario;   //variável tipo number/flot
var booleano;  //variável tipo boolean
var cidade;    //varável tipo string

nome = "Lincoln";
idade = 17;
salario = 10.50; 
booleano = true; //false
cidade = "joinville";

alert("ola " +nome+ " voce tem " +idade+ " anos");
document.write("<h1>"+"ola " +nome+" você tem " +idade+" anos"+"</h1>");
document.write("Olá "+nome+ " você tem "+idade+" anos e mora em "+cidade+" recebe "+salario+" por horas trabalhadas"+"<br>"); 
document.write("Você gosta de morar em "+cidade+"? resposta: "+booleano); */

/* var nome;
var idade;
var endereco;
var peso;
var altura;
var mesada;

nome = "Lincoln";
idade = 17;
endereco = "Rua Augusto Eccel 330";
peso = 67.2;
altura = 1.81;
mesada = 100;
document.write("<h1>"+"Óla me chamo "+nome+"."+"</h1>");
document.write("<h1>"+"Eu tenho "+idade+" de idade."+"</h1>");
document.write("<h1>"+"Eu moro na "+endereco+",");
document.write("<h1>"+"Curiosidades de mim, eu peso "+peso+","+"</h1>");
document.write("<h1>"+"minha altura é "+altura+","+"</h1>");
document.write("<h1>"+"e eu ganho uma mesada de "+mesada+" por mês"+"</h1>"); */

/* var nome;

nome = window.prompt("Insira um nome:")

alert("Óla "+nome)

document.write("Salve "+nome) */

/* var nome
var endereco
var nacionalidade
var profissao

nome = window.prompt("Seu nome:");
endereco = window.prompt("Insira seu endereço:");
nacionalidade = window.prompt("Qual sua nacionalidade:");
profissao = window.prompt("Qual sua profissão");

document.write("<br>"+"Oie "+nome+"<br>");
document.write("<br>"+"você mora "+endereco+"."+"<br>");
document.write("<br>"+"Nasceu no/na ou em "+nacionalidade+" e"+"<br>");
document.write("<br>"+"trabalha com "+profissao+"."+"<br>"); */

/* 
var numero1 = parseFloat(window.prompt("Insira o primeiro valor"));
var numero2 = parseFloat(window.prompt("Insira o segundo valor"));
var resultado = 0.00;

// Adição
resultado = (numero1 + numero2);
document.write("soma: "+resultado+"<br>");

// Subtração
resultado = (numero1 - numero2);
document.write("Subtração: "+resultado+"<br>");

// Divisão
resultado = (numero1 / numero2);
document.write("Divisão: "+resultado+"<br>");

//Multiplicação
resultado = (numero1 * numero2);
document.write("Multiplicação: "+resultado+"<br>");

//Resto Da Divisão
resultado = (numero1 % numero2);
document.write("Resto da divisão: "+resultado); */

/*
var numero1 = 15;
var numero2 = 20;
var retorno;

// maior
retorno = (numero1 > numero2);
document.write(retorno+"<br>");

// menor
retorno = (numero1 < numero2);
document.write(retorno+"<br>");

// maior igual
retorno = (numero1 >= numero2);
document.write(retorno+"<br>");

// menor igual
retorno = (numero1 <= numero2);
document.write(retorno+"<br>");

// igual
retorno = (numero1 == numero2);
document.write(retorno); 

var numero1 = 15;
var numero2 = 20;
var retorno;

retorno = (numero1 <= numero2) && (numero1 != numero2);
document.write(retorno+"<br>");

retorno = (numero1 == numero2) || (numero1 > numero2);
document.write(retorno); */

function minhaFuncao() {
  var opcao = document.getElementById("opcao").value;
  var numero1 = document.getElementById("opcao").value;;
  var numero2 = document.getElementById("opcao").value;;
  var resultado = 0.0;

  // Adição
  resultado = numero1 + numero2;
  document.getElementById('mensagem').innerHTML = ("soma: " + resultado + "<br>");

  // Subtração
  resultado = numero1 - numero2;
  document.getElementById('mensagem').innerHTML = ("Subtração: " + resultado + "<br>");

  // Divisão
  resultado = numero1 / numero2;
  document.getElementById('mensagem').innerHTML = ("Divisão: " + resultado + "<br>");

  //Multiplicação
  resultado = numero1 * numero2;
  document.getElementById('mensagem').innerHTML = ("Multiplicação: " + resultado + "<br>");

  //Resto Da Divisão
  resultado = numero1 % numero2;
  document.getElementById('mensagem').innerHTML = ("Resto da divisão: " + resultado);
}

function limpar() {
  getElementById("mensagem").innerHTML = "";
}
