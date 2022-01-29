function somar(){
    let txt1 = document.getElementById('txt1');
    let txt2 = document.querySelector('input#txt2');
    let resultado = document.querySelector('p#resultado');
    let valor1 = Number(txt1.value);
    let valor2 = Number(txt2.value);
    let soma = valor1 + valor2;
    if(isNaN(soma)){
       return resultado.innerHTML = 'Digite um número!';
    }else{
        resultado.innerHTML = `A soma entre ${valor1} e ${valor2} é <strong>${soma}</strong`;
    }
}

function limpar(){
    let txt1 = document.getElementById('txt1');
    let txt2 = document.querySelector('input#txt2');
    let resultado = document.querySelector('p#resultado');
    console.log(resultado);
    txt1.value= null;
    txt2.value= null;
    resultado.innerHTML= null;
}