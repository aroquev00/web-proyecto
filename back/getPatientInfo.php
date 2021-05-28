<?php

    session_start();
    include('db/conexionDB.php');

    $user = $_SESSION['usuario'];
    $return_arr = array();
    $query = "SELECT * FROM Personas p JOIN Pacientes pa ON p.curp = pa.personaID where personaID = '$user'";

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
            );
        }
        echo json_encode($return_arr);
    }
    
?>