// afficher le formuler de selection de l'ue ou de l'etudiant a modifier

function printFormSelectUe(){
    
        document.getElementById("check-ue").style.display = "grid";
        document.getElementById("form-recap").style.display = "none";
        // document.getElementById("bouton-dem").innerText = "New seance";
        document.getElementById("block-main1").style.height = "800px";
        // document.getElementsByName("main")[0].style.height = "800px";bouton-dem-blck
        document.getElementById("circle-load2").style.backgroundColor = "rgb(83, 235, 119)";
        document.getElementById("line-load1").style.backgroundColor = "rgb(83, 235, 119)";
        document.getElementById("bouton-dem-blck").style.display = "none";
    }

    function printFormModif(){

        
        document.getElementById("form-check-ue").style.display = "none";
        document.getElementById("form-modif").style.display = "block";
        document.getElementById("button-blck").style.display = "none";
        document.getElementById("circle-load3").style.backgroundColor = "rgb(83, 235, 119)";
        document.getElementById("line-load2").style.backgroundColor = "rgb(83, 235, 119)";
        
    }
    
    function printFormRecap(){

        document.getElementById("bouton-dem-blck").style.display = "block";
        document.getElementById("form-modif").style.display = "none";
        document.getElementById("form-recap").style.display = "block";
    } 


function maskForm(i){
    if(i == 1)
        document.getElementById("check-ue").style.display = "none";
    else if(i == 2)
        document.getElementById("form-modif").style.display = "none";

    
}


function test(){
    alert("ok");
}
