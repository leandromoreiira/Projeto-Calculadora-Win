let numero1 = 0;
let numero2 = 0;
let operador ='';

function escolhenumero(numero){
    if (operador == ''){
        numero1 = numero1*10+numero;
        document.getElementById('number1').innerHTML = numero1;
    }else{
        numero2 = numero2 *10 + numero;
        document.getElementById('number2').innerHTML = numero2;
       
    }
    
}

function operacao(op){
    operador = op;
    document.getElementById('operadorlogico').innerHTML = op;

}



function calcularesultado(){
    let resultado = 0;
    switch(operador){
        case '+':
            resultado = soma(numero1,numero2);
        break
        case '-':
            resultado = subt(numero1,numero2);
        break
        case '*':
            resultado = mult(numero1,numero2);
        break
        case '/':
            resultado = divi(numero1,numero2);
        break
            
    }
    document.getElementById('resultado').innerHTML = resultado;
}


function soma ( numero1,numero2){
    return numero1+ numero2;
}
function subt ( numero1,numero2){
    return numero1- numero2;
}
function mult ( numero1,numero2){
    return numero1* numero2;
}
function divi ( numero1,numero2){
    if(numero2 === 0){
        window.alert('A divisão por 0 não é possivel')
        return NaN;
    }else{
    return numero1/ numero2;
    }
}

function limpacampo(){
    window.location.reload(true);

}
