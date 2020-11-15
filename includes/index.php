<?php
    include("connect.php");
    include("functions.php");

    if(isset($_GET["id"])){
       $targetID = $_GET["id"];
       $result = getSingleDishes($pdo, $targetID);

       return $result;
    } 
        else {
            $allDishes = getAllDishes($pdo);

            return $allDishes;
    }
