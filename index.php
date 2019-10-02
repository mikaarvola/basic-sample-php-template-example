<?php $CURRENT_PAGE = basename($_SERVER["REQUEST_URI"]); ?>

<!DOCTYPE html>
<html>
<head>
	<?php include("includes/head-tag-contents.php");?>
</head>
<body>

<?php include("includes/header.php");?>
<?php include("includes/navigation.php");?>

<div class="container" id="main-content">
	<h2>ETUSIVU</h2>
	<p>
		Tässä olisi lyhyt tervetuloteksti yms. ja sitten valitaankin jo mitä työelämävalmiutta halutaan touhuta. Kuten alla mutta toki kaikki valmiudet lueteltuna. Tai ehkä kuvituksilla, ei pelkkää tylsää tekstiä.
	</p>

<a href="tehtavat/rohkeus/">Rohkeus-valikkoon</a>
<a href="tehtavat/itsetuntemus/">Itsetuntemus-valikkoon</a>

</div>

<?php include("includes/footer.php");?>

</body>
</html>