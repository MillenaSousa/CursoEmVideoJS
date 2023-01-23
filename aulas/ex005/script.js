function tagname() {
    var p1 = document.getElementsByTagName('p')[2]
    p1.style.color = 'green'

}
function byid() {
    var img = document.getElementById('img-1')
    img.style.color = 'green'
}
function names() {
    var name = document.getElementsByName('name-1')[0]
    name.style.color = 'green'
}
function classname() {
    var clas = document.getElementsByClassName('class-1')[0]
    clas.style.color = 'green'
}
function selector() {
    var selec = document.querySelector('p.class-2')
    selec.style.color = 'green'
}
