const materia1segunda = document.querySelector("#materia1segunda")
const horariop1segunda =  document.querySelector("#horariop1segunda")
const horarios1segunda = document.querySelector("#horarios1segunda")
const prof1segunda =  document.querySelector("#prof1segunda")
const entrar1segunda = document.querySelector("#entrar1segunda")
const share1segunda =  document.querySelector("#share1segunda")


 

function materiasegunda1(){
    db.collection("segundareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            materia1segunda.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#s1").style.display = "none"
        }
    }).catch(() => {
        document.querySelector("#s1").style.display = "none"
    });

    
}


function horariopsegunda1(){
    db.collection("segundareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            horariop1segunda.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#s1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#s1").style.display = "none"
    });
}


function horariossegunda1(){
    db.collection("segundareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            horarios1segunda.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#s1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#s1").style.display = "none"
    });
}

function profsegunda1(){
    db.collection("segundareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            prof1segunda.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#s1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#s1").style.display = "none"
    });
}


function entrarsegunda1(){


    db.collection("segundareo").doc("1 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#s1").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#s1").style.display = "none"
    });

}











function materiasegunda2(){
    db.collection("segundareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            materia2segunda.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#s2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#s2").style.display = "none"
    });

    
}


function horariopsegunda2(){
    db.collection("segundareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            horariop2segunda.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#s2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#s2").style.display = "none"
    });
}


function horariossegunda2(){
    db.collection("segundareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            horarios2segunda.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#s2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#s2").style.display = "none"
    });
}

function profsegunda2(){
    db.collection("segundareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            prof2segunda.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#s2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#s2").style.display = "none"
    });
}


function entrarsegunda2(){


    db.collection("segundareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#s2").style.display = "none"
        }
    }).catch((error) => {
        document.querySelector("#s2").style.display = "none"
    });

}









function materiasegunda3(){
    db.collection("segundareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            materia3segunda.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#s3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    
}


function horariopsegunda3(){
    db.collection("segundareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            horariop3segunda.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#s3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function horariossegunda3(){
    db.collection("segundareo").doc("23").get().then((doc) => {
        if (doc.exists) {
            horarios3segunda.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#s3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function profsegunda3(){
    db.collection("segundareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            prof3segunda.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#s3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function entrarsegunda3(){


    db.collection("segundareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            
            document.querySelector("#s3").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}






function materiasegunda4(){
    db.collection("segundareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            materia4segunda.innerHTML = doc.data().materia
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#s4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    
}


function horariopsegunda4(){
    db.collection("segundareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            horariop4segunda.innerHTML = doc.data().horariop
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#s4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function horariossegunda4(){
    db.collection("segundareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            horarios4segunda.innerHTML = doc.data().horarios
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#s4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function profsegunda4(){
    db.collection("segundareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            prof4segunda.innerText = "Prof " + doc.data().prof
            
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#s4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


function entrarsegunda4(){


    db.collection("segundareo").doc("4 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = doc.data().link
        } else {
            // doc.data() will be undefined in this case
            document.querySelector("#s4").style.display = "none"
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}


function excluirsegunda1(){
    db.collection("segundareo").doc("1 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        alert("Erro ao Excluir esta Aula!", error )
    });
}

function excluirsegunda2(){
    db.collection("segundareo").doc("2 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        alert("Erro ao Excluir esta Aula!", error )
    });
}

function excluirsegunda3(){
    db.collection("segundareo").doc("3 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}
function excluirsegunda4(){
    db.collection("segundareo").doc("4 reo").delete().then(() => {
        alert("Aula de Excluida!" )
    }).catch((error) => {
        alert("Erro ao Excluir esta Aula!", error )
    });
}








function sharesegunda1(){
   


        db.collection("segundareo").doc("1 reo").get().then((doc) => {
            if (doc.exists) {
                
                location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
            } else {
                // doc.data() will be undefined in this case
                document.querySelector("#s1").style.display = "none"
            }
        }).catch((error) => {
            document.querySelector("#s1").style.display = "none"
        });
    
    
}


function sharesegunda2(){
   


    db.collection("segundareo").doc("2 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
        } else {
            // doc.data() will be undefined in this case
            
        }
    }).catch((error) => {
       
    });


}

function sharesegunda3(){
   


    db.collection("segundareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
        } else {
            // doc.data() will be undefined in this case
            
        }
    }).catch((error) => {
       
    });


}



function sharesegunda4(){
   


    db.collection("segundareo").doc("3 reo").get().then((doc) => {
        if (doc.exists) {
            
            location.href = 'https://api.whatsapp.com/send?text=' +  doc.data().link
        } else {
            // doc.data() will be undefined in this case
            
        }
    }).catch((error) => {
       
    });


}