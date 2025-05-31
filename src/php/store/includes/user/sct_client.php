<div class="row g-48 fw-wrap">
    <div class="row flex-1 g-16 p-16 border-light-black br-8">
        <figure class="icon-medium">
            <img src="<?php echo $home."src/assets/icons/profile_sell.svg"; ?>" alt="Vendas" class="h-5">
        </figure>
        <div class="col g-4">
            <span class="fs-20 fw-600">Pedidos</span>
            <a href="<?php echo $home.'pages/user/orders/orders.php'; ?>">Pedidos realizados</a>
        </div>
    </div>
</div>

<div class="row g-48 fw-wrap">
    <div class="row flex-1 g-16 p-16 border-light-black br-8">
        <figure class="icon-medium">
            <img src="<?php echo $home."src/assets/icons/profile_account.svg"; ?>" alt="Conta" class="h-5">
        </figure>
        <div class="col g-4">
            <span class="fs-20 fw-600">Minha Conta</span>
            <a href="<?php echo $home.'pages/user/auth/form_user.php?edt='.$_SESSION['usr_id']; ?>">Editar perfil</a>
            <a href="<?php echo $home.'pages/user/adresses/adresses.php'; ?>">Meus endereços</a>
            <a href="<?php echo $home.'pages/user/contacts/contacts.php'; ?>">Meus contatos</a>
            <a href="<?php echo $home.'functions/user/auth/fun_del_usr.php'; ?>">Deletar conta</a>
            <a href="<?php echo $home.'functions/user/auth/fun_sign_out.php'; ?>">Sair</a>
        </div>
    </div>
</div