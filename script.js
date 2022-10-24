function calcular() {

    var faixaetaria = document.getElementById("faixaetaria");
    faixaetaria.innerText;

    /*document.getElementById("res").innerHTML = faixaetaria.value;*/

    if (faixaetaria.value === "i") {
        calcularidoso();
    }

    if (faixaetaria.value === "a") {
        calcularadulto();
    }

}

function calcularadulto() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    document.getElementById("res").innerHTML = "Seu IMC =  " + (peso / (altura * altura)).toFixed(2);

    var imc = peso / (altura * altura).toFixed(2);

    if (imc >= 0 && imc < 18.5) {
        img.src = "imagens/abaixodopeso.png";
    }

    else if (imc >= 18.5 && imc < 24.9) {
        img.src = "imagens/normal.png";
    }

    else if (imc >= 25 && imc < 29.9) {
        img.src = 'imagens/sobrepeso.png';
    }

    else if (imc >= 30 && imc < 34.9) {
        img.src = 'imagens/obesidade1.png';

    }

    else if (imc >= 35 && imc < 39.9) {
        img.src = "imagens/obesidade2.png";
    }

    else if (imc >= 40) {
        img.src = 'imagens/obesidade3.png';
    }

}


function calcularidoso() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    document.getElementById("res").innerHTML = "Seu IMC =  " + (peso / (altura * altura)).toFixed(2);

    var imc2 = peso / (altura * altura).toFixed(2);

    if (imc2 <= 22) {
        img.src = "imagens/abaixodopeso.png";
    }

    else if (imc2 >= 22.1 && imc2 < 27) {
        img.src = 'imagens/pesonormal';
    }

    else if (imc2 >= 27) {
        img.src = 'imagens/sobrepeso.png';
    }


}

