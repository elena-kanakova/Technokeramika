<?php
$error = '';
if ($_POST) { // если передан массив POST
  $select = $_POST["select"]; // пишем данные в переменные и экранируем спецсимволы
  $select2 = $_POST["select2"];
  $select3 = $_POST["select3"];
  $dostavka = htmlspecialchars($_POST["dostavka"]);
  $name_company = htmlspecialchars($_POST["name_company"]);
  $name_face = htmlspecialchars($_POST["name_face"]);
  $name_email = htmlspecialchars($_POST["name_email"]);
  $name_phone = htmlspecialchars($_POST["name_phone"]);
  $message = htmlspecialchars($_POST["message"]);
}    


if ($select=='' or $select2=='' or $select3=='' or $dostavka=='' or $name_company=='' or $name_face=='' or $name_email=='' or $name_phone=='') {    /* Проверка на пустые поля*/
  $error='Заполните необходимые поля';
}      
else {			
  $femail = 'noreply@mydomain.ru';
  $address = 'elena.for.job.2015@yandex.ru';		/*Тут указываем E-mail, куда будет отправляться письмо */
  
  $sub="Заказ на расчет стоимости";
  $str_select='';
  foreach($select as $select_item){
	$str_select .= $select_item.'<br/>';
  }
  $str_select2='';
  foreach($select2 as $select_item){
	$str_select2 .= $select_item.'<br/>';
  }
  $str_select3='';
  foreach($select3 as $select_item){
	$str_select3 .= $select_item.'<br/>';
  }
  $mes = "
        <table>
        <tr>
            <td style='margin-right:20px;'>
                <span style='font-weight:600; color:#f58132;'>Категория:</span>
            </td>
            <td style='margin-right:20px;'>
                <span style='font-weight:600; color:#f58132;'>Количество:</span>
            </td>
            <td>
                <span style='font-weight:600; color:#f58132;'>Категория:</span>
            </td>
        </tr>
        <tr>
            <td style='margin-right:20px; text-align: center;'> 
                $str_select
            </td>
            <td style='margin-right:20px; text-align: center;'>
                $str_select2
            </td>
            <td style='text-align: center;'>
                $str_select3
            </td>
        </tr>
        </table>
        <p><span style='font-weight:600; color:#f58132;'>Доставка:</span>  $dostavka</p>
        <p><span style='font-weight:600; color:#f58132;'>Компания:</span> $name_company</p>
        <p><span style='font-weight:600; color:#f58132;'>Представитель компании:</span> $name_face</p>
        <p><span style='font-weight:600; color:#f58132;'>Контактный email:</span> $name_email</p>
        <p><span style='font-weight:600; color:#f58132;'>Контактный телефон:</span> $name_phone</p>
        <p><span style='font-weight:600; color:#f58132;'>Комментарий:</span> $message</p>";
  
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