function calcular() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('nasc')
    var res = document.getElementById('res')
    var img = document.getElementById('img')

    if (nasc.value.length == 0 || nasc.value > ano) {
        alert('[ERR] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('rad')
        var idade = ano - Number(nasc.value)
        var genero = ''

        if (sexo[1].checked) {

            if (idade <= 4) {
                genero = 'bebe menino'
                img.src = 'img/bebe2.jpeg'
            } else if (idade > 4 && idade <= 17) {
                genero = 'menino'
                img.src = 'img/menino.jpeg'
            } else if (idade > 18 && idade <= 50) {
                genero = 'Homem'
                img.src = 'img/adulto.jpg'
            } else {
                genero = 'Senhor'
                img.src = 'img/idoso.png'
            }

        } else if (sexo[0].checked) {
            if (idade <= 4) {
                genero = 'bebe menina'
                img.src = 'img/bebe1.webp'
            } else if (idade > 4 && idade <= 17) {
                genero = 'menina'
                img.src = 'img/menina.jpeg'
            } else if (idade > 18 && idade <= 50) {
                genero = 'Mulher'
                img.src = 'img/adulta.jpeg'
            } else {
                genero = 'Senhora'
                img.src = 'img/idosa.jpg'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`


    }


}