<script type="text/javascript" src="js/db.js"></script>
<script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
<?php
$myFile = "data.json";
$data = $_GET['data'];
echo $data;
$fh = fopen($myFile, 'w') or die("can't open file");
fwrite($fh, $data);
fclose($fh);
?>