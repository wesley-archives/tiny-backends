<?php
    // setup
    require_once "../../../config.php";
    require_once $path_functions."adm/database/fun_connection.php"; 

    // user info
    $usr_id = $_SESSION['usr_id'];

    // order info
    $payment_method = $_POST['payment_method'];
    $total = $_SESSION['cart_total'];
    
    // sql query
    $order = "
        insert into orders (usr_id, order_amount, order_payment_method)
        values ($usr_id, '$total', '$payment_method')
    ";

    try {
        // insert order
        $result = $connection->query($order);
        $data = $result->fetch(PDO::FETCH_ASSOC);
        $order_id = $connection->lastInsertId();
        
        // insert products sold
        foreach ($_SESSION['cart'] as $id) {
            $select_products = "select * from products where id = $id";
            $result = $connection->query($select_products);
            $data = $result->fetch(PDO::FETCH_ASSOC);
            
            $product_id = $data['id'];
            $product_price = $data['product_price'];
        
            $insert_products_sold = "
                insert into products_sold (order_id, product_id, quantity, price) 
                values ($order_id, $product_id, 1, '$product_price')
            ";
            $result = $connection->query($insert_products_sold);
            $data = $result->fetchAll(PDO::FETCH_ASSOC);
        }        

        // reset cart
        require_once $path_functions."store/cart/fun_clr_cart.php";

    }
    catch(PDOException $i) {
        die("Erro: <code>".$i->getMessage()."</code>");
    }
    
    // return to profile
    header("Location: ".$home."pages/user/orders/orders.php");
?>