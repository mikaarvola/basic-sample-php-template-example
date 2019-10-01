

<div class="content container"> <!-- closing at footer.php -->
	<div id="navigation">
		<ul class="nav nav-pills">
		<li class="nav-item">
			<a class="nav-link <?php if ($CURRENT_PAGE == "ETUSIVU") {?>active<?php }?>" href="/">Alkuun</a>
		</li>
		<li class="nav-item">
			<a class="nav-link <?php if ($CURRENT_PAGE == "TIETOA") {?>active<?php }?>" href="/about/">Tietoa</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="https://www.omanelamannainen.fi" target="_blank">Kotisivuille</a>
		</li>
		</ul>
	</div>

	<div id="breadcrumbs">
		<?php 
		// $crumbs = explode("/",$_SERVER["REQUEST_URI"]);
		// foreach($crumbs as $crumb){
		// 	echo ucfirst(str_replace(array(".php","_"),array(""," "),$crumb) . ' ');
		// }
		?>
	</div>