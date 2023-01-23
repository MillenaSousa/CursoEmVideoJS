function mostrar() {

    var n1 = parseInt(prompt("Digite o primeiro valor: ")) // typeof
    var n2 = Number(prompt("Digite o segundo valor: ")) // typeof

    var soma = n1 + n2
    alert("A soma é " + soma)// concatenação

    alert(`A soma do numero ${n1} + ${n2} = ${soma} `)// formatação 
}