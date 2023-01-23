function fatorial(numero) {
    var numero = Math.floor(Math.random() * 11)
    var fat = 1
    for (var c = numero; c > 1; c--) {
        fat *= c
    }
    return console.log(`O fatorial de ${c} é igual á ${fat}`)
}
function impar() {
    var numero = Math.floor(Math.random() * 11)
    if (numero % 2 == 0) {
        return console.log(`O número ${numero} é par`)
    } else {
        return console.log(`O número ${numero} é impar `)
    }

}
function array(valores) {

    var numero = []
    for (var c = 0; c <= 5; c++) {
        var valores = (Math.floor(Math.random() * 11))
        numero.push(valores)
        console.log(`[ ${numero[c]} ] `)

    }
    if (numero.indexOf(5) >= 0) {
        console.log(`valor 5 existente`)

    } else {
        console.log(`valor 5 inexistente`)
    }

}
function vetor() {
    let pessoa = [{ nome: 'julia', idade: 32, nascionalidade: 'Brasil' }, { nome: 'Gabriel', idade: 12, nascionalidade: 'Japão' },
    { nome: 'Joao', idade: 10, nascionalidade: 'china' }, { nome: 'ana', idade: 50, nascionalidade: 'Alemanha' }]

    for (const key in pessoa) {

        console.log(`${pessoa[key].nome} , tem ${pessoa[key].idade} anos e nasceu no(a) ${pessoa[key].nascionalidade}.`)


    }
    console.log(pessoa.length)
}
fatorial()
impar()
array()
vetor()
