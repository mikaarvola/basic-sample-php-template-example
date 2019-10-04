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
	<h2><?php echo ucfirst($CURRENT_PAGE); ?></h2>
	<p>Valitse alta yksittäinen tehtävä.</p>

	<div class="tehtavavalikko">
		<a href="maaritelma/">Itsetuntemus - määritelmätehtävä</a>
		<a href="minuntarinani/">Minun tarinani -tehtävä</a>
		<a href="omanelamankartta/">Oman elämän kartta</a>
	</div>
</div>

<?php include("../../includes/footer.php");?>

</body>
</html>