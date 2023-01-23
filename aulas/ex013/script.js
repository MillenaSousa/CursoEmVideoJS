function mostrar() {
    var dia = document.getElementById('res')
    var agora = new Date()

    var diaSem = agora.getDay()

    switch (diaSem) {
        case 0:
            dia.innerHTML = `Hoje é Domingo`
            break
        case 1:
            dia.innerHTML = `Hoje é Segunda-feira`
            break
        case 2:
            dia.innerHTML = `Hoje é Terça-feira`
            break
        case 3:
            dia.innerHTML = `Hoje é Quarta-feira`
            break
        case 4:
            dia.innerHTML = `Hoje é Quinta-feira`
            break
        case 5:
            dia.innerHTML = `Hoje é Sexta-feira`
            break
        case 6:
            dia.innerHTML = `Hoje é Sabado`
            break
        default:
            dia.innerHTML = 'ERRO! Dia invalido'
            break

    }

}

