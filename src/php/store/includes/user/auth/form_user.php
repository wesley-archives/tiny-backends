<?php
    // sql query
    $usr_id = $_SESSION['usr_id'];

    // verify operation
    if(isset($_GET['edt'])) {
        // page info
        $form_title = "Editar Perfil";
        $button_title = "Salvar";

        // sql
        $sql = "select * from users where id = $usr_id";
        try {
            $result = $connection->query($sql);
            $data = $result->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            die("Erro: <code>" . $e->getMessage() . "</code>");
        }

        // form path
        $form_path = 'functions/user/auth/fun_edt_usr.php?edt='.$usr_id;
    } else {
        // page info
        $form_title = "Cadastre-se";
        $button_title = "Cadastrar";

        // form path
        $form_path = 'functions/user/auth/fun_sign_up.php';
    }
?>

<section>
    <div class="sect-content row jc-ce">
        <form action="<?php echo $home.$form_path; ?>" method="post" class="col g-16">
            <h2><?php echo $form_title; ?></h2>
            
            <div class="col g-8">
                <label for="email">Nome completo</label>
                <input type="text" name="usr_fullname" required value="<?php echo $data['usr_fullname']; ?>">
            </div>
            <div class="col g-8">
                <label for="email">Usuario</label>
                <input type="text" name="usr_name" required value="<?php echo $data['usr_name']; ?>">
            </div>
            <div class="col g-8">
                <label for="email">E-mail</label>
                <input type="email" name="usr_email" required value="<?php echo $data['usr_email']; ?>">
            </div>

            <div class="col g-8">
                <label for="usr_type">Tipo de usuário</label>
                <select name="usr_type">
                    <option value="adm">Administrador</option>
                    <option value="client">Cliente</option>
                </select>
            </div>

            <div class="col g-8">
                <label for="usr_pass">Senha</label>
                <input type="password" name="usr_pass" required>
            </div>
            
            <button type="submit" class="btn-pri"><?php echo $button_title; ?></button>
        </form>
    </div>
</section>