<?php
    if(isset($_POST['submit'])){
        $email = $_POST['email'];
        $message = $_POST['message'];
        $sendTo = 'index050700@gmail.com';

        $header = 'From: '.$email;
        $txt = "you have received an email from ".$email.".\n\n".$message;

        mail($sendTo, "Question", $txt, $header);
        header("Location: index.php/?mailsend")
    }
?>