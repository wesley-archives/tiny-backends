<?php
    // setup
    require_once "../../../config.php";
    require_once $path_functions."adm/database/fun_connection.php"; 
    
    try {
        if(isset($_POST['usr_name']) && isset($_POST['usr_email'])){
            // set user variables
            $name = $_POST['usr_name'];
            $email = $_POST['usr_email'];
            
            // sql query
            $newsletter = "
                insert into newsletter (usr_name, usr_email) 
                values ('$name', '$email');
            ";
            $result = $connection->query($newsletter);
            $data = $result->fetch(PDO::FETCH_ASSOC);

            // return to home
            header("location: $home");
        }
        else{
            echo "Erro ao se cadastrar";
        }
    }
    catch(PDOException $i) {
        die("Erro: <code>".$i->getMessage()."</code>");
    } 
?>