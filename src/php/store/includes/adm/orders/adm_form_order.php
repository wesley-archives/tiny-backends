<?php  
    // get query
    $order_id = $_GET['edt'];
    $sql = "select * from orders where id = $order_id";
    
    try {
        $result = $connection->query($sql);
        $data = $result->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        die("Erro: <code>" . $e->getMessage() . "</code>");
    }

    // sect header
    $title = "Editar venda: ".$order_id;
?>

<section>
    <div class="sect-content">
        <div class="sect-content row jc-ce">
            <form action="<?php echo $home.'functions/adm/order/fun_edt_order.php?edt='.$order_id; ?>" method="post" class="col g-16">
                <h2><?php echo $title ?></h2>
                <div class="col g-8">
                    <label for="payment_method">Método de Pagamento</label>
                    <input type="text" name="payment_method" value="<?php echo $data['order_payment_method'] ?>" required>
                </div>

                <div class="col g-8">
                    <label for="total">Total</label>
                    <input type="text" name="total" value="<?php echo $data['order_amount'] ?>" required>
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    </div>
</section>