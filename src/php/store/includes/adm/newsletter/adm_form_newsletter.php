<?php   
    // get operation
    $operation = "ins";

    if(isset($_GET['edt'])) {
        $newsletter_id = $_GET['edt'];
        $operation = "edt";
        $title = "Editar inscrito: ".$newsletter_id;
        $form_path = 'functions/adm/newsletter/fun_edt_newsletter.php?edt='.$newsletter_id;

        // query
        $sql = "select * from newsletter where id = '$newsletter_id'";
        try {
            $result = $connection->query($sql);
            $data = $result->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            die("Erro: <code>" . $e->getMessage() . "</code>");
        }
    } else {
        $title = "Inscrever usuário";
        $form_path = 'functions/adm/newsletter/fun_ins_newsletter.php';
    }
?>

<section>
    <div class="sect-content">
        <div class="sect-content row jc-ce">
            <form action="<?php echo $home.$form_path; ?>" method="post" class="col g-16">
                <h2><?php echo $title ?></h2>
                <div class="col g-8">
                    <label for="usr_name">Nome</label>
                    <input type="text" name="usr_name" value="<?php if(isset($data['usr_name'])) {echo $data['usr_name'];} ?>" required>
                </div>

                <div class="col g-8">
                    <label for="usr_email">Email</label>
                    <input type="text" name="usr_email" value="<?php if(isset($data['usr_email'])) {echo $data['usr_email'];} ?>" required>
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    </div>
</section>