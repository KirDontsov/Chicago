<?php
    $msg_box = ""; // в этой переменной будем хранить сообщения формы
    $errors = array(); // контейнер для ошибок
    // проверяем корректность полей
    if($_POST['user_name3'] == "")    $errors[] = "Поле 'Ваше имя' не заполнено!";
    if($_POST['user_mail3'] == "") $errors[] = "Поле 'Номер телефона' не заполнено!";
 
    // если форма без ошибок
    if(empty($errors)){     
        // собираем данные из формы
        $message3  = "Имя пользователя: " . $_POST['user_name3'] . "<br/>";
        $message3 .= "Email пользователя: " . $_POST['user_mail3'] . "<br/>";     
        send_mail($message3); // отправим письмо
        // выведем сообщение об успехе
        $msg_box = "<span style='color: green;'>Сообщение успешно отправлено!</span>";
    }else{
        // если были ошибки, то выводим их
        $msg_box = "";
        foreach($errors as $one_error){
            $msg_box .= "<span style='color: red;'>$one_error</span><br/>";
        }
    }
 
    // делаем ответ на клиентскую часть в формате JSON
    echo json_encode(array(
        'result' => $msg_box
    ));
     
     
    // функция отправки письма
    function send_mail($message3){
        // почта, на которую придет письмо
        $mail_to = "kir.dontsov@gmail.com"; 
        // тема письма
        $subject = "Подписка на рассылку";
         
        // заголовок письма
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: Подписка на рассылку <no-reply@chicago-school.com>\r\n"; // от кого письмо
         
        // отправляем письмо 
        mail($mail_to, $subject, $message3, $headers);
    }
     
?>