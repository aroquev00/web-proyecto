<?php

$usuarioInput = $_GET['cedula'];

session_start();
include('db/conexionDB.php');

$query = "SELECT personaID FROM Medicos WHERE cedula = '$usuarioInput';";

$res = hacerQuery($query);
if($res == false){
    echo "fail";
    die(mysqli_error);
} else {
    while($row = mysqli_fetch_array($res)){
        $valid[] = $row;
    }
    $valid = json_encode($valid);
}

if ($valid == "null") {
    echo "null";
} else {
    $_SESSION["usuario"] = $usuarioInput;
}

$_SESSION["usuario"] = $usuarioInput;
?>