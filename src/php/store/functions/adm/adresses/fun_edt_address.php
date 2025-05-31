<?php    
    // setup
    require_once "../../../config.php";
    require_once $path_functions."adm/database/fun_connection.php"; 

    // set variables
    $address_id = $_GET['edt'];
    $address_cep = $_POST['address_cep'];
    $address_address = $_POST['address_address'];
    $address_num = $_POST['address_num'];

    try {
        // sql query
        $sql = "
            update adresses set 
            address_cep = '$address_cep', 
            address_address = '$address_address', 
            address_num = '$address_num' 
            where id = $address_id
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