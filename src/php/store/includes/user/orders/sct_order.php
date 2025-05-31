<?php
    // user info
    session_start();
    $usr_id = $_SESSION['usr_id'];
    $order_id = $_GET['id'];
    
    // query info
    $title = "Pedido: ".$order_id;
    $sql_products_sold = "
            select * from orders os
            inner join products_sold ps
            on os.id = ps.order_id
            where os.id = $order_id
            and os.usr_id = $usr_id
        ";

    // query 
    try {
        $result = $connection->query($sql_products_sold);
        $data = $result->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        die("Erro: <code>" . $e->getMessage() . "</code>");
    }
?>  

<section>
    <div class="sect-content">
        <?php
            if ($data == null) {
                require $path."includes/user/sct_invalid_permission.php";
            } else {
                $total = 0;
        ?>
    
        <div class="sect-header">
            <h2><?php echo $title ?></h2>
        </div>

        <table>
            <thead>
                <th>Produtos</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th>Subtotal</th>
            </thead>

            <tbody>
                <?php
                    foreach ($data as $row) {
                        $subtotal = $row['quantity'] * $row['price'];

                        $sql_product = "select * from products where id = ".$row['product_id'];
                        $result_product = $connection->query($sql_product);
                        $data_product = $result_product->fetch(PDO::FETCH_ASSOC);
                ?>
                    <tr>
                        <td><?php echo $data_product['product_name']; ?></td>
                        <td><?php echo $row['quantity']; ?></td>
                        <td><?php echo $row['price']; ?></td>
                        <td><?php echo "R$ ".$subtotal; ?></td>
                    </tr>
                <?php $total += $subtotal; } ?>
            </tbody>

            <tfoot>
                <td colspan="2">Total</td>
                <td colspan="2"><?php echo "R$ ".$total; ?></td>
            </tfoot>
        </table>
        <?php } ?>
    </div>
</section>