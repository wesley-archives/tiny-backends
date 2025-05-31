<?php
    // get query
    if(isset($_GET['edt'])) {
        $address_id = $_GET['edt'];
        $sql = "select * from adresses where id = '$address_id'";

        try {
            $result = $connection->query($sql);
            $data = $result->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            die("Erro: <code>" . $e->getMessage() . "</code>");
        }
    }

    // sect header
    if(isset($_GET['edt'])) {
        $title = "Editar Endereço: ".$address_id;
        $form_path = 'functions/user/adresses/fun_edt_address.php?edt='.$address_id;
    } else {
        $title = "Novo Endereço";
        $form_path = 'functions/user/adresses/fun_ins_address.php';
    }
?>

<section>
    <div class="sect-content">
        <div class="sect-content row jc-ce">
            <form action="<?php echo $home.$form_path; ?>" method="post" class="col g-16">
                <h2><?php echo $title ?></h2>
                <div class="col g-8">
                    <label for="address_cep">CEP</label>
                    <input type="text" name="address_cep" value="<?php if(isset($data['address_cep'])){ echo $data['address_cep'];} ?>" required>
                </div>

                <div class="col g-8">
                    <label for="address_address">Endereço</label>
                    <input type="text" name="address_address" value="<?php if(isset($data['address_address'])){ echo $data['address_address'];}  ?>" required>
                </div>

                <div class="col g-8">
                    <label for="address_num">Número</label>
                    <input type="text" name="address_num" value="<?php if(isset($data['address_num'])){ echo $data['address_num'];} ?>" required>
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    </div>
</section>