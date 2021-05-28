<?php
if (isset($_POST)) {
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

    // Alergias
    $alergias = array_filter(
        $_POST,
        fn ($key) => str_contains($key, 'alergia'),
        ARRAY_FILTER_USE_KEY
    );
    // note: may be empty...

    // Padecimientos
    $padecimientos = array_filter(
        $_POST,
        fn ($key) => str_contains($key, 'padecimiento'),
        ARRAY_FILTER_USE_KEY
    );
    // note: may be empty...

    // Medicamentos
    $medicamentos = array_filter(
        $_POST,
        fn ($key) => str_contains($key, 'medicamento'),
        ARRAY_FILTER_USE_KEY
    );

    // Seguros Médicos
    $seguros = array_filter(
        $_POST,
        fn ($key) => str_contains($key, 'seguro'),
        ARRAY_FILTER_USE_KEY
    );

    //echo print_r($_POST);

    $consulta = "INSERT INTO persona VALUES('$primerNombre', $curpPadre)";
    echo $consulta;

    echo "Bye";
}
