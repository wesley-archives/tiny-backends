<?php
    // setup
    require_once "../../../config.php";
    require_once $path_functions."adm/database/fun_connection.php"; 
    
    if(isset($_GET['del'])){
        // sql query
        $usr_id = $_GET['del'];
        $sql = "
            delete from users where id = $usr_id;
        ";
        $result = $connection->query($sql);
        $data = $result->fetch(PDO::FETCH_ASSOC);

        // return to user list
        header("location: ".$home."pages/adm/users/adm_users.php");
    }
?>