/*
funções sintaxy
    nome-função(VariavelOpcional) {
        codigo;
    }

*/

 function alerta1(){//função do tipo 'procedimento'
    alert('hello happy WORDO!!!')
}

alerta1(); //invocando a função alerta1 (chada de função sem parametro)

function alerta2(texto) {
    alert(texto);
}
xxx='boa tarde MINA! :3';
alerta2(xxx)
alerta2('abacaxi azul');

function media (n1,n2,n3,n4) {
    m=(n1+n2+n3+n4)/4
    console.log("a media é "+m);
}

media(5,6,7,8)

function media2 (n1,n2,n3,n4) { //funcao com retorno
    return(n1+n2+n3+n4)/4
}

media (5,5,5,5); //convocando a funcao procedimento
console.log(media2(7,7,7,7)); //convocando a funcao com retorno
alert(media2(6,6,6,6)); //convocando a funcao com retorno
m2=media2(9,9,9,9); //convocando a funcao com retorno
alert(m2);



function controle (idade) {
    if (idade >= 18) {
        return "Entra";
    }else{
        return "Não Entra";
    }
    return resp;
    }

console.log(controle(19));




