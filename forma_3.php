<?php
$error = '';
if ($_POST) { // если передан массив POST
	$name_p = htmlspecialchars($_POST["name_p"]); // пишем данные в переменные и экранируем спецсимволы
	$email_p = htmlspecialchars($_POST["email_p"]);
}    


if ($name_p=='' or $email_p=='') {    /* Проверка на пустые поля*/
	$error='Заполните необходимые поля';
}      
else {			
	$femail = 'noreply@mydomain.ru';
	$address = 'elena.for.job.2015@yandex.ru';		/*Тут указіваем E-mail, куда будет отправляться письмо */
	
	$sub="Отзыв с сайта";
	$mes = "
		Имя: $name_p <hr>
		email: $email_p <hr>";
	
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