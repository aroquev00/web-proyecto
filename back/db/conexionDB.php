<?php

    define("servidor", "178.128.64.42");
    define("usuario", "icemanTec");
    define("contra", "evC7nu^J");
    define("bd", "MediDocs");

 
	function hacerQuery($consulta){

		$conexion  = mysqli_connect(servidor,usuario, contra, bd);
		$resultado = mysqli_query($conexion, $consulta);
		mysqli_close($conexion);

		if($resultado)
			return $resultado;
		else
			return false;

		
	}





?>
