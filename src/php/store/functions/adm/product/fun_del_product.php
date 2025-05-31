<?php
    // setup
    require_once "../../../config.php";
    require_once $path_functions."adm/database/fun_connection.php"; 
    
    // delete product
    $product_id = $_GET['del'];
    try {
        $sql = "delete from products where id = $product_id";
        $query=$connection->prepare($sql);
        $query->execute();
    }
    catch(PDOException $e) {
        die("Erro: <code>".$e->getMessage()."</code>");
    }

    // return
    header("location: ".$home."pages/adm/products/adm_products.php");
?>