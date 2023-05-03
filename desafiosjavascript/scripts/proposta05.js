function validaCadastro() {
    var cadastro = false
   
    var enderecoUsuario = new Object()
    enderecoUsuario.cidade = document.proposta__cinco.txtcidade.value
    enderecoUsuario.estado = document.proposta__cinco.txtestado.value
    enderecoUsuario.bairro = document.proposta__cinco.txtnomebairro.value
    enderecoUsuario.logradouro = document.proposta__cinco.txtlogradouro.value
    enderecoUsuario.nomeLogradouro = document.proposta__cinco.txtnomelogradouro.value
    enderecoUsuario.numero = document.proposta__cinco.txtnumero_residencia.value
    
    if (document.proposta__cinco.txtcidade.value == "") {
        alert("Preecha o campo Cidade.");
        document.frmfaleconosco.txtcidade.focus();
        return false;
    } else if (document.proposta__cinco.txtestado.value == "") {
        alert("Estado não selecionado")
        document.frmfaleconosco.txtcidade.focus();
        return false;
    } else if (document.proposta__cinco.txtnomebairro.value == "") {
        alert("Bairro não informado")
        document.frmfaleconosco.bairro.focus();
        return false;
    } else if (document.proposta__cinco.txtlogradouro.value == "") {
        alert("Logradouro não selecionado")
        document.frmfaleconosco.txtcidade.focus();
        return false;
    } else if (document.proposta__cinco.txtnomelogradouro.value == "") {
        alert("Nome Logradouro não informado")
        document.frmfaleconosco.txtnomelogradouro.focus();
        return false;
    } else if (document.proposta__cinco.txtnumero_residencia.value == "") {
        alert("Numero casa não informado")
        document.frmfaleconosco.txtnumero_residencia.focus();
        return false; 
    } else {
        cadastro = true;
        var texto ="O usuário mora em " + enderecoUsuario.cidade + "/" + enderecoUsuario.estado + ", no bairro " + enderecoUsuario.bairro + ", na " + enderecoUsuario.logradouro +":  "+ enderecoUsuario.nomeLogradouro + " com nº " + enderecoUsuario.numero +"."
    }

    if(cadastro==true){
        
       console.log(texto)
        alert("submetido com sucesso")
       
    }


}