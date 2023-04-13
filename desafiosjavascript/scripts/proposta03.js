function validaDivisor(){
    let divisor = document.getElementById("divisor").value;
    if (divisor=""){
        alert("Divisor não pode ser Vazio")
    }
}


function calculaDivisao() {
    let divisor = parseFloat(document.querySelector("#divisor").value);
    let dividendo = parseFloat(document.querySelector("#dividendo").value);
    if (divisor != 0) {
        console.log(dividendo / divisor)
    } else {
        alert("Divisor não pode ser ZERO")
    }
}