<?php $CURRENT_PAGE = basename($_SERVER["REQUEST_URI"]);?>

<!DOCTYPE html>
<html>
<head>
	<?php include("../../includes/head-tag-contents.php");?>
</head>
<body>

<?php include("../../includes/header.php");?>
<?php include("../../includes/navigation.php");?>

<div class="container" id="main-content">
	<h2>Itsetuntemus-valikko</h2>
	<p>Tältä sivulta valkataan mitä tehtävää Itsetuntemus-työelämävalmiudesta tehdään. Klikkaile alta yksittäinen tehtävä.</p>
	
	<div class="tehtavavalikko">
		<a href="minuntarinani/">Minun tarinani -tehtävä</a>
	</div>
</div>

<?php include("../../includes/footer.php");?>

</body>
</html>