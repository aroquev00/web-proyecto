<?php
    session_start();
    include('db/conexionDB.php');

    $user = $_SESSION['paciente'];
    $query = "SELECT nss FROM Pacientes WHERE PersonaID = '$user'";
    $resultado = hacerQuery($query);
    $row = mysqli_fetch_array($resultado);
    $nss = $row["nss"];

    $return_arr = array();
    $query ="SELECT * FROM Pacientes p JOIN Personas pa on p.personaID = pa.curp JOIN SegurosMedicos WHERE p.nss = '$nss' ";

    $res = hacerQuery($query);
    if($res == false){
        echo "fail";
        die(mysqli_error);
    } else {
        while($row = mysqli_fetch_array($res)){
            $return_arr[] = array(
                "nss" => $row['nss'],
                "correo" => $row['correo'],
                "domicilio" => $row['domicilio'],
                "telefono" => $row['telefono'],
                "sangre" => $row['tipoSangre'],
                "curp" => $row['personaID'],
                "madre" => $row['madre'],
                "padre" => $row['padre'],
                "nombre" => $row['nombre'],
                "sexo" => $row['sexo'],
                "dob" => $row['dob'],
                "compañia" => $row['compania'],
                "polizaNum" => $row['polizanum'],
                "fechaVen" => $row['fechaVen'], 
            );
        }
        echo json_encode($return_arr);
    }
    
?>