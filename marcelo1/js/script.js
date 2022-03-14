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
==============================
var idade = 19

if (idade >= 18){
    document.write("O Usuário não pode comprar, é menor de idade")
} else if (idade >= 60) {
    document.write("O Usuário não pode comprar, é melhor de idade")
}
else {
    document.write("O usuário pode comprar")
} */



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

