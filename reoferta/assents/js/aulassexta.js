const materia1sexta = document.querySelector("#materia1sexta")
const horariop1sexta =  document.querySelector("#horariop1sexta")
const horariosx1sexta = document.querySelector("#horariosx1sexta")
const prof1sexta =  document.querySelector("#prof1sexta")
const entrar1sexta = document.querySelector("#entrar1sexta")
const share1sexta =  document.querySelector("#share1sexta")


 

function materiasexta1(){
    db.collection("sextareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            materia1sexta.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#sx1").style.display = "none"
        }
    }).catch(() => {
        document.querySelector("#sx1").style.display = "none"
    });

    
}


function horariopsexta1(){
    db.collection("sextareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            horariop1sexta.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#sx1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#sx1").style.display = "none"
    });
}


function horariossexta1(){
    db.collection("sextareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            horariosx1sexta.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#sx1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#sx1").style.display = "none"
    });
}

function profsexta1(){
    db.collection("sextareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            prof1sexta.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#sx1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#sx1").style.display = "none"
    });
}


function entrarsexta1(){


    db.collection("sextareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#sx1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#sx1").style.display = "none"
    });

}











function materiasexta2(){
    db.collection("sextareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            materia2sexta.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#sx2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#sx2").style.display = "none"
    });

    
}


function horariopsexta2(){
    db.collection("sextareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            horariop2sexta.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#sx2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#sx2").style.display = "none"
    });
}


function horariossexta2(){
    db.collection("sextareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            horariosx2sexta.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#sx2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#sx2").style.display = "none"
    });
}

function profsexta2(){
    db.collection("sextareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            prof2sexta.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#sx2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#sx2").style.display = "none"
    });
}


function entrarsexta2(){


    db.collection("sextareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#sx2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#sx2").style.display = "none"
    });

}









function materiasexta3(){
    db.collection("sextareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            materia3sexta.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#sx3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    
}


function horariopsexta3(){
    db.collection("sextareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            horariop3sexta.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#sx3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function horariossexta3(){
    db.collection("sextareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            horariosx3sexta.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#sx3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function profsexta3(){
    db.collection("sextareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            prof3sexta.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#sx3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function entrarsexta3(){


    db.collection("sextareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            
            document.querySelector("#sx3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}






function materiasexta4(){
    db.collection("sextareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            materia4sexta.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#sx4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    
}


function horariopsexta4(){
    db.collection("sextareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            horariop4sexta.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#sx4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function horariossexta4(){
    db.collection("sextareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            horariosx4sexta.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#sx4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function profsexta4(){
    db.collection("sextareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            prof4sexta.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#sx4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function entrarsexta4(){


    db.collection("sextareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#sx4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}


function excluirsexta1(){
    db.collection("sextareo").doc("1 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        alert("Erro ao Excluir esta Aula!", error )
    });
}

function excluirsexta2(){
    db.collection("sextareo").doc("2 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        alert("Erro ao Excluir esta Aula!", error )
    });
}

function excluirsexta3(){
    db.collection("sextareo").doc("3 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}
function excluirsexta4(){
    db.collection("sextareo").doc("4 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        alert("Erro ao Excluir esta Aula!", error )
    });
}








function sharesexta1(){
   


        db.collection("sextareo").doc("1 reo").get().then((doc) => {
            if (doc.exists) {
                
                location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
            } else {
                // doc.data() will be undefined in this case
                document.querySelector("#sx1").style.display = "none"
            }
        }).catch((error) => {
            document.querySelector("#sx1").style.display = "none"
        });
    
    
}


function sharesexta2(){
   


    db.collection("sextareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
        } else {
            // doc.data() will be undefined in this case
            
        }
    }).catch((error) => {
       
    });


}

function sharesexta3(){
   


    db.collection("sextareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
        } else {
            // doc.data() will be undefined in this case
            
        }
    }).catch((error) => {
       
    });


}



function sharesexta4(){
   


    db.collection("sextareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
        } else {
            // doc.data() will be undefined in this case
            
        }
    }).catch((error) => {
       
    });


}