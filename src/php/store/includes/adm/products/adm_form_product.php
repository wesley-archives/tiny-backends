<?php
    if(isset($_GET['edt'])) {
        // get product info
        $product_id = $_GET['edt'];
        $sql_product = "select * from products where id = ".$product_id;
        $result_product = $connection->query($sql_product);
        $data_product = $result_product->fetch(PDO::FETCH_ASSOC);

        // set form info
        $form_title = "Editar o produto";
        $form_path = "functions/adm/product/fun_edt_product.php?edt=".$product_id;
        $form_button = "Atualizar";
    } else {
        // set form info
        $form_title = "Adicione um produto";
        $form_path = "functions/adm/product/fun_ins_product.php";
        $form_button = "Cadastrar";
    }
?>
<section>
    <div class="sect-content row jc-ce">
    <form action="<?php echo $home.$form_path; ?>" method="post" class="col g-16">
        <h2><?php echo $form_title; ?></h2>
        <div class="col g-8">
            <label for="product_pic">Foto do produto</label>
            <input type="file" accept="image/*" name="product_pic" placeholder="Foto do produto" class="px-16 py-32 cursor-pointer">
        </div>
        <div class="col g-8">
            <label for="product_name">Nome do produto</label>
            <input type="text" name="product_name" value="<?php echo $data_product['product_name'] ?>" required>
        </div>
        <div class="col g-8">
            <label for="product_desc">Descrição</label>
            <textarea name="product_desc" cols="30" rows="10" required><?php echo $data_product['product_desc'] ?></textarea>
        </div>
        <div class="col g-8">
            <label for="product_cat">Categorias <small>(separe com ",")</small></label>
            <input type="text" name="product_cat" value="<?php echo $data_product['product_cat'] ?>" required></textarea>
        </div>
        <div class="col g-8">
            <label for="product_price">Preço</label>
            <input type="text" name="product_price" value="<?php echo $data_product['product_price'] ?>" required>
        </div>
        <div class="col g-8">
            <label for="product_quantity">Quantidade</label>
            <input type="text" name="product_quantity" value="<?php echo $data_product['product_quantity'] ?>" required>
        </div>
        <button type="submit"><?php echo $form_button; ?></button>
    </form>
    </div>
</section>