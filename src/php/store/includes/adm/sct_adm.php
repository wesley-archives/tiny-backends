<div class="row g-48 fw-wrap">
    <div class="row flex-1 g-16 p-16 border-light-black br-8">
        <figure class="icon-medium">
            <img src="<?php echo $home."src/assets/icons/profile_sell.svg"; ?>" alt="Vendas" class="h-5">
        </figure>
        <div class="col g-4">
            <span class="fs-20 fw-600">Vendas</span>
            <a href="<?php echo $home.'pages/adm/orders/adm_orders.php'; ?>">Ver Vendas</a>
        </div>
    </div>

    <div class="row flex-1 g-16 p-16 border-light-black br-8">
        <figure class="icon-medium">
            <img src="<?php echo $home."src/assets/icons/profile_stock.svg"; ?>" alt="Estoqe" class="h-5">
        </figure>
        <div class="col g-4">
            <span class="fs-20 fw-600">Estoque</span>
            <a href="<?php echo $home.'pages/adm/products/adm_products.php'; ?>">Ver Produtos</a>
            <a href="<?php echo $home.'pages/adm/products/adm_form_product.php'; ?>">Adicionar produto</a>
        </div>
    </div>

    <div class="row flex-1 g-16 p-16 border-light-black br-8">
        <figure class="icon-medium">
            <img src="<?php echo $home."src/assets/icons/profile_users.svg"; ?>" alt="Usuarios" class="h-5">
        </figure>
        <div class="col g-4">
            <span class="fs-20 fw-600">Usuários</span>
            <a href="<?php echo $home.'pages/adm/users/adm_users.php'; ?>">Ver Usuários</a>
            <a href="<?php echo $home.'pages/adm/users/adm_form_user.php'; ?>">Adicionar Usuário</a>
        </div>
    </div>
</div>

<div class="row g-48 fw-wrap">
    <div class="row flex-1 g-16 p-16 border-light-black br-8">
        <figure class="icon-medium">
            <img src="<?php echo $home."src/assets/icons/profile_sell.svg"; ?>" alt="Vendas" class="h-5">
        </figure>
        <div class="col g-4">
            <span class="fs-20 fw-600">Endereços</span>
            <a href="<?php echo $home.'pages/adm/adresses/adm_adresses.php'; ?>">Ver Endereços</a>
            <a href="<?php echo $home.'pages/adm/adresses/adm_form_address.php'; ?>">Adicionar Endereços</a>
        </div>
    </div>

    <div class="row flex-1 g-16 p-16 border-light-black br-8">
        <figure class="icon-medium">
            <img src="<?php echo $home."src/assets/icons/profile_stock.svg"; ?>" alt="Estoqe" class="h-5">
        </figure>
        <div class="col g-4">
            <span class="fs-20 fw-600">Contatos</span>
            <a href="<?php echo $home.'pages/adm/contacts/adm_contacts.php'; ?>">Ver Contatos</a>
            <a href="<?php echo $home.'pages/adm/contacts/adm_form_contact.php'; ?>">Adicionar Contatos</a>
        </div>
    </div>

    <div class="row flex-1 g-16 p-16 border-light-black br-8">
        <figure class="icon-medium">
            <img src="<?php echo $home."src/assets/icons/profile_users.svg"; ?>" alt="Usuarios" class="h-5">
        </figure>
        <div class="col g-4">
            <span class="fs-20 fw-600">Newsletter</span>
            <a href="<?php echo $home.'pages/adm/newsletter/adm_newsletter.php'; ?>">Ver Inscritos</a>
            <a href="<?php echo $home.'pages/adm/newsletter/adm_form_newsletter.php'; ?>">Inscrever Usuário</a>
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
</div>