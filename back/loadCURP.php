<?php

    session_start();
    include('db/conexionDB.php');

    $usuarioInput = $_GET['curp'];
    $query = "SELECT personaID FROM Pacientes WHERE personaID = '$usuarioInput';";

    $res = hacerQuery($query);
    if($res == false){
        mysqli_error();
    }
    if(mysqli_num_rows($res) == 0){
        echo "fail";
    } else {
        $_SESSION["paciente"] = $usuarioInput;
    }

?>