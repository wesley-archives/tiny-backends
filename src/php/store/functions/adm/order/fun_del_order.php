<?php
    // setup
    require_once "../../../config.php";
    require_once $path_functions."adm/database/fun_connection.php"; 
    
    if(isset($_GET['del'])){
        $order_id = $_GET['del'];
        $sql = "
            delete from orders where id = $order_id;
        ";
        $result = $connection->query($sql);
        $data = $result->fetchAll(PDO::FETCH_ASSOC);
    }

    // return
    header("location: ".$home."pages/adm/orders/adm_orders.php");
?>