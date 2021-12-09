const materia1terca = document.querySelector("#materia1terca")
const horariop1terca =  document.querySelector("#horariop1terca")
const horariot1terca = document.querySelector("#horariot1terca")
const prof1terca =  document.querySelector("#prof1terca")
const entrar1terca = document.querySelector("#entrar1terca")
const share1terca =  document.querySelector("#share1terca")


 

function materiaterca1(){
    db.collection("tercareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            materia1terca.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#t1").style.display = "none"
        }
    }).catch(() => {
        document.querySelector("#t1").style.display = "none"
    });

    
}


function horariopterca1(){
    db.collection("tercareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            horariop1terca.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#t1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#t1").style.display = "none"
    });
}


function horariosterca1(){
    db.collection("tercareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            horariot1terca.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#t1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#t1").style.display = "none"
    });
}

function profterca1(){
    db.collection("tercareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            prof1terca.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#t1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#t1").style.display = "none"
    });
}


function entrarterca1(){


    db.collection("tercareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#t1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#t1").style.display = "none"
    });

}











function materiaterca2(){
    db.collection("tercareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            materia2terca.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#t2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#t2").style.display = "none"
    });

    
}


function horariopterca2(){
    db.collection("tercareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            horariop2terca.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#t2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#t2").style.display = "none"
    });
}


function horariosterca2(){
    db.collection("tercareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            horariot2terca.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#t2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#t2").style.display = "none"
    });
}

function profterca2(){
    db.collection("tercareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            prof2terca.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#t2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#t2").style.display = "none"
    });
}


function entrarterca2(){


    db.collection("tercareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#t2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#t2").style.display = "none"
    });

}









function materiaterca3(){
    db.collection("tercareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            materia3terca.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#t3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    
}


function horariopterca3(){
    db.collection("tercareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            horariop3terca.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#t3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function horariosterca3(){
    db.collection("tercareo").doc("23").get().then((doc) => {
        if (doc.exists) {
            horariot3terca.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#t3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function profterca3(){
    db.collection("tercareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            prof3terca.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#t3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function entrarterca3(){


    db.collection("tercareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            
            document.querySelector("#t3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}






function materiaterca4(){
    db.collection("tercareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            materia4terca.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#t4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    
}


function horariopterca4(){
    db.collection("tercareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            horariop4terca.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#t4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function horariosterca4(){
    db.collection("tercareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            horariot4terca.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#t4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function profterca4(){
    db.collection("tercareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            prof4terca.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#t4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function entrarterca4(){


    db.collection("tercareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#t4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}


function excluirterca1(){
    db.collection("tercareo").doc("1 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        alert("Erro ao Excluir esta Aula!", error )
    });
}

function excluirterca2(){
    db.collection("tercareo").doc("2 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        alert("Erro ao Excluir esta Aula!", error )
    });
}

function excluirterca3(){
    db.collection("tercareo").doc("3 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}
function excluirterca4(){
    db.collection("tercareo").doc("4 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        alert("Erro ao Excluir esta Aula!", error )
    });
}








function shareterca1(){
   


        db.collection("tercareo").doc("1 reo").get().then((doc) => {
            if (doc.exists) {
                
                location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
            } else {
                // doc.data() will be undefined in this case
                document.querySelector("#t1").style.display = "none"
            }
        }).catch((error) => {
            document.querySelector("#t1").style.display = "none"
        });
    
    
}


function shareterca2(){
   


    db.collection("tercareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
        } else {
            // doc.data() will be undefined in this case
            
        }
    }).catch((error) => {
       
    });


}

function shareterca3(){
   


    db.collection("tercareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
        } else {
            // doc.data() will be undefined in this case
            
        }
    }).catch((error) => {
       
    });


}



function shareterca4(){
   


    db.collection("tercareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
        } else {
            // doc.data() will be undefined in this case
            
        }
    }).catch((error) => {
       
    });


}