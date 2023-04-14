function calculaDivisao() {
    let divisor = parseFloat(document.getElementById("divisor").value);
    if(Number.isNaN(divisor)){
    alert("Divisor não numeral")
    }
    let dividendo = parseFloat(document.getElementById("dividendo").value);
    if(Number.isNaN(dividendo)){
        alert("Dividendo não numeral")
    }
   
    if (divisor == 0) {
        alert("Divisor não pode ser ZERO");
    }else {
        console.log(dividendo / divisor);

    }
}