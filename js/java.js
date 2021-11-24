//Definir variável caixa
let caixa = document.getElementById('caixa');

//Adicionar eventos com o mouse na variável caixa
caixa.addEventListener('click', clicar);
caixa.addEventListener('mouseenter', entrar);
caixa.addEventListener('mouseout', sair);

// Criar função da variável clicar (Ativa quando o usuário clicar dentro da div)
function clicar() {
    caixa.innerHTML = '<strong>VOCÊ CLICOU</strong>';
    caixa.style.background = 'black'; 
    // caixa.style.textTransform = 'Uppercase';
    caixa.style.color = 'white';
    caixa.style.fontFamily = 'arial';
    caixa.style.color = 'orange';
}

// Criar função da variável entrar (ativa quando o mause passar dentro da div)
function entrar(){
    caixa.innerHTML = '<strong>Você entrou</strong>';
    caixa.style.background = 'orange';
    // caixa.style.textTransform = 'Uppercase';
    caixa.style.color = 'black';
    // caixa.style.fontWeight = 'black';

}

// Criar função da variável sair (Ativa quando tirar o mouse dentro da div)
function sair(){
    caixa.innerHTML = '<strong>Passe o mouse</strong>';
    caixa.style.background = 'green';
    caixa.style.color = 'black';
    //caidxa.style.fontWeight = 'black';
}

// Pegar a data atual do computador
let agora = new Date();
//Pegar o dia da semana em valortes numéricos
let diaSemana = agora.getDay();
//Pegar o ID da div
let data = document.getElementById('data');

// switch(diaSemana){
//     case 0:
//         console.innerHTML = ('domingo');
//         data.style.background = 'black';
//     break;

//     case 1:
//         console.innerHTML = ('segunda');
//         data.style.background = 'gray';
//     break;

//     case 2:
//         console.innerHTML = ('terça');
//         data.style.background = 'orange';
//     break;

//     case 3:
//         console.innerHTML = ('quarta');
//         data.style.background = 'blue';
//     break;

//     case 4:
//         console.innerHTML = ('quinta');
//         data.style.background = 'yellow';
//     break:

//     case 5:
//         console.innerHTML = ('sexta');
//         data.style.background = 'pink';
//     break:

//     case 6:
//         console.innerHTML = ('sabado');
//         data.style.background = 'red';
//         //console.log('Dia inválido);
//     break;

//     default:
//         console.log('dia inválido');
//         break;
// }

    if(diaSemana == 0){
        data.innerHTML = ('Domingo');
        data.style.background = ('black');
    } else if(diaSemana == 1){
        data.innerHTML = ('Segunda-feira');
        data.style.background = ('blue');
    } else if(diaSemana == 2){
        data.innerHTML = ('terça feira');
        data.style.background = ('orange');
    } else if(diaSemana == 3){
        data.innerHTML = ('quarta feira');
        data.style.background = ('purple');
    } else if(diaSemana == 4){
        data.innerHTML = ('quinta feira');
        data.style.background = ('pink');
    } else if(diaSemana == 5){
        data.innerHTML = ('sexta feira');
        data.style.background = ('gray');
    } else if(diaSemana == 6){
        data.innerHTML = ('sabado');
        data.style.background = ('yellow');
    } else {
        data.innerHTML = ('data inválida');
        data.style.background = ('white');
        data.style.color = ('black');
    }

    let contador = 0;

    while(contador < 300){
        contador++;
        console.log(contador);
    }



