<?php
    // query info
    $sql = "select * from newsletter";

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
            <h2>Inscritos na Newsletter</h2>
        </div>

        <div class="row g-16 jc-fe pb-8">
            <a href="<?php echo $home."pages/adm/newsletter/adm_form_newsletter.php"; ?>">Inscrever Usuário</a>
        </div>

        <table>
            <thead>
                <th>Nome</th>
                <th>E-mail</th>
                <th colspan="2">Opções</th>
            </thead>

            <tbody>
                <?php foreach ($data as $row) { ?>
                    <tr>
                        <td><?php echo $row['usr_name'] ?></td>
                        <td><?php echo $row['usr_email'] ?></td>
                        <td><a href="<?php echo $home.'pages/adm/newsletter/adm_form_newsletter.php?edt='.$row['id']; ?>">Editar</a></td>
                        <td><a href="<?php echo $home.'functions/adm/newsletter/fun_del_newsletter.php?del='.$row['id']; ?>">Deletar</a></td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
    </div>
</section>