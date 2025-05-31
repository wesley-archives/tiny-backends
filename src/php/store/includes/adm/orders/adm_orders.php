<?php
    // query info
    session_start();
    $usr_id = $_SESSION['usr_id'];
    $sql = "select * from orders;";
    $order_path = "pages/adm/orders/adm_order.php";

    try {
        $result = $connection->query($sql);
        $data = $result->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        die("Erro: <code>" . $e->getMessage() . "</code>");
    }
?>

<section>
    <div class="sect-content">
        <div class="sect-header">
            <h2>Vendas</h2>
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
                    foreach ($data as $row) {
                        $sql_usr = "select * from users where id = ".$row['usr_id'];
                        $result_usr = $connection->query($sql_usr);
                        $data_usr = $result_usr->fetch(PDO::FETCH_ASSOC);
                ?>
                        <tr>
                            <td><?php echo $row['order_date'] ?></td>
                            <td><?php echo $row['id'] ?></td>
                            <td><?php if($data_usr['usr_name'] != null) { echo $data_usr['usr_name']; } else { echo "Excluido"; } ?></td>
                            <td><?php echo $row['order_amount'] ?></td>
                            <td><a href="<?php echo $home.$order_path.'?id='.$row['id']; ?>">Ver</a></td>
                            <td><a href="<?php echo $home.'pages/adm/orders/adm_form_order.php?edt='.$row['id']; ?>">Editar</a></td>
                            <td><a href="<?php echo $home.'functions/adm/order/fun_del_order.php?del='.$row['id']; ?>">Deletar</a></td>
                        </tr>
                    <?php } ?>
            </tbody>
        </table>
    </div>
</section>