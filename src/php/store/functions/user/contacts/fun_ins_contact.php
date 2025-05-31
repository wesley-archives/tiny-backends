<?php    
    // setup
    require_once "../../../config.php";
    require_once $path_functions."adm/database/fun_connection.php"; 
    session_start();

    // set variables
    $usr_id = $_SESSION['usr_id'];
    $contact_id = $_GET['edt'];
    $contact_type = $_POST['contact_type'];
    $contact_value = $_POST['contact_value'];
    
    // sql query
    $sql = "
        insert into contacts (usr_id, contact_type, contact_value) 
        values ($usr_id, '$contact_type', '$contact_value')
    ";

    try {
        $query=$connection->prepare($sql);
        $query->execute();
    }
    catch(PDOException $e) {
        die("Erro: <code>".$e->getMessage()."</code>");
    }
    
    // return to home
    header("location: ".$home."pages/user/contacts/contacts.php");
?>