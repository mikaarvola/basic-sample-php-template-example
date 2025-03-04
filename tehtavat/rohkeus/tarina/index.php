<?php $CURRENT_PAGE = basename($_SERVER["REQUEST_URI"]);?>

<!DOCTYPE html>
<html>
<head>
	<?php include("../../../includes/head-tag-contents.php");?>
</head>
<body>

<?php include("../../../includes/header.php");?>
<?php include("../../../includes/navigation.php");?>

<script src="./oen_rohkeus_tarina.js" defer></script>
<script src="./oen_rohkeus_tarina_build_pdf.js" defer></script>
<script src="./oen_rohkeus_tarina_pdf_graphics.js" defer></script>

<div class="task rohkeus tarina" id="main-content">
	<h2>Minun tarinani</h2>

	<p>Tunteita ja pelkoja voi käsitellä pohtimalla jännittävää tilannetta. Täytä sinua kuvaavat sanat tarinan tyhjiin kohtiin.</p>

	<p>Minun nimeni on</p>
	<textarea class="sm-input" id="Q001" name="Q001" placeholder="Leena, kavereiden kesken Lennu." maxlength="50" spellcheck="false" /></textarea>

	<p>Jännitän kovasti tilanteita, joissa</p>
	<textarea class="cloudinput" id="Q002" name="Q002" placeholder="joudun esiintymään." maxlength="200" spellcheck="false" /></textarea>

	<p>Silloin minusta tuntuu, että olen</p>
	<textarea class="cloudinput" id="Q003" name="Q003" placeholder="aivan kauhusta kankea." maxlength="200" spellcheck="false" /></textarea>

	<p>Nyt haluan olla rohkea. Uskaaltakseni yrittää tilanteesta selviytymistä, minä</p>
	<textarea class="cloudinput" id="Q004" name="Q004" placeholder="olen päättänyt harjoitella esiintymistä." maxlength="200" spellcheck="false" /></textarea>

	<p>Kun olen uskaltanut olla rohkea pelottavassa ja jännittävässä tilanteessa, minusta tuntuu että</p>
	<textarea class="cloudinput" id="Q005" name="Q005" placeholder="olen voittamaton." maxlength="200" spellcheck="false" /></textarea>

	<p>Tunnen itseni rohkeaksi</p>
	<textarea class="cloudinput" id="Q006" name="Q006" placeholder="kun olen tehnyt jotain mistä olen ylpeä." maxlength="200" spellcheck="false" /></textarea>

	<p>Hienoa, pääsit loppuun asti. Voit nyt painaa tallentaa oman tarinasi PDF-muodossa.</p>
</div>

<div class="button-bg">
	<div id="buttons">
		<a href="/tehtavat/rohkeus/maaritelma/" class="btn btn-sm btn-reverse-secondary">&laquo; Edelliseen</a>
		<a href="/tehtavat/rohkeus/rohkeusjana/" class="btn btn-sm btn-reverse-secondary">Seuraavaan &raquo;</a>

		<button onclick="createPDF();" class="btn btn-sm btn-outline-secondary">Tallenna PDF</button>
		<button onclick="deleteCookies();" class="btn btn-sm btn-outline-secondary">Tyhjennä kentät</button>
		<button onclick="reportIssue();" class="btn btn-sm btn-outline-secondary">Ilmoita ongelmasta</button>
	</div>
</div>

<?php include("../../../includes/footer.php");?>

</body>
</html>