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
    $query ="SELECT * FROM Internados i JOIN Pacientes p ON i.pacienteID = p.nss WHERE p.nss = '$nss' ORDER BY i.fechaIn desc";

    $res = hacerQuery($query);
    if($res == false){
        echo "fail";
        die(mysqli_error);
    } else {
        while($row = mysqli_fetch_array($res)){
            $return_arr[] = array(
                "hospital" => $row['hospital'],
                "fechaIn" => $row['fechaIn'],
                "fechaOut" => $row['fechaOut'],
                "drTratante" => $row['drTratante'],
                "comentarios" => $row['comentarios'],
            );
        }
        echo json_encode($return_arr);
        
    }
        
    
      
      
    
?>



