<?php    
    // setup
    require_once "../../../config.php";
    require_once $path_functions."adm/database/fun_connection.php"; 

    // set product variables
    $product_id = $_GET['edt'];
    $product_name = $_POST['product_name'];
    $product_desc = $_POST['product_desc'];
    $product_cat = $_POST['product_cat'];
    $product_pic = $_POST['product_pic'];
    $product_price = $_POST['product_price'];
    $product_quantity = $_POST['product_quantity'];

    try {
        if(isset($_POST['product_pic'])) {
            $sql = "
                update products
                set product_name = '$product_name', 
                product_desc = '$product_desc', 
                product_cat = '$product_cat', 
                product_pic = '$product_pic',
                product_price = '$product_price', 
                product_quantity = '$product_quantity'
                where id = $product_id
            ";
        } else {
            $sql = "
            update products
            set product_name = '$product_name', 
            product_desc = '$product_desc', 
            product_cat = '$product_cat', 
            product_price = '$product_price', 
            product_quantity = '$product_quantity'
            where id = $product_id
            ";
        }

        $query=$connection->prepare($sql);
        $query->execute();
    }
    catch(PDOException $e) {
        die("Erro: <code>".$e->getMessage()."</code>");
    }
    
    // return
    header("location: ".$home."pages/adm/products/adm_products.php");
?>