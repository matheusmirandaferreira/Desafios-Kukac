//desabilitar o bloco de resultados.
const result = document.querySelector(".result");
result.classList.add("off");

function calcular(event) {
    event.preventDefault();

    const removeClass = () => result.classList.remove("off");
    removeClass();

    //pegando valores dos inputs
    const valor = document.getElementById("valorCompra").value;
    const pagamento = document.getElementById("pagamento").value;

    let resultValor = document.querySelector(".valor p");
    let resultPagamento = document.querySelector(".pagamento p");
    let resultTroco = document.querySelector(".troco p");
    let resultDevolutiva = document.querySelector(".devolutiva p");

    resultValor.innerHTML = valor;
    resultPagamento.innerHTML = pagamento;

    let troco = pagamento - valor;

    resultTroco.innerHTML = troco;

    cem = dez = um = 0;

    if (troco >= 100) {
        cem = Math.floor(troco / 100);
        troco = troco - 100 * cem;
    } else if (troco >= 10) {
        dez = Math.floor(troco / 10);
    }
    troco = troco - 10 * dez;
    um = troco;

    if (troco >= 10) {
        dez = Math.floor(troco / 10);
        troco = troco - 10 * dez;
        um = troco;
    } else {
        um = troco;
    }

    resultDevolutiva.innerHTML += `${cem} notas de 100, ${dez} notas de 10 e ${um} notas de 1. <br>`;
}
