function somar() {
    var numeber1 = document.getElementById('number-1')
    var numeber2 = document.getElementById('number-2')
    var res = document.getElementById('res')

    var n1 = Number(numeber1.value)
    var n2 = Number(numeber2.value)
    var soma = n1 + n2 

    res.innerHTML = `A soma entre <strong>${n1}</strong> e <strong>${n2}</strong> é <strong>${soma}</strong>`
    
}