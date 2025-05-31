<?php
    // section header
    $title = $_GET['title'];
    $subtitle = $_GET['subtitle'];
    $paragraph = $_GET['paragraph'];

    // display format
    $flex_format = $_GET['flex_format'];
    $display_format = $_GET['display_format'];

    $sql = "select * from products";

    // get query
    if(isset($_GET['query'])) {
        $title = "Resultados para: ".$_GET['query'];
        $subtitle = "";
        $paragraph = "";
        $query = "where product_name like '%".$_GET['query']."%' or product_cat like '%".$_GET['query']."%'";
    }
    if(isset($_GET['category'])) {
        $category = "where product_cat like '%".$_GET['category']."%'";
    }
    if(isset($_GET['order'])) {
        $order = "order by ".$_GET['order'];
    }
    if(isset($_GET['max'])) {
        $max = "limit ".$_GET['max'];
    }

    $sql = "select * from products $query $category $order $max";
?>

<section>
    <div class="sect-content">
        <div class="sect-header">
            <div class="col g-16 ta-ce">
                <span class="txt-spaced-light fs-14"><?php if(isset($subtitle)) {echo $subtitle;} ?></span>
                <h2><?php if(isset($title)) {echo $title;} ?></h2>
                <p><?php if(isset($paragraph)) {echo $paragraph;} ?></p>
            </div>
        </div>
        <div class="g-48 pb-24 <?php echo $display_format; ?>">
            <?php
            try {
                $result = $connection->query($sql);
                $data = $result->fetchAll(PDO::FETCH_ASSOC);
                foreach ($data as $row) {
            ?>
                    <div class="<?php echo $flex_format; ?>">
                        <a href="<?php echo $home.'pages/store/product.php?id='.$row['id'].'&title='.$row['product_name']; ?>" class="col g-8">
                            <figure class="img-box float-box">
                                <img src="<?php echo 'data:image/jpeg;base64,'.base64_encode($row["product_pic"]); ?>" alt="Imagem do produto" class="w-100">
                                <a href="<?php echo $home.'functions/store/cart/fun_ins_cart.php?add='.$row['id']; ?>" title="Adicionar ao carrinho" class="float-button">
                                    <img src="<?php echo $home.'src/assets/icons/icon_bag.svg' ?>" alt="Adicionar ao carrinho">
                                </a>
                            </figure>
                        </a>
                        <div class="pt-16">
                            <p><?php echo $row['product_name']; ?></p>
                            <div class="row g-8 py-8 ai-ce">
                                <span>
                                    <?php echo "R$".$row['product_price']; ?>
                                </span>
                                <a href="<?php echo $home.'pages/store/product.php?id='.$row['id'].'&title='.$row['product_name']; ?>" title="Ver produto" class="label-small">Ver</a>
                                <a href="<?php echo $home.'functions/store/cart/fun_ins_cart.php?add='.$row['id']; ?>" title="Adicionar ao carrinho" class="label-small">carrinho</a>
                            </div>
                        </div>
                    </div>
            <?php
                }
            } catch (PDOException $e) {
                die("Erro: <code>" . $e->getMessage() . "</code>");
            }
            ?>
        </div>
    </div>
</section>