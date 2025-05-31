<?php    
    // setup
    require_once "../../../config.php";
    require_once $path_functions."adm/database/fun_connection.php"; 

    // set variables
    $newsletter_id = $_GET['edt'];
    $usr_name = $_POST['usr_name'];
    $usr_email = $_POST['usr_email'];

    try {
        // sql query
        $sql = "
            update newsletter set usr_name = '$usr_name', usr_email = '$usr_email' where id = $newsletter_id
        ";
        $query=$connection->prepare($sql);
        $query->execute();
    }
    catch(PDOException $e) {
        die("Erro: <code>".$e->getMessage()."</code>");
    }
    
    // return to home
    header("location: ".$home."pages/adm/newsletter/adm_newsletter.php");
?>