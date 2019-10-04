<?php include("../../../includes/a_config.php");?>
<?php $CURRENT_PAGE = basename($_SERVER["REQUEST_URI"]);?>

<!DOCTYPE html>
<html>
<head>
	<?php include("../../../includes/head-tag-contents.php");?>
</head>
<body>

<?php include("../../../includes/header.php");?>
<?php include("../../../includes/navigation.php");?>

<script src="./oen_rohkeus_rohkeitatekoja.js" defer></script>
<script src="./oen_rohkeus_rohkeitatekoja_build_pdf.js" defer></script>
<script src="./oen_rohkeus_rohkeitatekoja_pdf_graphics.js" defer></script>

<div class="task rohkeus rohkeusjana" id="main-content">
	<h2>Rohkeita tekoja</h2>
	<p>
		Pohdi, mitä rohkeaa, olet tehnyt. Kirjoita tekemiäsi rohkeita tekoja alla olevaan puhekuplaan: 
	</p>

	<div class="cloud_bg">
		<div class="center_box">
			<textarea class="cloudinput_oneitem" id="BRAVETHINGS1" name="BRAVETHINGS1" placeholder="Kiipesin puuhun" maxlength="40" spellcheck="false"></textarea>
			<textarea class="cloudinput_oneitem" id="BRAVETHINGS2" name="BRAVETHINGS2" placeholder="Matkustin junalla" maxlength="40" spellcheck="false"></textarea>
			<textarea class="cloudinput_oneitem" id="BRAVETHINGS3" name="BRAVETHINGS3" placeholder="Soitin poliisille" maxlength="40" spellcheck="false"></textarea>
		</div>
	</div>
</div>

<div class="button-bg">
	<div id="buttons">
		<a href="/tehtavat/rohkeus/rohkeusjana/" class="btn btn-sm btn-reverse-secondary">&laquo; Edelliseen</a>
		<a href="/" class="btn btn-sm btn-reverse-secondary">Seuraavaan &raquo;</a>

		<button onclick="createPDF();" class="btn btn-sm btn-outline-secondary">Tallenna PDF</button>
		<button onclick="deleteCookies();" class="btn btn-sm btn-outline-secondary">Tyhjennä kentät</button>
		<button onclick="reportIssue();" class="btn btn-sm btn-outline-secondary">Ilmoita ongelmasta</button>
	</div>
</div>
<?php include("../../../includes/footer.php");?>

</body>
</html>