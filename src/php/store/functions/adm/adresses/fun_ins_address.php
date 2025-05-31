<?php    
    // setup
    require_once "../../../config.php";
    require_once $path_functions."adm/database/fun_connection.php"; 

    // set variables
    $usr_id = $_POST['usr_id'];
    $address_cep = $_POST['address_cep'];
    $address_address = $_POST['address_address'];
    $address_num = $_POST['address_num'];

    try {
        // sql query
        $sql = "
            insert into adresses (usr_id, address_cep, address_address, address_num) 
            values ($usr_id, '$address_cep', '$address_address', '$address_num')
        ";

        $query=$connection->prepare($sql);
        $query->execute();
    }
    catch(PDOException $e) {
        die("Erro: <code>".$e->getMessage()."</code>");
    }
    
    // return to home
    header("location: ".$home."pages/adm/adresses/adm_adresses.php");
?>