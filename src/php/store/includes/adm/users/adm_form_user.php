<?php   
    // get operation
    $operation = "ins";

    if(isset($_GET['edt'])) {
        $user_id = $_GET['edt'];
        $operation = "edt";
        $title = "Editar inscrito: ".$user_id;
        $form_path = 'functions/adm/users/fun_edt_user.php?edt='.$user_id;

        // query
        $sql = "select * from users where id = $user_id";
        try {
            $result = $connection->query($sql);
            $data = $result->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            die("Erro: <code>" . $e->getMessage() . "</code>");
        }
    } else {
        $title = "Cadastre um usuário";
        $form_path = 'functions/adm/users/fun_ins_user.php';
    }
?>

<section>
    <div class="sect-content row jc-ce">
        <form action="<?php echo $home.$form_path; ?>" method="post" class="col g-16">
            <h2><?php echo $title; ?></h2>
            
            <div class="col g-8">
                <label for="email">Nome completo</label>
                <input type="text" name="usr_fullname" required value="<?php if(isset($data['usr_fullname'])) {echo $data['usr_fullname'];} ?>">
            </div>
            <div class="col g-8">
                <label for="email">Usuario</label>
                <input type="text" name="usr_name" required value="<?php if(isset($data['usr_name'])) {echo $data['usr_name'];} ?>">
            </div>
            <div class="col g-8">
                <label for="email">E-mail</label>
                <input type="email" name="usr_email" required value="<?php if(isset($data['usr_email'])) {echo $data['usr_email'];} ?>">
            </div>

            <div class="col g-8">
                <label for="usr_pass">Senha</label>
                <input type="password" name="usr_pass" required value="<?php if(isset($data['usr_pass'])) {echo $data['usr_pass'];} ?>">
            </div>

            <?php if($_SESSION['usr_type'] == "adm") { ?>
            <div class="col g-8">
                <label for="usr_type">Tipo de usuário</label>
                <select name="usr_type">
                    <option value="adm">Administrador</option>
                    <option value="client">Cliente</option>
                </select>
            </div>
            <?php } ?>

            <div class="row g-8">
                <label for="usr_terms">Termos de uso</label>
                <input type="checkbox" name="usr_terms" value="yes" class="w-fc" required>
            </div>
            
            <button type="submit" class="btn-pri">Cadastrar</button>

            <?php if($_SESSION['usr_type'] == null) { ?>
            <div class="row g-8">
                <p>Já tem conta?</p>
                <a href="<?php echo $home.'pages/user/sign_in.php' ?>" class="td-underline">Entre</a>
            </div>
            <?php } ?>
        </form>
    </div>
</section>