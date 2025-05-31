<?php
    // query info
    session_start();
    $usr_id = $_SESSION['usr_id'];

    $title = "Seus pedidos";
    $sql = "select * from orders where usr_id = $usr_id;";
    $order_path = "pages/user/orders/order.php";
?>

<section>
    <div class="sect-content">
        <div class="sect-header">
            <h2><?php echo $title ?></h2>
        </div>

        <table>
            <thead>
                <th>Data</th>
                <th>Venda</th>
                <th>Usuario</th>
                <th>Total</th>
                <th colspan="3">Opções</th>
            </thead>

            <tbody>
                <?php
                    try {
                        $result = $connection->query($sql);
                        $data = $result->fetchAll(PDO::FETCH_ASSOC);
                        foreach ($data as $row) {
                            $sql_usr = "select * from users where id = ".$row['usr_id'];
                            $result_usr = $connection->query($sql_usr);
                            $data_usr = $result_usr->fetch(PDO::FETCH_ASSOC);
                    ?>
                            <tr>
                                <td><?php echo $row['order_date'] ?></td>
                                <td><?php echo $row['id'] ?></td>
                                <td><?php 
                                    if($data_usr['usr_name'] != null) {
                                        echo $data_usr['usr_name'];
                                    } else {
                                        echo "Excluido";
                                    }
                                ?></td>
                                <td><?php echo $row['order_amount'] ?></td>
                                <td><a href="<?php echo $home.$order_path.'?id='.$row['id']; ?>">Ver</a></td>
                            </tr>
                    <?php
                        }
                    } catch (PDOException $e) {
                        die("Erro: <code>" . $e->getMessage() . "</code>");
                    }
                ?>
            </tbody>
        </table>
    </div>
</section>