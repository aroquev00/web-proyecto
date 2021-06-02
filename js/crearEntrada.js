let numeroDrs = 0;


$(document).ready(function(){

    $("#btnOtroDr").on("click", crearNuevoDr);

});

function crearNuevoDr(){
    numeroDrs++;
    const divDrs = document.getElementById("drInters");

    console.log("gola");
    const newLabelDrs = document.createElement("label");
    newLabelDrs.setAttribute("for", "drInter" + numeroDrs);
    newLabelDrs.innerText = "Doctor Interconsultante #" + numeroDrs;
    const newFieldDr = document.createElement("input");
    newFieldDr.setAttribute("type", "text");
    newFieldDr.id = "drInter" + numeroDrs;
    newFieldDr.setAttribute("name", "drInter[]");

    divDrs.appendChild(newLabelDrs);
    divDrs.append(" ");
    divDrs.appendChild(newFieldDr);
    divDrs.appendChild(document.createElement("br"));

    document.getElementById("cant").value = numeroDrs;

}



