<?php

    
    session_start();
    include('db/conexionDB.php');

    

    // Obtener nss del paciente usando su CURP
    $paciente = $_SESSION['paciente'];
    $query = "SELECT nss FROM Pacientes WHERE PersonaID = '$paciente'";
    $resultado = hacerQuery($query);
    $row = mysqli_fetch_array($resultado);
    $nss = $row["nss"];


    $return_arr = array();
    $fechaIn = $_POST['fechaIn'];
    
    $query = "SELECT di.nombre FROM DocInterconsultantes di WHERE di.fechaIn = '$fechaIn' AND di.pacienteID = '$nss'";
    $res = hacerQuery($query);
    if($res == false){
        echo "fail";
        die(mysqli_error);
    }else{
        while($row = mysqli_fetch_array($res)){
            $return_arr[] = array(
                "nombre" => $row['nombre'],
            );
        }
        echo json_encode($return_arr);
    
    }  
?>