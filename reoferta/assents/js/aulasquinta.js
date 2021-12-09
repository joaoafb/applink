const materia1quinta = document.querySelector("#materia1quinta")
const horariop1quinta =  document.querySelector("#horariop1quinta")
const horarioqi1quinta = document.querySelector("#horarioqi1quinta")
const prof1quinta =  document.querySelector("#prof1quinta")
const entrar1quinta = document.querySelector("#entrar1quinta")
const share1quinta =  document.querySelector("#share1quinta")


 

function materiaquinta1(){
    db.collection("quintareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            materia1quinta.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#qi1").style.display = "none"
        }
    }).catch(() => {
        document.querySelector("#qi1").style.display = "none"
    });

    
}


function horariopquinta1(){
    db.collection("quintareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            horariop1quinta.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#qi1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#qi1").style.display = "none"
    });
}


function horariosquinta1(){
    db.collection("quintareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            horarioqi1quinta.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#qi1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#qi1").style.display = "none"
    });
}

function profquinta1(){
    db.collection("quintareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            prof1quinta.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#qi1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#qi1").style.display = "none"
    });
}


function entrarquinta1(){


    db.collection("quintareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#qi1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#qi1").style.display = "none"
    });

}











function materiaquinta2(){
    db.collection("quintareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            materia2quinta.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#qi2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#qi2").style.display = "none"
    });

    
}


function horariopquinta2(){
    db.collection("quintareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            horariop2quinta.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#qi2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#qi2").style.display = "none"
    });
}


function horariosquinta2(){
    db.collection("quintareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            horarioqi2quinta.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#qi2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#qi2").style.display = "none"
    });
}

function profquinta2(){
    db.collection("quintareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            prof2quinta.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#qi2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#qi2").style.display = "none"
    });
}


function entrarquinta2(){


    db.collection("quintareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#qi2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#qi2").style.display = "none"
    });

}









function materiaquinta3(){
    db.collection("quintareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            materia3quinta.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#qi3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    
}


function horariopquinta3(){
    db.collection("quintareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            horariop3quinta.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#qi3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function horariosquinta3(){
    db.collection("quintareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            horarioqi3quinta.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#qi3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function profquinta3(){
    db.collection("quintareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            prof3quinta.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#qi3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function entrarquinta3(){


    db.collection("quintareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            
            document.querySelector("#qi3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}






function materiaquinta4(){
    db.collection("quintareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            materia4quinta.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#qi4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    
}


function horariopquinta4(){
    db.collection("quintareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            horariop4quinta.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#qi4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function horariosquinta4(){
    db.collection("quintareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            horarioqi4quinta.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#qi4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function profquinta4(){
    db.collection("quintareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            prof4quinta.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#qi4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function entrarquinta4(){


    db.collection("quintareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#qi4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}


function excluirquinta1(){
    db.collection("quintareo").doc("1 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        alert("Erro ao Excluir esta Aula!", error )
    });
}

function excluirquinta2(){
    db.collection("quintareo").doc("2 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        alert("Erro ao Excluir esta Aula!", error )
    });
}

function excluirquinta3(){
    db.collection("quintareo").doc("3 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}
function excluirquinta4(){
    db.collection("quintareo").doc("4 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        alert("Erro ao Excluir esta Aula!", error )
    });
}








function sharequinta1(){
   


        db.collection("quintareo").doc("1 reo").get().then((doc) => {
            if (doc.exists) {
                
                location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
            } else {
                // doc.data() will be undefined in this case
                document.querySelector("#qi1").style.display = "none"
            }
        }).catch((error) => {
            document.querySelector("#qi1").style.display = "none"
        });
    
    
}


function sharequinta2(){
   


    db.collection("quintareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
        } else {
            // doc.data() will be undefined in this case
            
        }
    }).catch((error) => {
       
    });


}

function sharequinta3(){
   


    db.collection("quintareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
        } else {
            // doc.data() will be undefined in this case
            
        }
    }).catch((error) => {
       
    });


}



function sharequinta4(){
   


    db.collection("quintareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
        } else {
            // doc.data() will be undefined in this case
            
        }
    }).catch((error) => {
       
    });


}