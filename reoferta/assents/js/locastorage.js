var curso = localStorage.getItem("curso")
var ano = localStorage.getItem("ano")
var nome = localStorage.getItem("nome")
var exibiranoeturma = document.querySelector("#exibirano")

function primeiroano(){
    
    localStorage.setItem("ano", "1")
    document.getElementById("box4").style.display = "none"
    document.getElementById("box2").style.display = "none"
    
    document.getElementById("box1").style.display = "none"
    document.getElementById("divbemvindo").style.display = "none"
    document.getElementById("divhome").style.display = "none"
    document.getElementById("box3").style.display = "block"
}


function segundoano(){
    localStorage.setItem("ano", "2")
    document.getElementById("box4").style.display = "none"
    document.getElementById("box2").style.display = "none"
    
    document.getElementById("box1").style.display = "none"
    document.getElementById("divbemvindo").style.display = "none"
    document.getElementById("divhome").style.display = "none"
    document.getElementById("box3").style.display = "block"
}


function terceiroano(){
    localStorage.setItem("ano", "3")
    document.getElementById("box4").style.display = "none"
    document.getElementById("box2").style.display = "none"
    
    document.getElementById("box1").style.display = "none"
    document.getElementById("divbemvindo").style.display = "none"
    document.getElementById("divhome").style.display = "none"
    document.getElementById("box3").style.display = "block"
}


exibiranoeturma.innerText = curso + "  " + ano +  " " + "Ano"
exibirnome.innerText = nome



if(localStorage.getItem("aparecercadastro") == "nao"){
    document.getElementById("divbemvindo").style.display = "none"
    document.getElementById("divhome").style.display = "block"
    document.getElementById("divmenu").style.display = "block"
}



