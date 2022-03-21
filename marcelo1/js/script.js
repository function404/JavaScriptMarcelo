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

/*
 
var nome;
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

document.write("<h5>"+"Óla me chamo "+nome+"."+"</h5>");
document.write("<h5>"+"Eu tenho "+idade+" de idade."+"</h5>");
document.write("<h5>"+"Eu moro na "+endereco+","+"</h5>");
document.write("<h5>"+"Curiosidades de mim, eu peso "+peso+","+"</h5>"); */

/*
var valorProduto = 30;

if (valorProduto <= 10){
    document.write('Permitido apenas compra à vista!');
} else if (valorProduto > 10 && valorProduto <= 20){
    document.write('Permitido financiamento em 3 vezes sem juros');
} else if (valorProduto > 20 && valorProduto <= 60){
    document.write('Permitido financiamento em 6 vezes sem juros');
} else{
    document.write('Permitido financiamento em 12 vezes sem juros');
}
var idade = 19

if (idade >= 18){
    document.write("O Usuário não pode comprar, é menor de idade")
} else if (idade >= 60) {
    document.write("O Usuário não pode comprar, é melhor de idade")
}
else {
    document.write("O usuário pode comprar")
} */


/* 
    var nmr = parseInt(prompt("Digite o código do filme:"));

    if (nmr == 1){
        document.write('Filme é The Batman, sala 01.');
    } else if (nmr == 2){
        document.write('Filme é Uncharted, sala 02.');
    } else if (nmr == 3){
        document.write('Filme é Ursinhos Carinhosos, sala 03.');
    } else if (nmr == 4){
        document.write('Filme é Exorcismo Sagrado, sala 04.');
    } else if (nmr == 5){
        document.write('Filme é Coração de Fogo, sala 05.');
    } else{
        document.write("Opção inválida!")
    }

document.write("<h1>"+"Óla me chamo "+nome+"."+"</h1>");
document.write("<h1>"+"Eu tenho "+idade+" de idade."+"</h1>");
document.write("<h1>"+"Eu moro na "+endereco+",");
document.write("<h1>"+"Curiosidades de mim, eu peso "+peso+","+"</h1>");
document.write("<h1>"+"minha altura é "+altura+","+"</h1>");
document.write("<h1>"+"e eu ganho uma mesada de "+mesada+" por mês"+"</h1>");

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
document.write(retorno);

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
*/
// CALCULADORA
/*
function soma(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    var calculo = num1 + num2;
    document.getElementById("adicao").value = calculo;
}

function sub(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    var calculo = num1 - num2;
    document.getElementById("subtracao").value = calculo;
}

function mult(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    var calculo = num1 * num2;
    document.getElementById("multiplicacao").value = calculo;
}

function div(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    var calculo = num1 / num2;
    document.getElementById("divisao").value = calculo;
}

function rest(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    var calculo = num1 % num2;
    document.getElementById("resto").value = calculo;
} */

// att 1

var num = 10;
var im;

document.write("<h1>Impares</h1>")
for (im = 1; im < 10; im++) {
    if (num[im] % 2 != 1) {
        document.write(im + "<br/>");
    }
};
// atividade 2
document.write('<h1>Soma de 1 ate 100</h1>');

var i;
var count = 0;

for (i = 0; i <= 100; i++) {
    count = (count + i)
    document.write((count) + '<br>');
};

// ativiade 3
var names = [
    'João',
    'Jose',
    'Maria',
    'Sebastiao',
    'toni',
];

document.write('<h1>Exibir nomes de ate 4 letras</h1>');
var i;

for (i = 0; i <= names.length; i++) {
    if (names[i].length === 4) {
        document.write((names[i]) + '<br>');
    }
};