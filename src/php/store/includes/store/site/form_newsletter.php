<section class="bkg-accent-white m-0 p-48" style="border-bottom: solid 1px var(--light-black);">
    <div class="sect-content">
        <div class="col g-24">
            <h4>Assine nossa newsletter e fique por dentro da novidades</h4>
            
            <form action="<?php echo $home.'functions/user/newsletter/fun_ins_newsletter.php' ?>" method="post" class="row w-100 g-16 onres-fw-wrap">
                <input type="text" name="usr_name" placeholder="Nome" required class="color-black">
                <input type="email" name="usr_email" placeholder="E-mail" required class="color-black">
                <button type="submit" class="bkg-white">Assinar</button>
            </form>
        </div>
    </div>
</section>