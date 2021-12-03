document.getElementById("box2").style.display = "none"
document.getElementById("box3").style.display = "none"
document.getElementById("box1").style.display = "none"
document.getElementById("divhome").style.display = "none"
document.getElementById("divconfig").style.display = "none"
document.getElementById("divreoferta").style.display = "none"
document.getElementById("divlogin").style.display = "none"
document.getElementById("box4").style.display = "none"
document.getElementById("alert").style.display = "none"


document.getElementById("btnadm").onclick = function (){
    localStorage.setItem("curso", "ADM")
    document.getElementById("box1").style.display = "none"
    document.getElementById("box2").style.display = "block"
}



document.getElementById("btnseg").onclick = function (){
    localStorage.setItem("curso", "Seg")
    document.getElementById("box1").style.display = "none"
    document.getElementById("box2").style.display = "block"
    document.getElementById("box3").style.display = "none"
}


function next() {
    document.getElementById("box1").style.display = "block"
    document.querySelector(".box").style.display = "none"
}






document.querySelector("#submit").onclick = function(){

    if(document.querySelector("#inputnome").value == ""){
        document.getElementById("alert").style.display = "block"
        
    }


   else{
   


    localStorage.setItem("nome", document.querySelector("#inputnome").value)
    localStorage.setItem("aparecercadastro", "nao")
    document.getElementById("box4").style.display = "none"
    document.getElementById("box2").style.display = "none"
    
    document.getElementById("box1").style.display = "none"
    document.getElementById("divbemvindo").style.display = "none"
    document.getElementById("divhome").style.display = "block"
    document.getElementById("box3").style.display = "none"

    cadUser();
   }

}

function cadUser(){
    db.collection("usuarios").add({
            
        'ano': localStorage.getItem("ano"),
        'nome': localStorage.getItem("nome"),
        'turma': localStorage.getItem("curso"),
      })
      .then((docRef) => {
          console.log("Dado Inserido Com Sucesso! ID:", docRef.id);
          
      })
      .catch((error) => {
          console.error("Erro ao Ensinar os Dados! Erro: ", error);
      });

}