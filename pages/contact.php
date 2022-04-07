<?php

if(isset($_POST['submit'])){

    $message = $_POST['message'];
    $subject = "You received feedback!";

    $mailTo = "cryptine@gator3009.hostgator.com";
    $headers = "From: My website";
    $txt = "User says ".$message;


    mail($mailTo, $subject, $txt, $headers);
    header("Location: reviewpage.html?mailsend");

}

?>