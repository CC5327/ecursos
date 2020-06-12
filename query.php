<?php
require_once("config.php");
$connstr = "host=$DB_HOST port=$DB_PORT dbname=$DB_NAME user=$DB_USER password=$DB_PASS";
$conn = pg_pconnect($connstr);
if (isset($_POST["name"])){
    $new_name = $_POST['name'];
        $query = pg_query($conn, "UPDATE users SET name='$new_name' WHERE id = 1");
    }
$name_query = pg_query($conn, "SELECT name FROM users WHERE id = 1");
$name = pg_fetch_row($name_query)[0];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actualizar tu nombre de perfil</title>
</head>
<body>
    <p>Ahora mismo tu nombre de perfil es <?= $name ?>, ¿deseas cambiarlo?</p>
    <form action="query.php" method="post">
    <input type="text" name="name" id="name" placeholder="nuevo nombre">
    <input type="submit" value="Cambiar">
    </form>
</body>
</html>