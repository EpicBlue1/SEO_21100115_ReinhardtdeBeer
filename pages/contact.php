<?php

if(isset($_POST['submit'])){

    $message = $_POST['textArea'];

    $mailTo = "21100115@virtualwindow.co.za";
    $headers = "From: My website";
    $txt = $message;


    mail($mailTo, $submit, $headers);
    header("Location: reviewpage.html?mailsend");

}

    


?>

<?php

if(isset($_POST['submit'])){

    $message = $_POST['textArea'];
    $subject = "Cool Beans!";

    $mailTo = "cryptine@gator3009.hostgator.com";
    $headers = "From: My website";
    $txt = $message;


    mail($mailTo, $txt, $headers);
    header("Location: reviewpage.html?mailsend");

}

    


?>