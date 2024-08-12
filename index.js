var setadaesquerda = window.document.getElementById ("setadaesquerda")
var setadadireita = window.document.getElementById ("setadadireita")
var leonardo = window.document.getElementById ("leonardo")
var bruna = window.document.getElementById ("bruna")
var samantha = window.document.getElementById ("samantha")

function rolarparadireita() {

 leonardo.style= "display:none"
 bruna.style= "display:flex"
 setadadireita.style= "display:none"
 setadaesquerda.style= "display:flex"

}

function rolarparaesquerda() {

leonardo.style= "display:flex"
bruna.style= "display:none"
setadadireita.style= "display:flex"
setadaesquerda.style= "display:none"

}

