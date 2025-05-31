<?php
    // setup
    require_once "../../../config.php";
    require_once $path_functions."adm/database/fun_connection.php"; 
    
    if(isset($_GET['del'])){
        // sql query
        $newsletter_id = $_GET['del'];
        $sql = "
            delete from newsletter where id = $newsletter_id;
        ";
        $result = $connection->query($sql);
        $data = $result->fetchAll(PDO::FETCH_ASSOC);
    }

    // return to home
    header("location: ".$home."pages/adm/newsletter/adm_newsletter.php");
?>