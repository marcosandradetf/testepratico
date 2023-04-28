<html>
<body>

    Nome: <?php echo $_POST["nome"]; ?><br>
    Email: <?php echo $_POST["email"]; ?><br>
    Mensagem: <?php echo $_POST["msg"]; ?><br>


       
<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["arquivo"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

if ($_FILES['arquivo']['error'] == 4){
    echo "Nenhum arquivo enviado";
} else {

    // Verifica se o arquivo de imagem é uma imagem real ou uma imagem falsa
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["arquivo"]["tmp_name"]);
    if($check !== false) {
      echo "File is an image - " . $check["mime"] . ".";
      $uploadOk = 1;
    } else {
      echo "O arquivo não é uma imagem.";
      $uploadOk = 0;
    }
  }
  
  // Verifica se o arquivo já existe
  if (file_exists($target_file)) {
    echo "O arquivo já foi enviado antes.";
    $uploadOk = 0;
    echo '<td><a href="http://www.marcostulio.in/uploads/' . htmlspecialchars( basename( $_FILES["arquivo"]["name"])) . '"> Faça o Download aqui </a></td>';
    
  }
  
  // Verifica o tamanho do arquivo
  if ($_FILES["arquivo"]["size"] > 500000) {
    echo "Desculpe, seu arquivo é muito grande.";
    $uploadOk = 0;
  }
  
  // Valida os formatos de arquivo
  if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
  && $imageFileType != "gif" ) {
    echo "Desculpe, somente arquivos JPG, JPEG, PNG & GIF são aceitos.";
    $uploadOk = 0;
  }
  
  // Validacao uploadOK
  if ($uploadOk == 0) {
    echo "";
  // if everything is ok, try to upload file
  } else {
    if (move_uploaded_file($_FILES["arquivo"]["tmp_name"], $target_file)) {
      echo "The file ". htmlspecialchars( basename( $_FILES["arquivo"]["name"])). " has been uploaded.";
      
      echo '<td><a href="http://www.marcostulio.in/uploads/' . htmlspecialchars( basename( $_FILES["arquivo"]["name"])) . '">Download</a></td>';
      
    } else {
      echo "Erro: não foi possível enviar seu arquivo.";
    }
  }

}

?>

</body>
</html>