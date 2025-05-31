<?php    
    // setup
    require_once "../../../config.php";
    require_once $path_functions."adm/database/fun_connection.php"; 

    // set variables
    $usr_id = $_POST['usr_id'];
    $contact_type = $_POST['contact_type'];
    $contact_value = $_POST['contact_value'];

    try {
        // sql query
        $sql = "
            insert into contacts (usr_id, contact_type, contact_value) 
            values ('$usr_id', '$contact_type', '$contact_value')
        ";

        $query=$connection->prepare($sql);
        $query->execute();
    }
    catch(PDOException $e) {
        die("Erro: <code>".$e->getMessage()."</code>");
    }
    
    // return to home
    header("location: ".$home."pages/adm/contacts/adm_contacts.php");
?>