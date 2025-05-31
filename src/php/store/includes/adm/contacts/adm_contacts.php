<?php
    // query info
    $title = "Contatos Cadastrados";
    $sql = "select * from contacts";

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
            <h2><?php echo $title ?></h2>
        </div>

        <div class="row g-16 jc-fe pb-8">
            <a href="<?php echo $home."pages/adm/contacts/adm_form_contact.php"; ?>">Novo contato</a>
        </div>

        <table>
            <thead>
                <th>Usuario</th>
                <th>Tipo</th>
                <th>Contato</th>
                <th colspan="2">Opções</th>
            </thead>

            <tbody>
                <?php foreach ($data as $row) { ?>
                    <tr>
                        <td><?php echo $row['usr_id'] ?></td>
                        <td><?php echo $row['contact_type'] ?></td>
                        <td><?php echo $row['contact_value'] ?></td>
                        <td><a href="<?php echo $home.'pages/adm/contacts/adm_form_contact.php?edt='.$row['id']; ?>">Editar</a></td>
                        <td><a href="<?php echo $home.'functions/adm/contacts/fun_del_contact.php?del='.$row['id']; ?>">Deletar</a></td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
    </div>
</section>