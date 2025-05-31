<section>
    <div class="sect-content">
        <div class="sect-header pb-48">
            <h2>Finalizar Compra</h2>
        </div>

        <div class="col g-24">
            <div class="col g-16">
                <h5>Total do carrinho</h5>
                <p><?php 
                    if ($_SESSION['cart_total'] != null) {
                        echo "R$".$_SESSION['cart_total']; 
                    } else {
                        echo "Seu carrinho esta vazio";
                    }
                ?></p>
            </div>    

            <form action="<?php echo $home."functions/user/order/fun_ins_order.php"; ?>" method="post" class="col g-48">
                <fieldset class="col g-16 b-none">
                    <h5 class="">Metodo de pagamento</h5>
                    <div class="row jc-sb">
                        <label for="pix" class="flex-1">PIX</label>
                        <input type="radio" id="pix" name="payment_method" value="pix" class="w-fc" required>
                    </div>

                    <div class="row jc-sb">
                        <label for="boleto" class="flex-1">Boleto bancario</label>
                        <input type="radio" id="boleto" name="payment_method" value="boleto" class="w-fc" required>
                    </div>

                    <div class="row jc-sb">
                        <label for="debito" class="flex-1">Cartao de Debito</label>
                        <input type="radio" id="debito" name="payment_method" value="debito" class="w-fc" required>
                    </div>

                    <div class="row jc-sb">
                        <label for="credito" class="flex-1">Cartao de credito</label>
                        <input type="radio" id="credito" name="payment_method" value="credito" class="w-fc" required>
                    </div>
	    	    </fieldset>

                <div class="row jc-sb">
                    <label for="terms" class="flex-1"><small>Ao comprar voce aceita nossos termos de uso e privacidade</small></label>
                    <input type="checkbox" name="terms" id="terms" class="w-fc" required>
                </div>
                
                <div class="row g-16">
                    <a href="<?php echo $home."functions/store/cart/fun_clr_cart.php"; ?>">
                        <button type="button">Limpar carrinho</button>
                    </a>
                    <button>Finalizar compra</button>
                </div>
            </form>
        </div>
    </div>
</section>