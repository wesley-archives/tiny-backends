<?php
    $usr_id = $_SESSION['usr_id'];
    $usr_name = $_SESSION['usr_name'];
    $usr_type = $_SESSION['usr_type'];
?>

<section>
    <div class="sect-content">
        <div class="sect-header">
            <h2>Perfil</h2>
            <div class="col g-24">
                <h4><?php echo $usr_name ?></h4> 
                    <?php if ($usr_type == "adm") {
                        require_once $path_includes."adm/sct_adm.php";
                    } else {
                        require_once $path_includes."user/sct_client.php";
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>