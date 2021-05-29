<?php

class Medicamento {
    public $nombreMedicamento;
    public $dosis;
    public $indicaciones;
}

class Seguro {
    public $compania;
    public $numeroPoliza;
    public $fechaVencimiento;
}

function returnError($idDivError, $errorDescription) {
    $error['id'] = $idDivError;
    $error['description'] = $errorDescription;
    $data['success'] = false;
    $data['error'] = $error;
    echo json_encode($data);
}

function getTipoSangre($tipoSangreString) {
    switch ($tipoSangreString) {
        case 'oNegativo':
            return 'O-';
        case 'oPositivo':
            return 'O+';
        case 'aNegativo':
            return 'A-';
        case 'aPositivo':
            return 'A+';
        case 'bNegativo':
            return 'B-';
        case 'bPositivo':
            return 'B+';
        case 'abNegativo':
            return 'AB-';
        case 'abPositivo':
            return 'AB+';
    }
}

if (isset($_POST)) {
    include('db/conexionDB.php');

    // Datos personales
    $primerNombre = $_POST['primerNombre'];
    $apellido = $_POST['apellido'];
    $nombre = "$primerNombre $apellido";
    $sexo = $_POST['sexo'] == 'masculino' ? 'M' : 'F';
    $dob = $_POST['dob'];
    $curp = $_POST['curp'];
    $nss = $_POST['nss'];

    // Datos de Contacto
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $domicilio = $_POST['domicilio'];

    // Datos Familiares
    $curpPadre = ($_POST['curpPadre'] != "") ? $_POST['curpPadre'] : "NULL";
    $curpMadre = ($_POST['curpMadre'] != "") ? $_POST['curpMadre'] : "NULL";

    // Datos Médicos
    $tipoSangre = getTipoSangre($_POST['tipoSangre']);

    // echo print_r($_POST);
    // echo "<br>";

    // Alergias
    $alergias = array_filter(
        $_POST,
        fn ($key) => str_contains($key, 'alergia'),
        ARRAY_FILTER_USE_KEY
    );

    foreach ($alergias as $key => $value) {
        if ($value == '') {
            returnError($key, "Campo de alergia vacío");
            return;
        }
    }
    //echo print_r($alergias);

    // Padecimientos
    $padecimientos = array_filter(
        $_POST,
        fn ($key) => str_contains($key, 'padecimiento'),
        ARRAY_FILTER_USE_KEY
    );

    foreach ($padecimientos as $key => $value) {
        if ($value == '') {
            returnError($key, "Campo de padecimiento vacío");
            return;
        }
    }
    //echo print_r($padecimientos);

    // Medicamentos
    $numMedicamentos = count(array_filter(
        $_POST,
        fn ($key) => str_contains($key, 'nombreMedicamento'),
        ARRAY_FILTER_USE_KEY
    ));

    $medicamentos = [];
    for ($i = 1; $i <= $numMedicamentos; $i++) {
        $nombreMedicamento = $_POST["nombreMedicamento$i"];
        if ($nombreMedicamento == '') {
            returnError("nombreMedicamento$i", "Nombre de medicamento vacío");
            return;
        }

        $dosis = $_POST["dosisMedicamento$i"];
        if ($dosis == '') {
            returnError("dosisMedicamento$i", "Dosis de medicamento vacía");
            return;
        }

        $indicaciones = $_POST["indicacionesMedicamento$i"];
        if ($indicaciones == '') {
            returnError("indicacionesMedicamento$i", "Indicaciones de medicamento vacías");
            return;
        }

        $medicamento = new Medicamento();
        $medicamento->nombreMedicamento = $nombreMedicamento;
        $medicamento->dosis = $dosis;
        $medicamento->indicaciones = $indicaciones;

        array_push($medicamentos, $medicamento);
    }
    //echo print_r($medicamentos);

    // Seguros Médicos
    $numSeguros = count(array_filter(
        $_POST,
        fn ($key) => str_contains($key, 'seguro'),
        ARRAY_FILTER_USE_KEY
    ));

    $seguros = [];
    for ($i = 1; $i <= $numSeguros; $i++) {
        $compania = $_POST["compSeguro$i"];
        if ($compania == '') {
            returnError("compSeguro$i", "Compañía de seguro vacías");
            return;
        }

        $numeroPoliza = $_POST["polizaSeguro$i"];
        if ($numeroPoliza == '') {
            returnError("polizaSeguro$i", "Póliza de seguro vacías");
            return;
        }

        $fechaVencimiento = $_POST["fechaVencimientoSeguro$i"];
        if ($fechaVencimiento == '') {
            returnError("fechaVencimientoSeguro$i", "Fecha de vencimiento de seguro vacías");
            return;
        }

        $seguro = new Seguro();
        $seguro->compania = $compania;
        $seguro->numeroPoliza = $numeroPoliza;
        $seguro->fechaVencimiento = $fechaVencimiento;

        array_push($seguros, $seguro);
    }
    //echo print_r($seguros);

// TODO
    // Primero checar si el paciente ya existe
    // $consultaPacienteExiste = "SELECT personaID FROM Pacientes p WHERE p.personaID = '$curp'";
    // $resultadoPacienteExiste = hacerQuery($consultaPacienteExiste);
    // if ($resultadoPacienteExiste->num_rows != 0) {
    //     echo "ERROR, paciente ya registrado";
    //     return;
    // }


    // // Paciente no existe, checar si ya existe en tabla de personas
    // $consultaPersonaExiste = "SELECT * FROM Personas p WHERE p.curp = '$curp'";
    // $resultadoPersonaExiste = hacerQuery($consultaPersonaExiste);
    // if ($resultadoPersonaExiste->num_rows == 0) {
    //     echo "Persona no existe";
    //     // Registrar a la persona
    //     $consultaRegistrarPersona = "INSERT INTO Personas VALUES ('$nombre', '$sexo', '$dob', '$curp')";
    //     $resultadoRegistrarPersona = hacerQuery($consultaRegistrarPersona);

    //     if ($resultadoRegistrarPersona == false) {
    //         echo "Error al registrar persona";
    //         return;
    //     }
    // } else {
    //     echo "Persona sí existe";
    //     // Sobre escribir los datos
    //     $consultaSobreescribirPersona = "UPDATE Personas p SET nombre = '$nombre', sexo = '$sexo', dob = '$dob' WHERE p.curp='$curp'";
    //     $resultadoSobreescribirPersona = hacerQuery($consultaSobreescribirPersona);

    //     if ($resultadoSobreescribirPersona == false) {
    //         echo "Error al sobreescribir persona";
    //         return;
    //     }
    // }

    // // Ahora insertar datos de paciente
    // $consultaRegistrarPaciente = "INSERT INTO Pacientes VALUES('$nss', '$email', '$domicilio', '$telefono', '$tipoSangre', '$curp', '$curpMadre', '$curpPadre')";
    // $resultadoRegistrarPaciente = hacerQuery($consultaRegistrarPaciente);

    // if ($resultadoRegistrarPaciente == false) {
    //     echo "Error al registrar paciente";
    //     return;
    // }

    // // Registrar alergias
    // foreach ($alergias as $alergia) {
    //     $consultaRegistrarAlergia = "INSERT INTO Alergias VALUES ('$nss', '$alergia')";
    //     $resultadoRegistrarAlergia = hacerQuery($consultaRegistrarAlergia);

    //     if ($resultadoRegistrarAlergia == false) {
    //         echo "Error al registrar alergia";
    //         return;
    //     }
    // }

    // // Registrar padecimientos
    // foreach ($padecimientos as $padecimiento) {
    //     $consultaRegistrarPadecimiento = "INSERT INTO Padecimientos VALUES ('$nss', '$padecimiento')";
    //     $resultadoRegistrarPadecimiento = hacerQuery($consultaRegistrarPadecimiento);

    //     if ($resultadoRegistrarPadecimiento == false) {
    //         echo "Error al registrar padecimiento";
    //         return;
    //     }
    // }

    // // Registrar medicamentos
    // foreach ($medicamentos as $medicamento) {
    //     $consultaRegistrarMedicamento = "INSERT INTO Meds VALUES ('$medicamento->nombreMedicamento', '$medicamento->dosis', '$medicamento->indicaciones', '$nss')";
    //     $resultadoRegistrarMedicamento = hacerQuery($consultaRegistrarMedicamento);

    //     if ($resultadoRegistrarPadecimiento == false) {
    //         echo "Error al registrar medicamento";
    //         return;
    //     }
    // }

    // // Registrar seguros
    // foreach ($seguros as $seguro) {
    //     $consultaRegistrarSeguro = "INSERT INTO SegurosMedicos VALUES ('$seguro->compania', '$seguro->numeroPoliza', '$seguro->fechaVencimiento', '$nss')";
    //     $resultadoRegistrarSeguro = hacerQuery($consultaRegistrarSeguro);

    //     if ($resultadoRegistrarSeguro == false) {
    //         echo "Error al registrar seguro";
    //         return;
    //     }
    // }

    $data['success'] = true;
    $data['message'] = 'Success!';
    echo json_encode($data);
    return;
}
