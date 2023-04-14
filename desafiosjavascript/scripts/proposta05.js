function validaCadastro() {

    if (document.proposta__cinco.txtcidade.value == "") {
        alert("Preecha o campo Cidade.");
        document.frmfaleconosco.txtcidade.focus();
        return false;
    }

    if (document.proposta__cinco.txtestado.value == "") {
        alert("Estado não selecionado")
        document.frmfaleconosco.txtestado.focus();
        return false;
    }

    if (document.proposta__cinco.txtlogradouro.value == "") {
        alert("Logradouro não selecionado")
        document.frmfaleconosco.txtlogradouro.focus();
        return false;
    }
    let enderecoUsuario = {
        cidade: "Joinville",
        estado: "SC",
        bairro: "Centro",
        logradouro: "Rua dos Pinheiro",
        numero: "123",
    }

    console.log("O usuário mora em " + enderecoUsuario.cidade + "/" + enderecoUsuario.estado + ", no bairro " + enderecoUsuario.bairro + ", na " + enderecoUsuario.logradouro + " com nº " + enderecoUsuario.numero);
}

function validaEstado() {
    if (document.proposta__cinco.txtestado.value == "") {
    alert("Escolha Invalida")
}
}

function validaTipoLogradouro() {
    if (document.proposta__cinco.txtlogradouro.value == "") {
    alert("Escolha Invalida")
}
}