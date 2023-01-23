function contar() {
    var iniciar = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var res = document.getElementById('res')

    if (iniciar.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('ERRO! Faltam dados')
    } else {
        
        var inicio = Number(iniciar.value)
        var final = Number(fim.value)
        var paso = Number(passo.value)
        if (inicio < final) {
            res.innerHTML = 'Contagem crescente </br>'
            for (var c = inicio; c <= final; c += paso) {
                res.innerHTML += `${c}  \u{1f449}`
            }
        } else {
            res.innerHTML = ' Contagem regressiva </br>'
            for (var c = inicio; c <= final; c -= paso) {
                res.innerHTML += `${c}  \u{1f3c1}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }

}
function recarregar(){
    window.location.reload();
} 
