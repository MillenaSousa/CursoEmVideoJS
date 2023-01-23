function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var body = document.getElementsByTagName('body')[0]
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`

    if (hora >= 0 && hora <= 12) {
        msg.innerHTML += `<p>BOM DIA!</p>`
        img.src = 'img/manha.jpg'
        body.style.background = '#f0d48f'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += `<p>BOA TARDE!</p>`
        img.src = 'img/tarde.jpg'
        body.style.background = '#E7A24F'
    } else {
        msg.innerHTML += `<p>BOA NOITE!</p>`
        img.src = 'img/noite.jpg'
        body.style.background = '#634ffc'
    }
}