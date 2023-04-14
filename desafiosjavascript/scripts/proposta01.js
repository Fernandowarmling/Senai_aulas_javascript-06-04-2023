
function consolidaEscolha() {
    let teste = document.getElementById("escolha").value
        switch (teste) {
        case "SU":
            console.log("Escolha correta" + " Suco")
            break;
        case "RF":
            console.log("Escolha correta " + " Refrigerante")
            break;
        case "SV":
            console.log("Escolha Correta" + " Sorvete")
            break;
        default:
            console.log("Produto Egotado por favor selecione outro")
    }
}

function verificaEscolha(escolha) {
    if (escolha=="") {
        alert("Escolha Invalida")
    }
}
