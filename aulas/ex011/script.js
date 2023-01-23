function enviar() {
    var nac = document.getElementById('naci')
    var res = document.getElementById('res')

    var nasc = String(nac.value)
    var nasc = nasc.toLowerCase()
    if(nasc != "brasil"){
        res.innerHTML = `<p>Estrangeiro. Seja bem vindo(a) ao Brasil!</p>`
    }else{
        res.innerHTML = `<p>Brasileiro. Bem vindo(a) de volta!</p>`
    }

}



