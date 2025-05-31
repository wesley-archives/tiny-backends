<!DOCTYPE html>
<html lang="pt-br">
<head>
    <?php 
        require_once "../../../config.php";
        require_once $path_includes."store/site/sct_head.php"; 
        require_once $path_functions."adm/database/fun_connection.php";
    ?>
    <title>Cozzy | Endereços </title>
</head>
<body>
    <?php require_once $path_includes."store/site/sct_nav.php"; ?>
    <main>
        <?php 
            if($_SESSION['usr_name'] != null) {
                require $path_includes."user/adresses/form_address.php"; 
            } else {
                require_once $path_includes."adm/validation/sct_invalid_permission.php";
            }
        ?>
    </main>
    <?php require $path_includes."store/site/sct_footer.php"; ?>
</body>
</html>