<nav>
    <div class="sect-content py-8 row g-24 jc-sb ai-ce">
        <div class="row g-48 ai-ce jc-fe">
            <a href="<?php echo $home; ?>">Cozzy.</a>
            <div class="row w-100 g-16 jc-ce ai-ce onres-d-none">
                <a href="<?php echo $home.'pages/store/?category=escritorio&title=Escritório'; ?>">Escritório</a>
                <a href="<?php echo $home.'pages/store/?category=quarto&title=Quarto'; ?>">Quarto</a>
                <a href="<?php echo $home.'pages/store/?category=sala de estar&title=Sala de Estar'; ?>">Sala de Estar</a>
                <a href="<?php echo $home.'pages/store/?category=sala de jantar&title=Sala de Jantar'; ?>">Sala de Jantar</a>
                <a href="<?php echo $home.'pages/store/?category=cozinha&title=Cozinha'; ?>">Cozinha</a>
                <a href="<?php echo $home.'pages/store/?category=jardim&title=Jardim'; ?>">Jardim</a>
            </div>
        </div>

        <div class="row g-48 ai-ce jc-fe">
            <form action="<?php echo $home."pages/store"; ?>" method="get" class="row g-0 w-fc">
                <input type="search" name="query" class="ipt-search">
                <button type="submit" class="btn-search">
                    <img src="<?php echo $home."src/assets/icons/icon_search.svg"; ?>" alt="Pesquisar">
                </button>
            </form>
            <div class="row g-8 ai-ce">
                <?php
                    if (isset($_SESSION['usr_name'])) {
                ?>       
                    <a href="<?php echo $home.'pages/user/profile.php' ?>">
                        <img src="<?php echo $home.'src/assets/icons/icon_user.svg' ?>" alt="Perfil" title="Perfil" class="h-1-5">
                    </a>
                <?php
                    } else {
                ?>
                    <a href="<?php echo $home.'pages/user/auth/sign_in.php' ?>">
                        <button class="btn-sec">Entrar</button>
                    </a>
                    <a href="<?php echo $home.'pages/user/auth/form_user.php' ?>">
                        <button class="btn-pri">Cadastrar</button>
                    </a>
                <?php
                    }
                ?>
                <a href="<?php echo $home.'pages/store/cart.php' ?>">
                    <img src="<?php echo $home.'src/assets/icons/icon_bag.svg' ?>" alt="Carrinho" title="Carrinho" class="h-1-5">
                </a> 
            </div>
        </div>

    </div>
</nav>