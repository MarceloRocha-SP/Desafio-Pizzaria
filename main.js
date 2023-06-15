/*function sendForm(){
    const pegaValorDaConta = document.getElementById("valorConta");
    const pegaValorDaTaxa = document.getElementById("valorTaxa");
    const pegaQuantidadePessoas = document.getElementById("quantidadePessoas");
    if (pegaValorDaConta.value == ""){
        alert("Insira o valor da conta.");
    } else if (pegaValorDaTaxa.value == ""){
        alert("Insira o valor da taxa.");
    } else if (pegaQuantidadePessoas.value == ""){
        alert("Insira a quantidade de pessoas.");
    } else {
        formEvent();
    }
}*/


function calcularConta() {
    const pegaValorDaConta = document.getElementById("valorConta");
    const pegaValorDaTaxa = document.getElementById("valorTaxa");
    const pegaQuantidadePessoas = document.getElementById("quantidadePessoas");
    const calcValorFinal = (parseInt(pegaValorDaConta.value) + parseInt(pegaValorDaTaxa.value)) / parseInt(pegaQuantidadePessoas.value);

    document.getElementById("resultado").innerHTML = calcValorFinal;
}

function formEvent(){

    const form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        calcularConta()

//        console.log("form enviado");
    })
}


//getelementbyid

//const pegaValorDaConta = document.getElementById("valorConta");

//function exibirValorDaConta() {
//    console.log(pegaValorDaConta.value)
//}

//pegaValorDaConta.addEventListener("change", exibirValorDaConta);

// Falta o CSS
