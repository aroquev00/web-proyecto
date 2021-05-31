<?php


session_start();
include('db/conexionDB.php');

$user = $_SESSION['usuario'];
$return_arr = array();
$query = "SELECT * FROM Personas p JOIN Medicos Me ON p.curp = Me.personaID WHERE Me.cedula = '$user'";

$res = hacerQuery($query);
if($res == false){
    echo "fail";
    die(mysqli_error);
} else {
    $row = mysqli_fetch_array($res);
    $return_arr[] = array(
        "curp" => $row['personaID'],
        "nombre" => $row['nombre'],
        "sexo" => $row['sexo'],
        "dob" => $row['dob'],
    );
    echo json_encode($return_arr);
}

?>