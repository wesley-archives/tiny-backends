<?php
    // base directory
    $root = $_SERVER['DOCUMENT_ROOT']."/";

    // relative path
    $path = $root."cozzy/";
    $path_includes = $path."includes/";
    $path_functions = $path."functions/";
    $path_pages = $path."pages/";

    // home directory
    $home = "http://localhost/cozzy/";

    // session start
    session_start();

    // desativa warnings
    error_reporting(0);
    ini_set('display_errors', 0);
?>