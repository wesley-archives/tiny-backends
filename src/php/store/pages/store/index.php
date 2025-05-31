<!DOCTYPE html>
<html lang="pt-br">
<head>
    <?php 
        require_once "../../config.php";
        require_once $path_includes."store/site/sct_head.php"; 
        require_once $path_functions."adm/database/fun_connection.php";

        if($_GET['title'] == null && $_GET['query'] != null) {
            $title = "Resultados para: ".$_GET['query'];
        } else if($_GET['title'] == null && $_GET['category'] != null) {
            $title = "Categoria: ".$_GET['category'];
        } else {
            $title = "Os produtos mais procurados do Brasil";
        }
    ?>
    <title>Cozzy | <?php echo $title; ?></title>
</head>
<body>
    <?php require_once $path_includes."store/site/sct_nav.php"; ?>
    <main>
        <?php 
            $_GET['flex_format'] = "flex-1";
            $_GET['display_format'] = "product-grid onres-row onres-fw-wrap";
            require_once $path_includes."store/products/sct_products.php";
        ?>
    </main>    
    <?php require_once $path_includes."store/site/sct_footer.php"; ?>
</body>
</html>