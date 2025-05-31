<?php
    // query
    $sql = "select * from adresses";
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
            <h2>Endereços Cadastrados</h2>
        </div>

        <div class="row g-16 jc-fe pb-8">
            <a href="<?php echo $home."pages/adm/adresses/adm_form_address.php"; ?>">Novo Endereço</a>
        </div>

        <table>
            <thead>
                <th>Usuario</th>
                <th>CEP</th>
                <th>Endereço</th>
                <th>Número</th>
                <th colspan="2">Opções</th>
            </thead>

            <tbody>
                <?php foreach ($data as $row) { ?>
                    <tr>
                        <td><?php echo $row['usr_id'] ?></td>
                        <td><?php echo $row['address_cep'] ?></td>
                        <td><?php echo $row['address_address'] ?></td>
                        <td><?php echo $row['address_num'] ?></td>
                        <td><a href="<?php echo $home.'pages/adm/adresses/adm_form_address.php?edt='.$row['id']; ?>">Editar</a></td>
                        <td><a href="<?php echo $home.'functions/adm/adresses/fun_del_address.php?del='.$row['id']; ?>">Deletar</a></td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
    </div>
</section>