<?php

function returnError($idDivError, $errorDescription) {
    $error['id'] = $idDivError;
    $error['description'] = $errorDescription;
    $data['success'] = false;
    $data['error'] = $error;
    echo json_encode($data);
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
    $cedula = $_POST['cedula'];
    $password = $_POST['password'];


    //Primero checar si el doctor ya existe
    $consultaPacienteExiste = "SELECT personaID FROM Medicos m WHERE m.personaID = '$curp'";
    $resultadoPacienteExiste = hacerQuery($consultaPacienteExiste);
    if ($resultadoPacienteExiste->num_rows == 1) {
        returnError("curp", "Medico ya registrado");
        return;
    }


    // Dr no existe, checar si ya existe en tabla de personas
    $consultaPersonaExiste = "SELECT * FROM Personas p WHERE p.curp = '$curp'";
    $resultadoPersonaExiste = hacerQuery($consultaPersonaExiste);
    if ($resultadoPersonaExiste->num_rows == 0) {
        //echo "Persona no existe";
        // Registrar a la persona
        $consultaRegistrarPersona = "INSERT INTO Personas VALUES ('$nombre', '$sexo', '$dob', '$curp')";
        $resultadoRegistrarPersona = hacerQuery($consultaRegistrarPersona);
        $consultaRegistraDoctor = "INSERT INTO Medicos VALUES ('$cedula', '$curp', '$password')";
        $resultadoRegistrarDoctor = hacerQuery($consultaRegistraDoctor);

        if ($resultadoRegistrarPersona == false || $resultadoRegistrarDoctor == false) {
            returnError('form', "Error al registrar persona en la Base de Datos");
            return;
        }
    } else {
        //echo "Persona sí existe";
        // Sobre escribir los datos
        $consultaSobreescribirPersona = "UPDATE Personas p SET nombre = '$nombre', sexo = '$sexo', dob = '$dob' WHERE p.curp='$curp'";
        $resultadoSobreescribirPersona = hacerQuery($consultaSobreescribirPersona);
        $consultaSobreescribeDoctor = "UPDATE Medicos SET cedula = '$cedula', personaID = '$curp', contraseña = '$password')";
        $resultadoSobreescribirDoctor = hacerQuery($consultaSobreescribeDoctor);

        if ($resultadoSobreescribirPersona == false) {
            returnError('form', "Error al sobreescribir persona en la Base de Datos");
            return;
        }
    }



    $data['success'] = true;
    $data['message'] = 'Success!';
    echo json_encode($data);
    return;
}
