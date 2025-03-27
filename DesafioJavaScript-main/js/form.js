
//class contato

class contato {
    constructor(nome, email, telefone, mContato, mensagem) {
        this.nome = nome,
        this.email = email,
        this.telefone = telefone,
        this.mContato = mContato,
        this.mensagem = mensagem;
    }
dados(){
    return {
        "nome": this.nome,
        "email": this.email,
        "telefone": this.telefone,
        "contato":this.mContato,
        "comentario": this.mensagem
    }
}
}

function Post(form) {
    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value,
        form.elements.namedItem("comentario").value,
    )
if (data.mContato == 1) {
    alert("Selecione o motivo do seu contato")
    return
}
Enviar(data)
}

function Enviar(pessoa) {
    var nome = pessoa.nome
    console.table(pessoa.dados())

    if (nome != "") {
        alert(`Obrigado sr(a) ${pessoa.nome} os seus dados foram encaminhados com sucesso`);
    document.location="index.html"
}
 
}