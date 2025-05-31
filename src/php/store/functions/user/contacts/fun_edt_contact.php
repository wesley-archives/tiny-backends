<?php    
    // setup
    require_once "../../../config.php";
    require_once $path_functions."adm/database/fun_connection.php"; 

    // set variables
    $contact_id = $_GET['edt'];
    $contact_type = $_POST['contact_type'];
    $contact_value = $_POST['contact_value'];

    try {
        // sql query
        $sql = "
            update contacts set 
            contact_type = '$contact_type', 
            contact_value = '$contact_value' 
            where id = $contact_id
        ";
        $query=$connection->prepare($sql);
        $query->execute();
    }
    catch(PDOException $e) {
        die("Erro: <code>".$e->getMessage()."</code>");
    }
    
    // return to home
    header("location: ".$home."pages/user/contacts/contacts.php");
?>