<!DOCTYPE html>
<html lang="hu">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content=<?php $token = csrf_token(); echo $token; ?>>
    <script
      src="https://code.jquery.com/jquery-3.6.1.js"
      integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
      crossorigin="anonymous"
    ></script>
    <script src="/../js/app2.js" type="module"></script>
    <link rel="stylesheet" href="/../css/style.css" />
    <title>Dervalics Attila</title>
  </head>
  <body>
    <nav>
      <ul>
        <div>
          <li><a href="admin.php">Admin</a></li>
          <li><a href="index.php">Fooldal</a></li>
        </div>
        <div class="kosar"><a href="kosar.php">KOSÁR</a></div>
      </ul>
    </nav>
    <div class="kartyak"></div>
    <div class="kosarTartalom"></div>
  </body>
</html>
