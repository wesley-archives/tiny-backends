<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title>Cozzy | Erro ao Entrar</title>
    <?php 
        require_once "../../../config.php";
        require_once $path_includes."store/site/sct_head.php"; 
        require_once $path_functions."adm/database/fun_connection.php";
    ?>
</head>
<body>
    <?php require_once $path_includes."store/site/sct_nav.php"; ?>
    <main class="jc-ce">
    <section>
        <div class="sect-content col ai-ce">
            <div class="col g-24">
                <h2>Erro!</h2>
                <div class="col g-8">
                    <p>E-mail ou senha inválidos</p>
                    <p>Preencha os campos, clique <a href='<?php echo $home.'pages/user/auth/sign_in.php'; ?>' class="td-underline">aqui</a></p>
                </div>
            </div>
        </div>
    </section>
    </main>
    <?php require_once $path_includes."store/site/sct_footer.php";?>
</body>
</html>