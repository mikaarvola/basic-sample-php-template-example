<?php $CURRENT_PAGE = basename($_SERVER["REQUEST_URI"]);?>

<!DOCTYPE html>
<html>
<head>
	<?php include("../../../includes/head-tag-contents.php");?>
</head>
<body>

<?php include("../../../includes/header.php");?>
<?php include("../../../includes/navigation.php");?>

<script src="./oen_itsetuntemus_minuntarinani.js" defer></script>
<script src="./oen_itsetuntemus_minuntarinani_build_pdf.js" defer></script>
<script src="./oen_itsetuntemus_minuntarinani_pdf_graphics.js" defer></script>

<div class="task itsetuntemus minuntarinani" id="main-content">
	<h2>Minun tarinani</h2>

	<p>Tässä harjoituksessa on tarkoituksena muistella elämän tarinaasi, johon kuuluvat lapsuus, nuoruus sekä aikuisuus.</p>

	<p>Missä olen syntynyt?</p>
	<textarea class="sm-input" id="Q001" name="Q001" placeholder="Suomen Turussa!" maxlength="50" spellcheck="false" /></textarea>

	<p>Millainen olin vauvana ja mitä muut ovat kertoneet minulle siitä ajasta?</p>
	<textarea class="cloudinput" id="Q002" name="Q002" placeholder="Tosi reipas ja herttainen..." maxlength="200" spellcheck="false" /></textarea>

	<p>Millaisia muistoja minulla on lapsuudesta? Missä asuin? Mikä oli lempileluni?</p>
	<textarea class="cloudinput" id="Q003" name="Q003" placeholder="Ihania muistoja, muistan kaiken kuin eilisen päivän..." maxlength="200" spellcheck="false" /></textarea>

	<p>Millaisia muistoja minulla on kouluajasta? Ketkä olivat ystäviäni?</p>
	<textarea class="cloudinput" id="Q004" name="Q004" placeholder="Kalakeitto oli pahaa..." maxlength="200" spellcheck="false" /></textarea>

	<p>Harrastinko jotain lapsena?</p>
	<textarea class="cloudinput" id="Q005" name="Q005" placeholder="Legoja ja sitten keräilin postimerkkejä." maxlength="200" spellcheck="false" /></textarea>

	<p>Millaisia muistoja minulla on nuoruudestani?</p>
	<textarea class="cloudinput" id="Q006" name="Q006" placeholder="Lapsuudestani muistan että..." maxlength="200" spellcheck="false" /></textarea>

	<p>Onko elämässäni tapahtunut asioita, jotka ovat tuottaneet minulle surua? Mitä silloin tapahtui?</p>
	<textarea class="cloudinput" id="Q007" name="Q007" placeholder="Muistan kun marsuni kuoli kun olin kahdeksan." maxlength="200" spellcheck="false" /></textarea>

	<p>Mitä iloisia asioita elämässäni on tapahtunut? </p>
	<textarea class="cloudinput" id="Q008" name="Q008" placeholder="Sain työpaikan kun täytin 18 vuotta." maxlength="200" spellcheck="false" /></textarea>

	<p>Hienoa, pääsit loppuun asti. Voit nyt painaa tallentaa oman tarinasi PDF-muodossa.</p>
</div>

<div id="internal-navigation">
	<a href="/itsetuntemus/" class="previous">&laquo; Edelliseen</a>
	<a href="/itsetuntemus/rohkeusjana/" class="next">Seuraavaan &raquo;</a>
</div>

<div class="button-bg">
	<div id="buttons">
		<button onclick="createPDF();" class="btn btn-sm btn-outline-secondary">Tallenna PDF</button>
		<button onclick="deleteCookies();" class="btn btn-sm btn-outline-secondary">Tyhjennä kentät</button>
		<button onclick="reportIssue();" class="btn btn-sm btn-outline-secondary">Ilmoita ongelmasta</button>
	</div>
</div>

<?php include("../../../includes/footer.php");?>

</body>
</html>