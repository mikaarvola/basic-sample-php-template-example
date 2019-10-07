<?php $CURRENT_PAGE = basename($_SERVER["REQUEST_URI"]);?>

<!DOCTYPE html>
<html>
<head>
	<?php include("../../../includes/head-tag-contents.php");?>
</head>
<body>

<?php include("../../../includes/header.php");?>
<?php include("../../../includes/navigation.php");?>

<script src="./oen_itsetuntemus_omanelamankartta.js" defer></script>
<script src="./oen_itsetuntemus_omanelamankartta_build_pdf.js" defer></script>
<script src="./oen_itsetuntemus_omanelamankartta_pdf_graphics.js" defer></script>

<div class="task itsetuntemus omanelamankartta" id="main-content">
	<h2>Oman elämän kartta</h2>

	<div class="row">
			<div class="col-lg-6 mb-3">
				<div class="card h-100">
					<div class="card-body">
						<h2 class="card-title">Mistä unelmoin:</h2>
						<textarea type="text" class="cloudinput" id="idKarttaMistaUnelmoin" name="idKarttaMistaUnelmoin" placeholder="Unelmoin" maxlength="200" spellcheck="false" /></textarea>
					</div>
				</div>
			</div>
			
			<div class="col-lg-6 mb-3">
				<div class="card h-100">
					<div class="card-body">
						<h2 class="card-title">Mitä osaan tehdä hyvin?</h2>
						<textarea class="cloudinput" id="idKarttaMitaOsaanTehdaHyvin" name="idKarttaMitaOsaanTehdaHyvin" placeholder="Osaan tehdä hyvin" maxlength="200" spellcheck="false" /></textarea>
					</div>
				</div>
			</div>
			
			<div class="col-lg-6 mb-3">
				<div class="card h-100">
					<div class="card-body">
						<h2 class="card-title">Mitä toiveita minulla on?</h2>
						<textarea type="text" class="cloudinput" id="idKarttaMitaToiveitaMinullaOn" name="idKarttaMitaToiveitaMinullaOn" placeholder="Toiveet" maxlength="200" spellcheck="false" /></textarea>
					</div>
				</div>
			</div>
			
			<div class="col-lg-6 mb-3">
				<div class="card h-100">
					<div class="card-body">
						<h2 class="card-title">Mitkä ovat minun vahvuuksiani luonteenpiirteissäni</h2>
						<textarea type="text" class="cloudinput" id="idKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani" name="idKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani" placeholder="Vahvuuteni" maxlength="200" spellcheck="false" /></textarea>
					</div>
				</div>
			</div>
			
			<div class="col-lg-6 mb-3">
				<div class="card h-100">
					<div class="card-body">
						<h2 class="card-title">Mitä pelkään?</h2>
						<textarea type="text" class="cloudinput" id="idKarttaMitaPelkaan" name="idKarttaMitaPelkaan" placeholder="Pelkoni" maxlength="200" spellcheck="false" /></textarea>
					</div>
				</div>
			</div>
			
			<div class="col-lg-6 mb-3">
				<div class="card h-100">
					<div class="card-body">
						<h2 class="card-title">Mitä teen vapaa-ajallani?</h2>
						<textarea type="text" class="cloudinput" id="idKarttaMitaTeenVapaaajallani" name="idKarttaMitaTeenVapaaajallani" placeholder="Vapaa-aika" maxlength="200" spellcheck="false" /></textarea>
					</div>
				</div>
			</div>
			
			
			<div class="col-lg-6 mb-3">
				<div class="card h-100">
					<div class="card-body">
						<h2 class="card-title">Mitä palveluja saan?</h2>
						<textarea type="text" class="cloudinput" id="idKarttaMitaPalvelujaSaan" name="idKarttaMitaPalvelujaSaan" placeholder="Palvelut" maxlength="200" spellcheck="false" /></textarea>
					</div>
				</div>
			</div>
		</div>

	<p>Hienoa, pääsit loppuun asti. Voit nyt painaa tallentaa oman tarinasi PDF-muodossa.</p>
</div>

<div class="button-bg">
	<div id="buttons">
		<a href="/tehtavat/itsetuntemus/maaritelma/" class="btn btn-sm btn-reverse-secondary">&laquo; Edelliseen</a>
		<a href="/tehtavat/itsetuntemus/" class="btn btn-sm btn-reverse-secondary">Seuraavaan &raquo;</a>

		<button onclick="createPDF();" class="btn btn-sm btn-outline-secondary">Tallenna PDF</button>
		<button onclick="deleteCookies();" class="btn btn-sm btn-outline-secondary">Tyhjennä kentät</button>
		<button onclick="reportIssue();" class="btn btn-sm btn-outline-secondary">Ilmoita ongelmasta</button>
	</div>
</div>

<?php include("../../../includes/footer.php");?>

</body>
</html>