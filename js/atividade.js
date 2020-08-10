notas (8,7,9,1)


function notas (n1, n2, n3, n4) {
    menor = n1
    if (menor >= n2){
        menor == n2
    }
    else if(menor >= n3){
        menor == n3
    }
    else if(menor >= n4){
        menor == n4
    }

    media = (n1 + n2 + n3 + n4 - menor) / 3

    if(media >= 7){
        resp = 'aprovado';
    }
    else if (media <= 7 && media > 4){
         resp = 'recuperação';
    }
    else {
        resp = 'reprovado';
    }

    horas = 250
    presença_em_horas = 100

    presença_total = presença_em_horas * 100 / horas

    if (presença_total < 75){
        resp = 'reprovado'
    }
}
    
    
alert('sua media é: '+media)

alert(resp)

alert('sua presença é igual: ' +presença_total + '%')



