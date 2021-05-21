let numeroDrs = 1;


$(document).ready(function(){

    $("#btnOtroDr").on("click", crearNuevoDr);
    $("#guardarConsulta").on("click",guardarConsulta);

});

function crearNuevoDr(){
    numeroDrs++;
    const divDrs = document.getElementById("drInters");

    console.log("gola");
    const newLabelDrs = document.createElement("label");
    newLabelDrs.setAttribute("for", "drInter" + numeroDrs);
    newLabelDrs.innerText = "Doctor " + numeroDrs;
    const newFieldDr = document.createElement("input");
    newFieldDr.setAttribute("type", "text");
    newFieldDr.id = "drInter" + numeroDrs;
    newFieldDr.setAttribute("name", "drInter" + numeroDrs);

    divDrs.appendChild(newLabelDrs);
    divDrs.append(" ");
    divDrs.appendChild(newFieldDr);
    divDrs.appendChild(document.createElement("br"));
}

function guardarConsulta(){

    var fecha       = $("#fecha").val();
	var razon       = $("#razon").val();
	var peso        = $("#peso").val();
    var altura      = $("#altura").val();
    var presion     = $("#presion").val();
    var comentarios = $("#comentarios").val();

		var ruta = "Action=Consulta&" +"fecha="+fecha+"&razon="+razon+"&peso="+peso+"&altura="+altura+"&presion="+presion+"&comentarios="+comentarios;
		console.log(ruta);
		$.ajax({
			url: '../back/crearEntrada.php',
			type: 'POST',
			data: ruta,
		})
		.done(function(res){
			$('#respuestaReg').html(res);
		})
		.fail(function(){
			console.log("error");
		})
		.always(function(){
			console.log("complete");
		});

}


