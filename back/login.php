<?php

    session_start();
   
    include('db/conexionDB.php');
    
    $tipo = $_GET['Type'];
    $usuarioInput = $_GET['usuario'];
    $contraInput = $_GET['contra'];

    //$_SESSION["usuario"] = $usuario;
    //$_SESSION['usuario'] = $userioInput;
    // Set session variables
   

    if($tipo == "Dr"){
        
        $consulta = "SELECT * FROM Personas p JOIN Medicos m ON p.curp = m.personaID";
        $resultado = hacerQuery($consulta);
        if($resultado == false){
            die(mysqli_error);
        }else{
            $registrado = false;
			while($row = mysqli_fetch_array($resultado)){
				$usuario  = $row['cedula'];
				$password = $row['contraseña'];
				if($usuario == $usuarioInput && $password == $contraInput){
					$registrado = true;
				}
			}
            if($registrado){
				echo "success";
			}else{
				echo "fail";
			}

        }

    }else if ($tipo == "Paciente"){

        $consulta = "SELECT * FROM Personas p JOIN Pacientes a ON p.curp = a.personaID";
        $resultado = hacerQuery($consulta);
        if($resultado == false){
            die(mysqli_error);
        }else{
            $registrado = false;
			while($row = mysqli_fetch_array($resultado)){
				$usuario  = $row['curp'];
				$password = $row['contraseña'];
				if($usuario == $usuarioInput && $password == $contraInput){
					$registrado = true;
				}
			}
            if($registrado){
				echo "success";
			}else{
				echo "fail";
			}

        }

    }
    $_SESSION["usuario"] = $usuarioInput;
?>