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
	<h2>Motivaatio</h2>
	<script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
	<iframe src="https://h5p.org/h5p/embed/613219" width="1090" height="206" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
	<iframe src="https://h5p.org/h5p/embed/613221" width="1090" height="206" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
	<hr>
	<h3>Vaihtoehtoinen tapa:</h3>
	<iframe src="https://h5p.org/h5p/embed/613324" width="1090" height="206" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

	<iframe src="https://h5p.oen.fi/wp-admin/admin-ajax.php?action=h5p_embed&id=1" width="1705" height="268" frameborder="0" allowfullscreen="allowfullscreen"></iframe><script src="https://h5p.oen.fi/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>

	<hr>
	<h3>Kolmas tapa:</h3>
	<iframe src="https://h5p.oen.fi/wp-admin/admin-ajax.php?action=h5p_embed&id=3" width="1705" height="268" frameborder="0" allowfullscreen="allowfullscreen"></iframe><script src="https://h5p.oen.fi/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>


</div>


<div class="button-bg">
	<div id="buttons">
		<a href="/tehtavat/itsesaately/maaritelma/" class="btn btn-sm btn-reverse-secondary">&laquo; Edelliseen</a>
		<a href="/tehtavat/itsesaately/" class="btn btn-sm btn-reverse-secondary">Seuraavaan &raquo;</a>
	</div>
</div>
<?php include("../../../includes/footer.php");?>

</body>
</html>