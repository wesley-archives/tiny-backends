<?php    
    // setup
    require_once "../../../config.php";
    require_once $path_functions."adm/database/fun_connection.php"; 

    // set order variables
    $usr_id = $_GET['edt'];
    $usr_fullname = $_POST['usr_fullname'];
    $usr_name = $_POST['usr_name'];
    $usr_email = $_POST['usr_email'];
    $usr_pass = $_POST['usr_pass'];
    $usr_type = $_POST['usr_type'];

    try {
    // sql query
    $sql = "
        update users set 
        usr_fullname = '$usr_fullname', 
        usr_name = '$usr_name', 
        usr_email = '$usr_email', 
        usr_pass = '$usr_pass',
        usr_type = '$usr_type'
        where id = $usr_id
    ";
        $query=$connection->prepare($sql);
        $query->execute();
    }
    catch(PDOException $e) {
        die("Erro: <code>".$e->getMessage()."</code>");
    }
    
    // return to home
    header("location: $home"."pages/user/profile.php");
?>