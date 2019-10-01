<?php
	switch ($CURRENT_PAGE) {
		case "php-tmpl":
			$CURRENT_PAGE = "ETUSIVU"; 
			$PAGE_TITLE = "Etusivu";
			break;
		case "about":
			$CURRENT_PAGE = "TIETOA"; 
			$PAGE_TITLE = "Tietoa";
			break;
		default:
			echo "";
	}
?>

<title>Oman elämän nainen -tehtäväpankki - <?php echo $PAGE_TITLE; ?></title>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="Oman elämän nainen -hankkeen tehtäväpankki">
<meta name="author" content="Oman elämän nainen -hanke">

<!-- helper for cookies -->
<script src="/js/dist/js.cookie-3.4.4.min.js"></script>

<!-- PDF scripts here -->
<script src="/js/dist/jspdf-1.5.3.min.js" defer></script>
<!-- script src="/js/dist/jspdf.customfonts-0.0.4.min.js" defer></script>
<script src="/js/dist/default_vfs.js" defer></script -->

<!-- HTML2Canvas -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>

<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<!-- Bootstrap -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

<!-- General CSS and config-->
<link rel="stylesheet" href="/styles/basic.css">
<script src="/js/config.js"></script>
<script src="/js/functions.js"></script>
