<?php
    // setup
    require_once "../../../config.php";
    require_once $path_functions."adm/database/fun_connection.php"; 
    session_start();
    
    $usr_id = $_SESSION['usr_id'];
    $sql = "
        delete from users where id = $usr_id;
    ";
    $result = $connection->query($sql);
    $data = $result->fetchAll(PDO::FETCH_ASSOC);

    require_once $path_functions."user/auth/fun_sign_out.php";
    
    // return
    header("location: ".$home);
?>