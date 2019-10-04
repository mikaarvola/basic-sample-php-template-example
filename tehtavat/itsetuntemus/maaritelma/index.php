<?php $CURRENT_PAGE = basename($_SERVER["REQUEST_URI"]);?>

<!DOCTYPE html>
<html>
<head>
	<?php include("../../../includes/head-tag-contents.php");?>
</head>
<body>

<?php include("../../../includes/header.php");?>
<?php include("../../../includes/navigation.php");?>

<div class="container" id="main-content">
	<h2>Itsetuntemus - määritelmätehtävä</h2>
	<p>
	Itsetuntemus on itsensä tuntemista eli sitä, että tietää, mistä on kiinnostunut, mitä osaa ja missä olisi hyvä kehittyä.
	Kun tuntee itsensä, tietää, millaisia piirteitä itsellä on ja ymmärtää, miten ne vaikuttavat omaan toimintaan.
	Silloin on helpompi kertoa muille ihmisille, mistä pitää tai mikä on tärkeää. Itsetuntemusta tarvitaan, jotta osaa tehdä omia
	päätöksiä ja valita asioita, jotka itselle sopivat.
	</p>
</div>


<div class="button-bg">
	<div id="buttons">
		<a href="/tehtavat/itsetuntemus/" class="btn btn-sm btn-reverse-secondary">&laquo; Edelliseen</a>
		<a href="/tehtavat/itsetuntemus/minuntarinani/" class="btn btn-sm btn-reverse-secondary">Seuraavaan &raquo;</a>
	</div>
</div>
<?php include("../../../includes/footer.php");?>

</body>
</html>