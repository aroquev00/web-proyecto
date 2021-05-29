
let numeroAlergias = 0;
let numeroPadecimientos = 0;
let numeroMedicamentos = 0;
let numeroSeguros = 0;

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

  const newDivAlergia = document.createElement('div');
  newDivAlergia.id = 'divAlergia' + numeroAlergias;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add('btn-submit');
  deleteButton.innerText = '-';
  deleteButton.onclick = () => {
    newDivAlergia.remove();
  }

  const labelAlergiaText = document.createElement('span');
  labelAlergiaText.innerText = "Alergia " + numeroAlergias;

  const newLabelAlergia = document.createElement("label");
  newLabelAlergia.setAttribute("for", "alergia" + numeroAlergias);
  newLabelAlergia.appendChild(deleteButton);
  newLabelAlergia.appendChild(labelAlergiaText);
  const newFieldAlergia = document.createElement("input");
  newFieldAlergia.setAttribute("type", "text");
  newFieldAlergia.id = "alergia" + numeroAlergias;
  newFieldAlergia.setAttribute("name", "alergia" + numeroAlergias);

  newDivAlergia.appendChild(newLabelAlergia);
  newDivAlergia.append(" ");
  newDivAlergia.appendChild(newFieldAlergia);
  newDivAlergia.appendChild(document.createElement("br"));

  divAlergias.appendChild(newDivAlergia);
}

function agregarOtroPadecimiento() {
  numeroPadecimientos++;
  
  const divPadecimientos = document.getElementById("padecimientos");

  const newDivPadecimiento = document.createElement('div');
  newDivPadecimiento.id = 'divPadecimiento' + numeroPadecimientos;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add('btn-submit');
  deleteButton.innerText = '-';
  deleteButton.onclick = () => {
    newDivPadecimiento.remove();
  }

  const labelPadecimientoText = document.createElement('span');
  labelPadecimientoText.innerText = "Padecimiento " + numeroPadecimientos;

  const newLabelPadecimiento = document.createElement("label");
  newLabelPadecimiento.setAttribute("for", "padecimiento" + numeroPadecimientos);
  newLabelPadecimiento.appendChild(deleteButton);
  newLabelPadecimiento.appendChild(labelPadecimientoText);
  const newFieldPadecimiento = document.createElement("input");
  newFieldPadecimiento.setAttribute("type", "text");
  newFieldPadecimiento.id = "padecimiento" + numeroPadecimientos;
  newFieldPadecimiento.setAttribute("name", "padecimiento" + numeroPadecimientos);

  newDivPadecimiento.appendChild(newLabelPadecimiento);
  newDivPadecimiento.append(" ");
  newDivPadecimiento.appendChild(newFieldPadecimiento);
  newDivPadecimiento.appendChild(document.createElement("br"));

  divPadecimientos.appendChild(newDivPadecimiento);
}

function agregarOtroMedicamento() {
  numeroMedicamentos++;

  const divMedicamentos = document.getElementById("medicamentos");

  const newDivMedicamento = document.createElement("div")
  newDivMedicamento.id = "medicamento" + numeroMedicamentos;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add('btn-submit');
  deleteButton.innerText = '-';
  deleteButton.onclick = () => {
    newDivMedicamento.remove();
  }

  const divTitle = document.createElement('span');
  divTitle.innerText = "Medicamento " + numeroMedicamentos;

  const newDivTitulo = document.createElement("div");
  newDivTitulo.id = "tituloMedicamento" + numeroMedicamentos;
  newDivTitulo.appendChild(deleteButton);  
  newDivTitulo.appendChild(divTitle);


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

  const deleteButton = document.createElement("button");
  deleteButton.classList.add('btn-submit');
  deleteButton.innerText = '-';
  deleteButton.onclick = () => {
    newDivSeguro.remove();
  }

  const divTitle = document.createElement('span');
  divTitle.innerText = "Seguro " + numeroSeguros;

  const newDivTitulo = document.createElement("div");
  newDivTitulo.id = "tituloSeguro" + numeroSeguros;
  newDivTitulo.appendChild(deleteButton);
  newDivTitulo.appendChild(divTitle);

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


$(document).ready(function() {
  document.getElementById('result').style.display = "none";

  $("#erase").click(function() {
    resetErrorMessages();
  });

  $("form").submit(function(event) {
    
    // $("#submit").click( function () {
      resetErrorMessages();
    //event.preventDefault();
    
    var formData = {
      primerNombre: $("#primerNombre").val(),
      apellido: $("#apellido").val(),
      sexo: $("#sexo").val(),
      dob: $("#dob").val(),
      curp: $("#curp").val(),
      nss: $("#nss").val(),
      password: $("#password").val(),
      telefono: $("#telefono").val(),
      email: $("#email").val(),
      domicilio: $("#domicilio").val(),
      curpPadre: $("#curpPadre").val(),
      curpMadre: $("#curpMadre").val(),
      tipoSangre: $("#tipoSangre").val(),
    }

    for (let i = 1; i <= numeroAlergias; i++) {
      formData[`alergia${i}`]= $(`#alergia${i}`).val();
    }

    for (let i = 1; i <= numeroPadecimientos; i++) {
      formData[`padecimiento${i}`]= $(`#padecimiento${i}`).val();
    }

    for (let i = 1; i <= numeroMedicamentos; i++) {
      formData[`nombreMedicamento${i}`]= $(`#nombreMedicamento${i}`).val();
      formData[`dosisMedicamento${i}`]= $(`#dosisMedicamento${i}`).val();
      formData[`indicacionesMedicamento${i}`]= $(`#indicacionesMedicamento${i}`).val();
    }

    for (let i = 1; i <= numeroSeguros; i++) {
      formData[`compSeguro${i}`]= $(`#compSeguro${i}`).val();
      formData[`polizaSeguro${i}`]= $(`#polizaSeguro${i}`).val();
      formData[`fechaVencimientoSeguro${i}`]= $(`#fechaVencimientoSeguro${i}`).val();
    }
    // console.log("Xd");
     console.log(formData);

    $.ajax({
      type: "POST",
      url: "back/crearExpediente.php",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function(data) {
      console.log(data);
      if (!data.success) {
        const errorMessageSpan = document.createElement("span");
        errorMessageSpan.id = 'errorMessage';
        errorMessageSpan.innerText = data.error.description;

        document.getElementById(data.error.id).after(errorMessageSpan);
        errorMessageSpan.scrollIntoView();
      } else {
        // MARK SUCCESS
        document.getElementById('form').style.display = 'none';
        document.getElementById('result').style.display = "block";
      }

    });

   event.preventDefault();
  });

  $('#otroExpediente').click(function() {
    location.reload();
  });
});

function resetErrorMessages() {
  var element = document.getElementById('errorMessage');
  if (element != null) {
    element.remove();
  } 
}
