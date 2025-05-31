<?php    
    // setup
    require_once "../../../config.php";
    require_once $path_functions."adm/database/fun_connection.php"; 

    // set variables
    $order_id = $_GET['edt'];
    $order_method = $_POST['payment_method'];
    $order_total = $_POST['total'];
    $sql = "
        update orders set 
        order_amount = '$order_total', 
        order_payment_method = '$order_method' 
        where id = $order_id
    ";

    try {
        $query=$connection->prepare($sql);
        $query->execute();
    }
    catch(PDOException $e) {
        die("Erro: <code>".$e->getMessage()."</code>");
    }
    
    // return
    header("location: ".$home."pages/adm/orders/adm_orders.php");
?>