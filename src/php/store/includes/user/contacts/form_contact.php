<?php
    // query info
    $usr_type = $_GET['usr_type'];
    
    // get query
    $contact_id = $_GET['edt'];
    $sql = "select * from contacts where id = '$contact_id'";
    
    try {
        $result = $connection->query($sql);
        $data = $result->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        die("Erro: <code>" . $e->getMessage() . "</code>");
    }

    // sect header
    if(isset($_GET['edt'])) {
        $title = "Editar contato: ".$contact_id;
        $form_path = 'functions/user/contacts/fun_edt_contact.php?edt='.$contact_id;
    } else {
        $title = "Novo contato";
        $form_path = 'functions/user/contacts/fun_ins_contact.php';
    }
?>

<section>
    <div class="sect-content">
        <div class="sect-content row jc-ce">
            <form action="<?php echo $home.$form_path; ?>" method="post" class="col g-16">
                <h2><?php echo $title ?></h2>
                <div class="col g-8">
                    <label for="contact_type">Tipo</label>
                    <input type="text" name="contact_type" value="<?php echo $data['contact_type'] ?>" required>
                </div>

                <div class="col g-8">
                    <label for="contact_value">Contato</label>
                    <input type="text" name="contact_value" value="<?php echo $data['contact_value'] ?>" required>
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    </div>
</section>