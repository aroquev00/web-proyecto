
let numeroAlergias = 1;
let numeroPadecimientos = 1;
let numeroMedicamentos = 1;
let numeroSeguros = 1;

const btnOtraAlergia = document.getElementById("btnOtraAlergia");
btnOtraAlergia.addEventListener("click", agregarOtraAlergia);

const btnOtroPadecimiento = document.getElementById("btnOtroPadecimiento");
btnOtroPadecimiento.addEventListener("click", agregarOtroPadecimiento);

const btnOtroMedicamento = document.getElementById("btnOtroMedicamento");
btnOtroMedicamento.addEventListener("click", agregarOtroMedicamento);

const btnOtroSeguro = document.getElementById("btnOtroSeguro");
btnOtroSeguro.addEventListener("click", agregarOtroSeguro);

function agregarOtraAlergia() {
  numeroAlergias++;

  const divAlergias = document.getElementById("alergias");

  const newLabelAlergia = document.createElement("label");
  newLabelAlergia.setAttribute("for", "alergia" + numeroAlergias);
  newLabelAlergia.innerText = "Alergia " + numeroAlergias;
  const newFieldAlergia = document.createElement("input");
  newFieldAlergia.setAttribute("type", "text");
  newFieldAlergia.id = "alergia" + numeroAlergias;
  newFieldAlergia.setAttribute("name", "alergia" + numeroAlergias);

  divAlergias.appendChild(newLabelAlergia);
  divAlergias.append(" ");
  divAlergias.appendChild(newFieldAlergia);
  divAlergias.appendChild(document.createElement("br"));
}

function agregarOtroPadecimiento() {
  numeroPadecimientos++;

  const divPadecimientos = document.getElementById("padecimientos");

  const newLabelPadecimiento = document.createElement("label");
  newLabelPadecimiento.setAttribute("for", "padecimiento" + numeroPadecimientos);
  newLabelPadecimiento.innerText = "Padecimiento " + numeroPadecimientos;
  const newFieldPadecimiento = document.createElement("input");
  newFieldPadecimiento.setAttribute("type", "text");
  newFieldPadecimiento.id = "padecimiento" + numeroPadecimientos;
  newFieldPadecimiento.setAttribute("name", "padecimiento" + numeroPadecimientos);

  divPadecimientos.appendChild(newLabelPadecimiento);
  divPadecimientos.append(" ");
  divPadecimientos.appendChild(newFieldPadecimiento);
  divPadecimientos.appendChild(document.createElement("br"));
}

function agregarOtroMedicamento() {
  numeroMedicamentos++;

  const divMedicamentos = document.getElementById("medicamentos");

  const newDivMedicamento = document.createElement("div")
  newDivMedicamento.id = "medicamento" + numeroMedicamentos;

  const newDivTitulo = document.createElement("div");
  newDivTitulo.id = "tituloMedicamento" + numeroMedicamentos;
  newDivTitulo.innerText = "Medicamento " + numeroMedicamentos;

  const newLabelNombre = document.createElement("label");
  newLabelNombre.setAttribute("for", "nombreMedicamento" + numeroMedicamentos);
  newLabelNombre.innerText = "Nombre del medicamento";
  const newFieldNombre = document.createElement("input");
  newFieldNombre.setAttribute("type", "text");
  newFieldNombre.id = "nombreMedicamento" + numeroMedicamentos;
  newFieldNombre.setAttribute("name", "nombreMedicamento" + numeroMedicamentos);

  const newLabelDosis = document.createElement("label");
  newLabelDosis.setAttribute("for", "dosisMedicamento" + numeroMedicamentos);
  newLabelDosis.innerText = "Dosis";
  const newFieldDosis = document.createElement("input");
  newFieldDosis.setAttribute("type", "text");
  newFieldDosis.id = "dosisMedicamento" + numeroMedicamentos;
  newFieldDosis.setAttribute("name", "dosisMedicamento" + numeroMedicamentos);

  const newLabelIndicaciones = document.createElement("label");
  newLabelIndicaciones.setAttribute("for", "indicacionesMedicamento" + numeroMedicamentos);
  newLabelIndicaciones.innerText = "Indicaciones";
  const newFieldIndicaciones = document.createElement("textarea");
  newFieldIndicaciones.id = "indicacionesMedicamento" + numeroMedicamentos;
  newFieldIndicaciones.setAttribute("name", "indicacionesMedicamento" + numeroMedicamentos);
  newFieldIndicaciones.setAttribute("rows", "3");
  newFieldIndicaciones.setAttribute("cols", "40");

  newDivMedicamento.appendChild(newDivTitulo);
  newDivMedicamento.appendChild(newLabelNombre);
  newDivMedicamento.append(" ");
  newDivMedicamento.appendChild(newFieldNombre);
  newDivMedicamento.appendChild(document.createElement("br"));
  newDivMedicamento.appendChild(newLabelDosis);
  newDivMedicamento.append(" ");
  newDivMedicamento.appendChild(newFieldDosis);
  newDivMedicamento.appendChild(document.createElement("br"));
  newDivMedicamento.appendChild(newLabelIndicaciones);
  newDivMedicamento.appendChild(document.createElement("br"));
  newDivMedicamento.appendChild(newFieldIndicaciones);
  newDivMedicamento.appendChild(document.createElement("br"));
  newDivMedicamento.appendChild(document.createElement("br"));

  divMedicamentos.appendChild(newDivMedicamento);
}

function agregarOtroSeguro() {
  numeroSeguros++;

  const divSeguros = document.getElementById("seguros");

  const newDivSeguro = document.createElement("div")
  newDivSeguro.id = "seguro" + numeroSeguros;

  const newDivTitulo = document.createElement("div");
  newDivTitulo.id = "tituloSeguro" + numeroSeguros;
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
  newDivSeguro.append(" ");
  newDivSeguro.appendChild(newFieldComp);
  newDivSeguro.appendChild(document.createElement("br"));
  newDivSeguro.appendChild(newLabelPoliza);
  newDivSeguro.append(" ");
  newDivSeguro.appendChild(newFieldPoliza);
  newDivSeguro.appendChild(document.createElement("br"));
  newDivSeguro.appendChild(newLabelFechaVencimiento);
  newDivSeguro.append(" ");
  newDivSeguro.appendChild(newFieldFechaVencimiento);
  newDivSeguro.appendChild(document.createElement("br"));
  newDivSeguro.appendChild(document.createElement("br"));

  divSeguros.appendChild(newDivSeguro)
}
