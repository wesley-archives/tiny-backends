<section>
    <div class="sect-content">
        <div class="sect-header">
            <h2>Carrinho</h2>
        </div>

        <div class="col g-16">
            <?php
                $i = 0;
                try {
                    if (!empty($_SESSION['cart'])) {
                        foreach ($_SESSION['cart'] as $product_id) {
                            $sql = "select * from products where id = $product_id";
                            $result = $connection->query($sql);
                            $data = $result->fetchAll(PDO::FETCH_ASSOC);
                            foreach ($data as $row) {
                                echo "
                                    <div class='row g-16'>
                                        <figure class='img-box'>
                                        <img src='data:image/jpeg;base64,".base64_encode($row["product_pic"])."' alt='".$row['product_name']."' style='height:100px; aspect-ratio: 1/1;'>
                                        </figure>

                                        <div class='col g-8'>
                                            <span>".$row['product_name']."</span>
                                            <span>R$".$row['product_price']."</span>
                                            <a href='".$home."functions/store/cart/fun_del_cart.php?remove=".$i."'>Remover</a>
                                        </div>
                                    </div>
                                ";
                                $total += $row['product_price'];
                                $_SESSION['cart_total'] = $total;
                                $i++;
                            }
                    }
                } else {
                    echo "Seu carrinho está vazio!";
                }
                } catch (PDOException $e) {
                die("Erro: <code>" . $e->getMessage() . "</code>");
                }
            ?>
        </div>

        <div class="row pt-48">
            <?php 
                if ($total > 0) {
                    echo "Total do carrinho: R$".$total;
                } else {
                    echo "Total do carrinho: R$00.00";  
                }
            ?>
        </div>

        <div class="row g-16 pt-48">
            <a href="<?php echo $home."functions/store/cart/fun_clr_cart.php"; ?>">
                <button>Limpar carrinho</button>
            </a>
            <a href="<?php echo $home."pages/store/checkout.php"; ?>">
                <button>Pagamento</button>
            </a>
        </div>
    </div>
</section>