function mostrar() {

    var nome = prompt("Digite seu nome: ")

    document.write(`Olá, ${nome}! `) // document.write

    document.write(`</br> Seu nome possui ${nome.length} letras.`)

    document.write(`</br> Seu nome todo maiúsculo é ${nome.toUpperCase()}.`) //toUpperCase()

    document.write(`</br> Seu nome todo minúsculo é ${nome.toLowerCase()}.`) // toLowerCase()

}