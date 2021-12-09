const materia1quarta = document.querySelector("#materia1quarta")
const horariop1quarta =  document.querySelector("#horariop1quarta")
const horarioq1quarta = document.querySelector("#horarioq1quarta")
const prof1quarta =  document.querySelector("#prof1quarta")
const entrar1quarta = document.querySelector("#entrar1quarta")
const share1quarta =  document.querySelector("#share1quarta")


 

function materiaquarta1(){
    db.collection("quartareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            materia1quarta.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#q1").style.display = "none"
        }
    }).catch(() => {
        document.querySelector("#q1").style.display = "none"
    });

    
}


function horariopquarta1(){
    db.collection("quartareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            horariop1quarta.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#q1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#q1").style.display = "none"
    });
}


function horariosquarta1(){
    db.collection("quartareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            horarioq1quarta.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#q1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#q1").style.display = "none"
    });
}

function profquarta1(){
    db.collection("quartareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            prof1quarta.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#q1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#q1").style.display = "none"
    });
}


function entrarquarta1(){


    db.collection("quartareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#q1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#q1").style.display = "none"
    });

}











function materiaquarta2(){
    db.collection("quartareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            materia2quarta.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#q2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#q2").style.display = "none"
    });

    
}


function horariopquarta2(){
    db.collection("quartareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            horariop2quarta.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#q2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#q2").style.display = "none"
    });
}


function horariosquarta2(){
    db.collection("quartareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            horarioq2quarta.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#q2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#q2").style.display = "none"
    });
}

function profquarta2(){
    db.collection("quartareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            prof2quarta.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#q2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#q2").style.display = "none"
    });
}


function entrarquarta2(){


    db.collection("quartareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#q2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#q2").style.display = "none"
    });

}









function materiaquarta3(){
    db.collection("quartareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            materia3quarta.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#q3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    
}


function horariopquarta3(){
    db.collection("quartareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            horariop3quarta.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#q3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function horariosquarta3(){
    db.collection("quartareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            horarioq3quarta.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#q3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function profquarta3(){
    db.collection("quartareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            prof3quarta.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#q3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function entrarquarta3(){


    db.collection("quartareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            
            document.querySelector("#q3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}






function materiaquarta4(){
    db.collection("quartareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            materia4quarta.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#q4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    
}


function horariopquarta4(){
    db.collection("quartareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            horariop4quarta.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#q4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function horariosquarta4(){
    db.collection("quartareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            horarioq4quarta.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#q4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function profquarta4(){
    db.collection("quartareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            prof4quarta.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#q4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function entrarquarta4(){


    db.collection("quartareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#q4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}


function excluirquarta1(){
    db.collection("quartareo").doc("1 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        alert("Erro ao Excluir esta Aula!", error )
    });
}

function excluirquarta2(){
    db.collection("quartareo").doc("2 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        alert("Erro ao Excluir esta Aula!", error )
    });
}

function excluirquarta3(){
    db.collection("quartareo").doc("3 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}
function excluirquarta4(){
    db.collection("quartareo").doc("4 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        alert("Erro ao Excluir esta Aula!", error )
    });
}








function sharequarta1(){
   


        db.collection("quartareo").doc("1 reo").get().then((doc) => {
            if (doc.exists) {
                
                location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
            } else {
                // doc.data() will be undefined in this case
                document.querySelector("#q1").style.display = "none"
            }
        }).catch((error) => {
            document.querySelector("#q1").style.display = "none"
        });
    
    
}


function sharequarta2(){
   


    db.collection("quartareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
        } else {
            // doc.data() will be undefined in this case
            
        }
    }).catch((error) => {
       
    });


}

function sharequarta3(){
   


    db.collection("quartareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
        } else {
            // doc.data() will be undefined in this case
            
        }
    }).catch((error) => {
       
    });


}



function sharequarta4(){
   


    db.collection("quartareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
        } else {
            // doc.data() will be undefined in this case
            
        }
    }).catch((error) => {
       
    });


}