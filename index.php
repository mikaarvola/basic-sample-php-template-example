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

<div class="row row-eq-height">
	<div class="col-md-4">
		<div class="card mb-4 box-shadow">
			<div class="card-box">
				<img class="card-img-top" src="/images/splash_400px.jpg" alt="Card image cap">
				<div class="card-text mt-2">ROHKEUS</div>
			</div>
			<div id="progressbar-tarina" class="main-progressbar"></div>
			<div class="card-body d-flex flex-column">
				<div class="d-flex justify-content-between align-items-end mt-auto">
					<div class="btn-group">
						<a href="/tehtavat/rohkeus/">
							<button type="button" class="btn btn-sm btn-outline-secondary">Tehtäviin</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-4">
		<div class="card mb-4 box-shadow">
			<div class="card-box">
				<img class="card-img-top" src="/images/splash_400px.jpg" alt="Card image cap">
				<div class="card-text mt-2">ITSETUNTEMUS</div>
			</div>
			<div id="progressbar-tarina" class="main-progressbar"></div>
			<div class="card-body d-flex flex-column">
				<div class="d-flex justify-content-between align-items-end mt-auto">
					<div class="btn-group">
						<a href="/tehtavat/itsetuntemus/">
							<button type="button" class="btn btn-sm btn-outline-secondary">Tehtäviin</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-4">
		<div class="card mb-4 box-shadow">
			<div class="card-box">
				<img class="card-img-top" src="/images/splash_400px.jpg" alt="Card image cap">
				<div class="card-text mt-2">ITSESÄÄTELY</div>
			</div>
			<div id="progressbar-tarina" class="main-progressbar"></div>
			<div class="card-body d-flex flex-column">
				<div class="d-flex justify-content-between align-items-end mt-auto">
					<div class="btn-group">
						<a href="/tehtavat/itsesaately/">
							<button type="button" class="btn btn-sm btn-outline-secondary">Tehtäviin</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

</div>

</div>

<?php include("includes/footer.php");?>

</body>
</html>