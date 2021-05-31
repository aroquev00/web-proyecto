<?php
    session_start();
    include('db/conexionDB.php');
    $user = $_SESSION['usuario'];
    
    $consulta = " SELECT nombre, sexo FROM Medicos m JOIN Personas p ON m.personaID = p.curp WHERE m.cedula = '$user' ";
   
    $resultado = hacerQuery($consulta);
        if($resultado == false){
            die(mysqli_error);
        }else{
            $row = mysqli_fetch_array($resultado);
            $sexo = $row['sexo'];
            $nombre  = $row['nombre'];
            if($sexo == "F"){
                echo "Dra.".$nombre;
            }else{
                echo "Dr.".$nombre;
            }
            
        }
?>