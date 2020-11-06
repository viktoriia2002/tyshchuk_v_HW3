<?php 
    include("connect.php");

    $query = "SELECT * FROM dishesData";

    $runQuery = $pdo->query($query);

    $result = array();

    while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
        $result[] = $row;
    }

    echo(json_encode($result));