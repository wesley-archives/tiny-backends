<?php
    // query info
    $sql = "select * from products;";

    // query
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
            <h2>Produtos em estoque</h2>
        </div>

        <div class="row g-16 jc-fe pb-8">
            <a href="<?php echo $home."pages/adm/products/adm_form_product.php"; ?>">Novo Produto</a>
        </div>

        <table>
            <thead>
                <th>id</th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th colspan="3">Opções</th>
            </thead>

            <tbody>
                <?php foreach ($data as $row) { ?>
                    <tr>
                        <td><?php echo $row['id'] ?></td>
                        <td><?php echo $row['product_name'] ?></td>
                        <td><?php echo $row['product_quantity'] ?></td>
                        <td><?php echo $row['product_price'] ?></td>
                        <td><a href="<?php echo $home.'pages/store/product.php?id='.$row['id']; ?>">Ver</a></td>
                        <td><a href="<?php echo $home.'pages/adm/products/adm_form_product.php?edt='.$row['id']; ?>">Editar</a></td>
                        <td><a href="<?php echo $home.'functions/adm/product/fun_del_product.php?del='.$row['id']; ?>">Deletar</a></td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
    </div>
</section>