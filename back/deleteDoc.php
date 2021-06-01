
<!-- 
    ##########################################
    
    DEBEN  APARECER PRIMERO LAS ENTRADAS MAS RECIENTES  

    ##########################################
-->

<!DOCTYPE html> 
<html>
    <head lang="es">
        <title>MediDocs</title>
        <meta charset="UTF-8">
        <!--Fonts-->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <!--Icons-->
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"> 
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css">
        <!--jQuery-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <!-- Bootstrap -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="../css/main.css">
        

    </head>
    <body  style="text-align:center;">
        <header>

        </header>
        
        
        <main>  

            <?php

            session_start();
            include('db/conexionDB.php');

            $user = $_SESSION['usuario'];

            $query = "UPDATE Medicos SET contraseña = 'deshabilitado' WHERE cedula = '$user';";

            $res = hacerQuery($query);

            if($res){
                echo "<h1>¡Médico deshabilitado con exito!<h1>";
            }else{
                echo "<h1>Error al deshabilitar médico<h1>";
            }

            ?>
            <br>
            <button class="btn-submit" onclick="document.location='../users.html'">Regresar</button>

            
        </main>
        <footer>
            
        </footer>
    </body>
</html>

