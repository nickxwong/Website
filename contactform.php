<?php 

$name = $_POST['name'];
$mailfrom = $_POST['email'];
$message = $_POST['message'];

$mailto = "nicolaswong01@gmail.com";
$subject = "You have a new message from your website!";
$body .= $name." (".$mailfrom.") just sent you a message:\n\n".$message;

mail($mailto, $subject, $body);

