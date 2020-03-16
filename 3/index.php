<?php
//php 7.0.8


//Задание 3.1
function a($sum,$time,$percent) {
    return $sum + ($sum * $percent / 100 / 12 * $time);
}

a(100000,12,10);


//задание 3.2
function getMounth($day, $mounth)
{
    $arr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    $mounthStr = $arr[$mounth - 1];


    if(mb_substr($mounthStr, -1) == 'ь'){
        $mounthStr = mb_substr($mounthStr, 0, -1) . 'я';
    }else{
        $mounthStr = $mounthStr . 'а';
    }

    return '<br>' . $day . ' ' . $mounthStr;
}

getMounth(31, 12);


//задание 3.3
if($_POST){
    $count = 0;
    $first = $_POST['first'];
    $second = $_POST['second'];
    $action = $_POST['action'];

    switch ($action){
        case '+':
            $count = $first + $second;
            break;
        case '-':
            $count = $first - $second;
            break;
        case '*':
            $count = $first * $second;
            break;
        case '/':
            $count = $first / $second;
    }
}


//Задание 3.5

function arrowDeg($hours, $minutes) {
    if($hours > 12){
        $hours = $hours - 12;
    }
    if($hours == 12){
        $hours = 0;
    }
    $degMinutes = $minutes * 6;
    $degHours = $hours * 30 + (30 * ($degMinutes /360));

    return $degMinutes - $degHours;
}



?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<form method="POST" name="form">
    <input type="text" name="first">
    <select name="action" id="">
        <option value="+">Выберите операцию</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <input type="text" name="second">
    <span>= <? echo $count?></span>
    <button> Посчитать</button>
</form>

</body>
</html>
