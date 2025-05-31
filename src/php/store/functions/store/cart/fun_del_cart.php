<?php
    // setup
    require_once "../../../config.php";
    session_start();
    
    // remove item
    $rmv = $_GET['remove'];
    unset($_SESSION['cart'][$rmv]);

    // return to cart
    header("location: ".$home."pages/store/cart.php");
?>
