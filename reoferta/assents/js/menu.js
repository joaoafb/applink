function config(){
    
    document.getElementById("divlogin").style.display = "none"
    document.getElementById("divreoferta").style.display = "none"
    document.getElementById("box2").style.display = "none"
    document.getElementById("box3").style.display = "none"
    document.getElementById("box1").style.display = "none"
    document.getElementById("divhome").style.display = "none"
    document.getElementById("divconfig").style.display = "block"
    document.getElementById("divbemvindo").style.display = "none"
    
}


function home(){
    document.getElementById("divlogin").style.display = "none"
    document.getElementById("divreoferta").style.display = "none"
    document.getElementById("box2").style.display = "none"
    document.getElementById("box3").style.display = "none"
    document.getElementById("box1").style.display = "none"
    document.getElementById("divhome").style.display = "block"
    document.getElementById("divconfig").style.display = "none"
    document.getElementById("divbemvindo").style.display = "none"
}


function reoferta(){
    document.getElementById("divlogin").style.display = "none"
    document.getElementById("divreoferta").style.display = "block"
    document.getElementById("box2").style.display = "none"
    document.getElementById("box3").style.display = "none"
    document.getElementById("box1").style.display = "none"
    document.getElementById("divhome").style.display = "none"
    document.getElementById("divconfig").style.display = "none"
    document.getElementById("divbemvindo").style.display = "none"
}


function login(){
    document.getElementById("divlogin").style.display = "block"
    document.getElementById("divreoferta").style.display = "none"
    document.getElementById("box2").style.display = "none"
    document.getElementById("box3").style.display = "none"
    document.getElementById("box1").style.display = "none"
    document.getElementById("divhome").style.display = "none"
    document.getElementById("divconfig").style.display = "none"
    document.getElementById("divbemvindo").style.display = "none"

    if(localStorage.getItem("adm") == "sim"){
        location.href = "../../adm/index.html"
    }
}



function aulassegunda(){
    document.getElementById("divmenu").style.display = "none"
    document.getElementById("divhome").style.display = "none"
    document.getElementById("divsegunda").style.display = "block"
    materiasegunda1();
    horariopsegunda1();
    horariossegunda1();
    profsegunda1();

    materiasegunda2();
    horariopsegunda2();
    horariossegunda2();
    profsegunda2();

    materiasegunda3();
    horariopsegunda3();
    horariossegunda3();
    profsegunda3();

    materiasegunda4();
    horariopsegunda4();
    horariossegunda4();
    profsegunda4();

    if(localStorage.getItem("adm") == "nao"){
        document.querySelector("#btnexcluir").style.display = "none"
    }
    


   
    
    
     
}


function aulasterca(){
    document.getElementById("divmenu").style.display = "none"
    document.getElementById("divhome").style.display = "none"
    document.querySelector("#divterca").style.display = "block"
    materiaterca1();
    horariopterca1();
    horariosterca1();
    profterca1();

    materiaterca2();
    horariopterca2();
    horariosterca2();
    profterca2();

    materiaterca3();
    horariopterca3();
    horariosterca3();
    profterca3();

    materiaterca4();
    horariopterca4();
    horariosterca4();
    profterca4();

    if(localStorage.getItem("adm") == "nao"){
        document.querySelector("#btnexcluir").style.display = "none"
    }
    


   
    
    
     
}


function back(){
    document.getElementById("divhome").style.display = "block"
    document.getElementById("divmenu").style.display = "block"
    document.getElementById("divsegunda").style.display = "none"
    document.getElementById("divterca").style.display = "none"
    document.getElementById("divquarta").style.display = "none"
    document.getElementById("divquinta").style.display = "none"
    document.getElementById("divsexta").style.display = "none"
}

function aulasquarta(){
    document.getElementById("divmenu").style.display = "none"
    document.getElementById("divhome").style.display = "none"
    document.querySelector("#divquarta").style.display = "block"
    materiaquarta1();
    horariopquarta1();
    horariosquarta1();
    profquarta1();

    materiaquarta2();
    horariopquarta2();
    horariosquarta2();
    profquarta2();

    materiaquarta3();
    horariopquarta3();
    horariosquarta3();
    profquarta3();

    materiaquarta4();
    horariopquarta4();
    horariosquarta4();
    profquarta4();

    if(localStorage.getItem("adm") == "nao"){
        document.querySelector("#btnexcluir").style.display = "none"
    }
    


   
    
    
     
}



function aulasquinta(){
    document.getElementById("divmenu").style.display = "none"
    document.getElementById("divhome").style.display = "none"
    document.querySelector("#divquinta").style.display = "block"
    materiaquinta1();
    horariopquinta1();
    horariosquinta1();
    profquinta1();

    materiaquinta2();
    horariopquinta2();
    horariosquinta2();
    profquinta2();

    materiaquinta3();
    horariopquinta3();
    horariosquinta3();
    profquinta3();

    materiaquinta4();
    horariopquinta4();
    horariosquinta4();
    profquinta4();

    if(localStorage.getItem("adm") == "nao"){
        document.querySelector("#btnexcluir").style.display = "none"
    }
    


   
    
    
     
}


function aulassexta(){
    document.getElementById("divmenu").style.display = "none"
    document.getElementById("divhome").style.display = "none"
    document.querySelector("#divsexta").style.display = "block"
    materiasexta1();
    horariopsexta1();
    horariossexta1();
    profsexta1();

    materiasexta2();
    horariopsexta2();
    horariossexta2();
    profsexta2();

    materiasexta3();
    horariopsexta3();
    horariossexta3();
    profsexta3();

    materiasexta4();
    horariopsexta4();
    horariossexta4();
    profsexta4();

    if(localStorage.getItem("adm") == "nao"){
        document.querySelector("#btnexcluir").style.display = "none"
    }
    


   
    
    
     
}

