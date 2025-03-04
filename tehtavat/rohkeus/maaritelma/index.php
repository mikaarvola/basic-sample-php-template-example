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
	<h2>Rohkeus - määritelmätehtävä</h2>
	<p>
		Rohkeus tarkoittaa sitä, että uskaltaa toimia, vaikka hieman pelottaisi tai jännittäisi. Ihmisiä
		pelottaa ja jännittää eri asiat. Jollekin voi olla rohkeutta se, että kertoo muille, kuka on ja
		jollekin rohkeutta on mennä huvipuiston villeimpään laitteeseen. On helpompi olla rohkea
		turvallisessa ja itselle tutussa ympäristössä. Rohkeutta on kysyä, jos ei tiedä tai pyytää apua
		tarvittaessa. Rohkeutta voi joskus olla myös sanoa ei.
	</p>
</div>


<div class="button-bg">
	<div id="buttons">
		<a href="/tehtavat/rohkeus/" class="btn btn-sm btn-reverse-secondary">&laquo; Edelliseen</a>
		<a href="/tehtavat/rohkeus/rohkeusjana/" class="btn btn-sm btn-reverse-secondary">Seuraavaan &raquo;</a>
	</div>
</div>
<?php include("../../../includes/footer.php");?>

</body>
</html>