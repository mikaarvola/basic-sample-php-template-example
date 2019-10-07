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
	<h2>Itsesäätely</h2>
	<p>Valitse alta yksittäinen tehtävä.</p>

	<div class="tehtavavalikko">
		<a href="maaritelma/">Itsesäätely - määritelmätehtävä</a>
		<a href="motivaatio/">Motivaatio</a>
	</div>
</div>

<?php include("../../includes/footer.php");?>

</body>
</html>