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

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="styles/basic.css">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="js/dist/js.cookie-3.4.4.min.js"></script>
	
<style>
	#main-content {
		margin-top:20px;
	}
	.footer {
		font-size: 14px;
		height: 30px;
		position: fixed;
		bottom: 0;
	}
	.tehtavavalikko {
		display: grid;
	}

	.jumbotron {
		background-color: #EEE072;
	}
</style>
