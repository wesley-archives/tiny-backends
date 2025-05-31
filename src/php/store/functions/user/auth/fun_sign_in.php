<?php
    // setup
    require_once "../../../config.php";
    require_once $path_functions."adm/database/fun_connection.php"; 
    session_start();
    
    try {
        if(isset($_POST['usr_email']) && isset($_POST['usr_pass'])){
            $usr_email = $_POST['usr_email'];
            $usr_pass = $_POST['usr_pass'];
            
            $sql = "select * from users where usr_email='$usr_email' and usr_pass='$usr_pass'";
            $result = $connection->query($sql);
            $data = $result->fetchAll(PDO::FETCH_ASSOC);
    
            if($data != null) {
                foreach ($data as $row) {
                    $_SESSION['status']='Entrou';
                    $_SESSION['usr_name']=$row['usr_name'];
                    $_SESSION['usr_type'] = $row['usr_type'];
                    $_SESSION['usr_id'] = $row['id'];
                    
                    echo "<p>Login realizado com sucesso! ".$_SESSION['usr_name']."</p>";
                }
                
                // return to home
                header("location: $home");
            } else {
                require $path_includes."adm/validation/sct_invalid_sign_in.php";
            }
        }
    } catch (PDOException $e) {
        die("Erro: <code>" . $e->getMessage() . "</code>");
    }
?>