<!DOCTYPE html>
<html lang="en">
<head>
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
    <script src="js/main.js"></script>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- Main css -->
    <link rel="stylesheet" href="css/main.css">
    
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    
</head>
<body>
   
    <nav class="navbar navbar-expand-sm">

        <!-- Links -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="users.html">Usuarios</a>
          </li>
          <li class="nav-item">
            <a href="index.html"><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</a>
          </li>
          
        </ul>
      
    </nav>
    <main style="text-align: center;">
        <?php
        session_start();
    
        include('db/conexionDB.php');

        $consulta = "SELECT nombre , COUNT(*) AS num FROM Meds GROUP BY nombre";

        $resultado = hacerQuery($consulta);

        if ($resultado->num_rows > 0) { ?>

            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Numero de veces recetado</th> 
                </tr>
                <?php while($row = $resultado->fetch_assoc()) { ?>
                <tr>
                    <td><?=$row['nombre'];?></td>
                    <td><?=$row['num'];?></td> 
                </tr>
                <?php }?>
            </table>
        
        <?php } else { echo "0 resultados"; } ?>
    </main>
</body> 
</html>