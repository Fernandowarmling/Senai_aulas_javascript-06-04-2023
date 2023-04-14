function verificaNota(){
    let notaAluno = parseFloat(document.getElementById("nota_aluno").value);

        if (notaAluno <= 10 && notaAluno >= 7) {
            console.log("Aluno Aprovado");

        }else  if (notaAluno < 7 && notaAluno >= 5) {
            console.log("Aluno Em Recuperação");
        } else if(notaAluno < 5 && notaAluno >= 0){
            console.log("Aluno Reprovado");
        }else {
            alert("Valores fora dos parametros");
        }


    }
    