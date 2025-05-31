<?php
    // setup
    require_once "../../../config.php";
    require_once $path_functions."adm/database/fun_connection.php"; 
    
    if(isset($_POST['usr_email']) && isset($_POST['usr_pass'])){
        // set user variables
        $fullname = $_POST['usr_fullname'];
        $name = $_POST['usr_name'];
        $email = $_POST['usr_email'];
        $pass = $_POST['usr_pass'];
        $terms = $_POST['usr_terms'];
        $type = $_POST['usr_type'];
        
        // sql query
        $sql = "
            insert into users (usr_fullname, usr_name, usr_email, usr_pass, usr_term, usr_type) 
            values ('$fullname', '$name', '$email', '$pass', '$terms', '$type');
        ";
        $result = $connection->query($sql);
        $data = $result->fetchAll(PDO::FETCH_ASSOC);
    }
    header("location: ".$home."pages/adm/users/adm_users.php");
?>
