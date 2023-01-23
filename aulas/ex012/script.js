function analisar() {
    var idade = document.getElementById('ano')
    var res = document.getElementById('resul')

    var anos = Number(idade.value)

    if (anos >= 16 && anos <= 17 || anos >= 65) {
        res.innerHTML = `Sua idade é ${anos}. Seu voto é opcional!`
    } else if (anos >= 18) {
        res.innerHTML = `Sua idade é ${anos}. Seu voto é obrigatorio!`
    } else if (anos < 15){
        res.innerHTML = `Sua idade é ${anos}. Você ainda não pode votar!`
    }



}