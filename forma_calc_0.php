<?php
$error = '';
if ($_POST) { // если передан массив POST
    foreach($_POST['select'] as $select) {
            echo $select."<br>";
    };
    foreach($_POST['select2'] as $select2) {
            echo $select2."<br>";
    };
    foreach($_POST['select3'] as $select3) {
            echo $select3."<br>";
    };
	$dostavka = htmlspecialchars($_POST["dostavka"]);
	$name_company = htmlspecialchars($_POST["name_company"]);
	$name_face = htmlspecialchars($_POST["name_face"]);
	$name_email = htmlspecialchars($_POST["name_email"]);
	$name_phone = htmlspecialchars($_POST["name_phone"]);
	$message = htmlspecialchars($_POST["message"]);
}    


if ($select=='' or $select2=='' or $select3=='' or $name_company=='' or $name_face=='' or $name_email=='' or $name_phone=='' or $message=='' or $dostavka=='') {    /* Проверка на пустые поля*/
	$error='Заполните необходимые поля';
}      
else {			
	$femail = 'noreply@mydomain.ru';
	$address = 'elena.for.job.2015@yandex.ru';		/*Тут указіваем E-mail, куда будет отправляться письмо */
	
	$sub="Отзыв с сайта";
	$mes = "
		Опции: $select, $select2, $select3
		Доставка:  $dostavka
        Компания: $name_company
        Представитель компании: $name_face
        Контактный email: $name_email
        Контактный телефон: $name_phone
        Комментарий: $message";
	
	$sub.=' mydomain';
	
	$sub = "=?utf-8?B?" . base64_encode($sub) . "?=";
	
	
	
	$verify = mail($address, $sub ,$mes, "Content-type:text/html; charset = utf-8\r\nFrom:$femail");
            
}

if ((strlen($error) == 0) && !$verify) {
    $error = 'Заявка не отправлена';
}
if(strlen($error)>0){
	$result = array('error' => $error);
} else {
    $result = array('result' => 1);
}
	header("Content-type: application/json; charset=UTF-8");
    header("Cache-Control: must-revalidate");
    header("Pragma: no-cache");
    header("Expires: -1");
    print json_encode($result);
?>