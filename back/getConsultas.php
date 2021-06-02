<?php
    session_start();
    include('db/conexionDB.php');

    $user = $_SESSION['paciente'];
    $query = "SELECT nss FROM Pacientes WHERE PersonaID = '$user'";
    $resultado = hacerQuery($query);
    $row = mysqli_fetch_array($resultado);
    $nss = $row["nss"];

    $return_arr = array();
    $query ="SELECT * FROM Pacientes p JOIN ConsultasMedicoPaciente c ON p.nss = c.pacienteID WHERE c.pacienteID = '$nss' ORDER BY c.fecha desc";

    $res = hacerQuery($query);
    if($res == false){
        echo "fail";
        die(mysqli_error);
    } else {
        while($row = mysqli_fetch_array($res)){
            $return_arr[] = array(
                /* "nss" => $row['nss'],
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
                "fechaVen" => $row['fechaVen'], */
                "razon" => $row['razon'],
                "altura" => $row['altura'],
                "peso" => $row['peso'],
                "presion" => $row['presion'],
                "comentario" => $row['comentario'],
                "fecha" => $row['fecha'],
            );
        }
        echo json_encode($return_arr);
    }
    
?>