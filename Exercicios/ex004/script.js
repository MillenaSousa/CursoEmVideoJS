function mostrar() {
    var numero = document.getElementById('numero')
    var res = document.getElementById('res')

    var valor = Number(numero.value)


    for (var c = 1; c <= 10; c++) {
        var resul = c * valor
        res.innerHTML += `${valor} X ${c} = ${resul} </br>`
    }

}
function recarregar() {
    window.location.reload();
}