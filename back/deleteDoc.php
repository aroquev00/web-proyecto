<?php

session_start();
include('db/conexionDB.php');

$user = $_SESSION['usuario'];

$query = "UPDATE Medicos SET contraseña = 'deshabilitado' WHERE cedula = '$user';";

$res = hacerQuery($query);

if($res){
    echo "Registro Borrado Con Exito!";
}else{
    echo "Registro No Se Pudo Borrar";
}

?>