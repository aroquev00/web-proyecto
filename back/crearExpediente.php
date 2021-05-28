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

if (isset($_POST)) {
    include('db/conexionDB.php');

    // Datos personales
    $primerNombre = $_POST['primerNombre'];
    $apellido = $_POST['apellido'];
    $sexo = $_POST['sexo'];
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
    $tipoSangre = $_POST['tipoSangre'];

    echo print_r($_POST);
    echo "<br>";

    // Alergias
    $alergias = array_filter(
        $_POST,
        fn ($value, $key) => str_contains($key, 'alergia') && $value != '',
        ARRAY_FILTER_USE_BOTH
    );
    //echo print_r($alergias);

    // Padecimientos
    $padecimientos = array_filter(
        $_POST,
        fn ($value, $key) => str_contains($key, 'padecimiento') && $value != '',
        ARRAY_FILTER_USE_BOTH
    );
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
            echo "Nombre de medicamento vacío!";
            return;
        }

        $dosis = $_POST["dosisMedicamento$i"];
        if ($dosis == '') {
            echo "Dosis de medicamento vacía!";
            return;
        }

        $indicaciones = $_POST["indicacionesMedicamento$i"];
        if ($indicaciones == '') {
            echo "Indicaciones de medicamento vacías!";
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
            echo "Compañía de seguro vacío!";
            return;
        }

        $numeroPoliza = $_POST["polizaSeguro$i"];
        if ($numeroPoliza == '') {
            echo "Póliza de seguro vacía!";
            return;
        }

        $fechaVencimiento = $_POST["fechaVencimientoSeguro$i"];
        if ($fechaVencimiento == '') {
            echo "Fecha de vencimiento de seguro vacía!";
            return;
        }

        $seguro = new Seguro();
        $seguro->compania = $compania;
        $seguro->numeroPoliza = $numeroPoliza;
        $seguro->fechaVencimiento = $fechaVencimiento;

        array_push($seguros, $seguro);
    }
    //echo print_r($seguros);


    // Primero checar si el paciente ya existe
    $consultaPacienteExiste = "SELECT personaID FROM Pacientes p WHERE p.personaID = '$curp'";
    $resultadoPacienteExiste = hacerQuery($consultaPacienteExiste);
    if ($resultadoPacienteExiste->num_rows != 0) {
        echo "ERROR, paciente ya registrado";
        return;
    }




    // Paciente no existe, checar si ya existe en tabla de personas
    $consultaPersonaExiste = "SELECT * FROM Personas p WHERE p.curp = '$curp'";
    $resultadoPersonaExiste = hacerQuery($consultaPersonaExiste);
    if ($resultadoPersonaExiste->num_rows == 0) {
        echo "Persona no existe";
        // Registrar a la persona
    } else {
        echo "Persona sí existe";
        // Tomar sus datos existentes
        $personaRow = mysqli_fetch_array($resultadoPersonaExiste);
        $primerNombre = $personaRow['primerNombre'];
        $apellido = $personaRow['apellido'];
        $sexo = $personaRow['sexo'];
        $dob = $personaRow['dob'];
        $curp = $personaRow['curp'];
        $nss = $personaRow['nss'];
        echo $primerNombre;
    }

    $consulta = "INSERT INTO persona VALUES('$primerNombre', $curpPadre)";
    echo $consulta;

    echo "Bye";
}
