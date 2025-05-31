<?php
    // set database 
    $db = "cozzy_db";
    $type = "mysql";
    $host = "localhost";
    $port = "3306";
    $data_source = "$type:host=$host;port=$port;dbname=$db";
    $user = "root";
    $password = "";

    // connect
    try
        {   
            $connection = new PDO($data_source, $user, $password);
        }
    catch (PDOException $e)
    {
        die("Erro: <code>" . $e->getMessage() . "</code>");
    }
?>