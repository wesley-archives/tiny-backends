<?php 
    // setup
    require_once "../../../config.php";
    session_start();

    // unset user variables
    unset(
        $_SESSION['status'],
        $_SESSION['usr_name'],
        $_SESSION['usr_type'],
        $_SESSION['usr_id']
    );
    
    // return to home
    header("location: $home");
?>