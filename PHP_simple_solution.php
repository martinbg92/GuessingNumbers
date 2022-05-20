<HTML LANG="es">
<FORM ACTION="tutu.php" METHOD="GET">
<?php
if (!isset($_GET['numero'])) {
print ("Número <input type=text name=numero>\n");
print ("<input type=submit value=Enviar>");
}
else
{  
$operaciones=0;
$min=1;
$max=10000000000;
$encontrado=0;
if ($_GET['numero']!="" && intval($_GET['numero']>=$min) && intval($_GET['numero'])<=$max) {

while ($encontrado==0)
{
  $operaciones++;
  if ($_GET['numero']>($max+$min)/2)
  {
  $min=($max+$min)/2;
  }
  if ($_GET['numero']<($max+$min)/2)
  {
  $max=($max+$min)/2;
  }
  if ($_GET['numero']==($max+$min)/2)
  {
  $encontrado=1;
  }
}
print ('El nº es: '.($max+$min)/2);
print ('<br>Adivinado en: '.$operaciones.' operaciones');

}
else
{
print ("Número no válido");
}
}
?>