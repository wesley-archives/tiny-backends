<?php
    // setup
    require_once "../../../config.php";
    session_start();
    
    // create cart
    if (!isset($_SESSION['cart'])) {
        $_SESSION['cart'] = array();
    } 

    // insert in cart
    array_push($_SESSION['cart'], $_GET['add']);
    
    // return to cart
    header("location: ".$home."pages/store/cart.php");
?>