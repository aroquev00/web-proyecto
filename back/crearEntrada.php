<html>
    <head>
    <title>MediDocs</title>
    <meta charset="utf-8">
    <!--Fonts-->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <!--Icons-->
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css">
    <!--Boostrap-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> 
    <!--CSS-->
    <link rel="stylesheet" href="../css/main.css">
    <!--JavaScript-->
    
    </head>
    <body style="text-align:center;">
        <main>
            <?php
                session_start();
                include("db/conexionDB.php");
                $medico = $_SESSION['usuario'];
                
                $action = $_POST['action'];
    
                $paciente = $_SESSION['usuario'];
               
                $exito = true;
                
                $query = "SELECT nss FROM Pacientes WHERE PersonaID = '$paciente'";
                $resultado = hacerQuery($query);
                
                $row = mysqli_fetch_array($resultado);
                $nss = $row["nss"];
    
                if($action == "consulta"){
                    
                    $fecha = $_POST['fecha'];
                    $razon = $_POST['razon'];
                    $comentarios = $_POST['comentarios'];
                
    
                    if(isset($_POST['peso']) && $_POST['peso'] !== ""){
                        $peso = $_POST['peso'];
                    }else{
                        $peso ="null";
                    }
    
                    if(isset($_POST['altura']) && $_POST['altura'] !== ""){
                        $altura = $_POST['altura'];
                    }else{
                        $altura = "null";
                    }
    
                    if(isset($_POST['presion']) && $_POST['presion'] !== ""){
                        $presion = $_POST['presion'];
                    }else{
                        $presion = "null";
                    }
    
    
                    $query = "INSERT INTO ConsultasMedicoPaciente VALUES ('$medico', '$nss', $altura, $peso, '$presion', '$razon', '$comentarios', '$fecha')";
                    $resultado = hacerQuery($query);
                    if($resultado == false){
                        $exito = false;
                    }

                    if($exito){
                        echo "<h1>Datos guardados exitósamente.</h1>";
                    }else{
                        echo "<h1>Hubo un error al guardar los datos</h1>";
                    }

                }else if($action == "hospitalizacion"){
                    $fechain = $_POST['fechaIn'];
                    $hospital = $_POST['hospital'];
                    $drTratante = $_POST['drTratante'];
                    $comentariosH = $_POST['comentarios'];
    
                    if(isset($_POST['fechaOut']) && $_POST['fechaOut'] !== ""){
                        $fechaout = $_POST['fechaOut'];
                    }else{
                        $fechaout ="null";
                    }

                    $query = "SELECT m.cedula FROM Medicos m JOIN Personas p ON m.personaID = p.curp WHERE p.nombre = '$drTratante'";
                    $resultado = hacerQuery($query);
                    echo $query;
                    if($resultado == true){
                            
                        if(mysqli_num_rows($resultado) == 0){
                            $query = "INSERT INTO Internados VALUES ('$hospital', '$nss', '$fechain', '$fechaout', '$drTratante', null,'$comentariosH')";
                            $resultado = hacerQuery($query);
                            if($resultado == false){
                                $exito = false;
                            }

                        }else{
                            $row = mysqli_fetch_array($resultado);
            
                            $cedula = $row["cedula"];
                            if($cedula != null){
                                $query = "INSERT INTO Internados VALUES ('$hospital', '$nss', '$fechain', '$fechaout', '$drTratante', '$cedula', '$comentariosH')";
                                $resultado = hacerQuery($query);
                                if($resultado == false){
                                    $exito = false;
                                }
            
                            }
                        }
            

                    }else{
                        $exito = false;
                    }

                   
                    
                    
                    if(isset($_POST['drInter']) && $_POST['drInter'] !== ""){
                        $drsInter = $_POST['drInter'];
                        for($i = 0; $i < count($drsInter); $i++){
                            if($drsInter[$i] == '') continue;
        
                            $query = "SELECT m.cedula FROM Medicos m JOIN Personas p ON m.personaID = p.curp WHERE p.nombre = '$drsInter[$i]'";
                            
                            $resultado = hacerQuery($query);
                            if($resultado == true){
                                
                                if(mysqli_num_rows($resultado) == 0){
                                    $query = "INSERT INTO DocInterconsultantes VALUES ('$hospital', '$nss', '$fechain', '$drsInter[$i]' , NULL)";
                                
                                    $resultado = hacerQuery($query);
                                    if($resultado == false){
                                        $exito = false;
                                    }
    
                                }else{
                                    $row = mysqli_fetch_array($resultado);
                    
                    
                                    $cedula = $row["cedula"];
                                    if($cedula != null){
                                        $query = "INSERT INTO DocInterconsultantes VALUES ('$hospital', '$nss', '$fechain', '$drsInter[$i]' ,'$cedula')";
                                    
                                        $resultado = hacerQuery($query);
                                        if($resultado == false){
                                            $exito = false;
                                        }
                    
                                    }
                                }
                    
        
                            }else{
                                $exito = false;
                            }
        
                        }

                    }
                    
    
                
                    if($exito){
                        echo "<h1>Datos guardados exitósamente.</h1>";
                    }else{
                        echo "<h1>Hubo un error al guardar los datos</h1>";
                    }
    
                }
            ?>
            <br>
            <button class="btn-submit" onclick="document.location='../vistaExpediente.html'">Regresar</button>
        
        </main> 



    </body>
</html>

