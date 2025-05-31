<?php
// query info
$product_id = $_GET['id'];
$sql = "select * from products where id = $product_id";

try {
    $result = $connection->query($sql);
    $data = $result->fetch(PDO::FETCH_ASSOC);

    // product info
    $product_id = $data['id'];
    $product_name = $data['product_name'];
    $product_desc = $data['product_desc'];
    $product_pic = $data['product_pic'];
    $product_price = $data['product_price'];
    $product_quantity = $data['product_quantity'];

} catch (PDOException $e) {
    die("Erro: <code>" . $e->getMessage() . "</code>");
}

// sect header
$title = $product_name;
?>

<section>
    <div class="sect-content">
        <div class="sect-header"></div>
        <div class="row g-48 jc-ce onres-fw-wrap">
            <figure class="img-box img-medium">
                <img src="<?php echo 'data:image/jpeg;base64,'.base64_encode($product_pic); ?>" alt="Imagem do produto" class="onres-w-100">
            </figure>

            <div class="col g-16 flex-1">
                <h4><?php echo $product_name; ?></h4>
                <span class="fs-20"><?php echo "R$".$product_price; ?></span>
                <a href="<?php echo $home.'functions/store/cart/fun_ins_cart.php?add=' . $product_id; ?>" title="Adicionar ao carrinho"><button>Adicionar ao carrinho</button></a>
                <p class="pt-24"><?php echo $product_desc; ?></p>
            </div>
            
        </div>
    </div>
</section>