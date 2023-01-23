function calcular() {
    var velo = document.getElementById('veloc')
    var res = document.getElementById('res')
    var veloc = Number(velo.value)

    res.innerHTML = `<p> Sua velocidade atual é de <strong>${veloc}Km/h.</strong> </p>`

    if (veloc > 60) {
        res.innerHTML += `<p>Sua velocidade ultrapassou o limite permitido por lei.<strong> MULTADO</strong></p>`
    }
    res.innerHTML += `<p>Dirija sempre com segurança</p>`
}



