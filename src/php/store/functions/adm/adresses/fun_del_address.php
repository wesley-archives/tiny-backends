<?php
    // setup
    require_once "../../../config.php";
    require_once $path_functions."adm/database/fun_connection.php"; 
    
    if(isset($_GET['del'])){
        // sql query
        $address_id = $_GET['del'];
        $sql = "
            delete from adresses where id = $address_id;
        ";
        $result = $connection->query($sql);
    }

    // return to home
    header("location: ".$home."pages/adm/adresses/adm_adresses.php");
?>