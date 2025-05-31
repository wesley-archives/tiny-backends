<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title>Cozzy | Permissão Inválida!</title>
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
                    <p>Você não tem permissão para acessar esta página</p>
                    <p>Por favor volte para a página <a href='<?php echo $home; ?>' class="td-underline">inicial</a>.</p>
                </div>
            </div>
        </div>
    </section>
    </main>
    <?php require_once $path_includes."store/site/sct_footer.php";?>
</body>
</html>