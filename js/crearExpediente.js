
let numeroSeguros = 1;

const btnOtroSeguro = document.getElementById("btnOtroSeguro");

btnOtroSeguro.addEventListener("click", agregarOtroSeguro);

function agregarOtroSeguro() {
  numeroSeguros++;

  const divSeguros = document.getElementById("seguros");

  const newDivSeguro = document.createElement("div")
  newDivSeguro.id = "seguro" + numeroSeguros;

  const newDivTitulo = document.createElement("div");
  newDivTitulo.innerText = "Seguro " + numeroSeguros;

  const newLabelComp = document.createElement("label");
  newLabelComp.setAttribute("for", "compSeguro" + numeroSeguros);
  newLabelComp.innerText = "Compañía aseguradora";
  const newFieldComp = document.createElement("input");
  newFieldComp.setAttribute("type", "text");
  newFieldComp.id = "compSeguro" + numeroSeguros;
  newFieldComp.setAttribute("name", "compSeguro" + numeroSeguros);

  const newLabelPoliza = document.createElement("label");
  newLabelPoliza.setAttribute("for", "polizaSeguro" + numeroSeguros);
  newLabelPoliza.innerText = "Número de póliza";
  const newFieldPoliza = document.createElement("input");
  newFieldPoliza.setAttribute("type", "text");
  newFieldPoliza.id = "polizaSeguro" + numeroSeguros;
  newFieldPoliza.setAttribute("name", "polizaSeguro" + numeroSeguros);

  const newLabelFechaVencimiento = document.createElement("label");
  newLabelFechaVencimiento.setAttribute("for", "fechaVencimientoSeguro" + numeroSeguros);
  newLabelFechaVencimiento.innerText = "Fecha de vencimiento";
  const newFieldFechaVencimiento = document.createElement("input");
  newFieldFechaVencimiento.setAttribute("type", "date");
  newFieldFechaVencimiento.id = "fechaVencimientoSeguro" + numeroSeguros;
  newFieldFechaVencimiento.setAttribute("name", "fechaVencimientoSeguro" + numeroSeguros);

  newDivSeguro.appendChild(newDivTitulo);
  newDivSeguro.appendChild(newLabelComp);
  newDivSeguro.appendChild(newFieldComp);
  newDivSeguro.appendChild(document.createElement("br"));
  newDivSeguro.appendChild(newLabelPoliza);
  newDivSeguro.appendChild(newFieldPoliza);
  newDivSeguro.appendChild(document.createElement("br"));
  newDivSeguro.appendChild(newLabelFechaVencimiento);
  newDivSeguro.appendChild(newFieldFechaVencimiento);
  newDivSeguro.appendChild(document.createElement("br"));
  newDivSeguro.appendChild(document.createElement("br"));

  divSeguros.appendChild(newDivSeguro)
}



