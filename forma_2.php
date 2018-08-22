<?php
$error = '';
if ($_POST) { // если передан массив POST
	$name_q = htmlspecialchars($_POST["name_q"]); // пишем данные в переменные и экранируем спецсимволы
	$phone_q = htmlspecialchars($_POST["phone_q"]);
	$question = htmlspecialchars($_POST["question"]);
}    


if ($name_q=='' or $phone_q=='' or $question=='') {    /* Проверка на пустые поля*/
	$error='Заполните необходимые поля';
}      
else {			
	$femail = 'noreply@mydomain.ru';
	$address = 'elena.for.job.2015@yandex.ru';		/*Тут указіваем E-mail, куда будет отправляться письмо */
	
	$sub="Отзыв с сайта";
	$mes = "
		<p>Имя: </p> $name_q <hr>
		Телефон:  $phone_q <hr>
        Вопрос: $question";
	
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