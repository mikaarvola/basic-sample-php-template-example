<?php $CURRENT_PAGE = basename($_SERVER["REQUEST_URI"]);?>

<!DOCTYPE html>
<html>
<head>
	<?php include("../../../includes/head-tag-contents.php");?>
</head>
<body>

<?php include("../../../includes/header.php");?>
<?php include("../../../includes/navigation.php");?>

<script src="./oen_rohkeus_rohkeusjana.js" defer></script>
<script src="./oen_rohkeus_rohkeusjana_build_pdf.js" defer></script>
<script src="./oen_rohkeus_rohkeusjana_pdf_graphics.js" defer></script>

<div class="task rohkeus rohkeusjana" id="main-content">
	<h2>Rohkeusjana</h2>

	<p>
		Tässä tehtävässä on tarkoituksena pohtia, mitkä asiat vaativat sinulta vähän rohkeutta ja mitkä asiat paljon rohkeutta.
		<strong>Tehtävänäsi on merkitä rohkeusjanalle, kuinka paljon rohkeutta toiminto sinulta vaatii.</strong>
		Voit vastata ensin valmiisiin esimerkkeihin ja sitten valita itse sinulle tärkeät toiminnot.
	</p>

	<div class="sliderbox">
		<p style="font-weight: 500;display: inline-block;">Tilanne: </p>
		<p style="display: inline-block;">ENSIMMÄINEN PÄIVÄ UUDESSA TYÖPAIKASSA</p>
		<p class="description">valitse 1 mikäli sinua ei jännitä yhtään ja 5 mikäli sinua jännittää todella paljon. Kolmosella jännittää semisti.</p>
		<div class="slidecontainer">
			<input type="range" min="1" max="5" class="slider" id="myRange1">
			<span id="demo"></span>
		</div>
		<div class="slidervalues1"></div>
	</div>

	<div class="sliderbox">
		<p style="font-weight: 500;display: inline-block;">Tilanne: </p>
		<p style="display: inline-block;">YKSIN OSTOKSILLA KÄYNTI</p>
		<p class="description">valitse 1 mikäli sinua ei jännitä yhtään ja 5 mikäli sinua jännittää todella paljon.</p>
		<div class="slidecontainer">
			<input type="range" min="1" max="5" class="slider" id="myRange2">
			<span id="demo"></span>
		</div>
		<div class="slidervalues2"></div>
	</div>

	<div class="sliderbox">
		<p style="font-weight: 500">Tilanne:</p>
		<textarea class="cloudinput_oneline" id="SITUATION1" name="SITUATION1" placeholder="Kirjoita tähän jokin oma tilanne" maxlength="40" spellcheck="false" /></textarea>
		<p class="description">valitse 1 mikäli sinua ei jännitä yhtään ja 5 mikäli sinua jännittää todella paljon.</p>
		<div class="slidecontainer">
			<input type="range" min="1" max="5" class="slider" id="myRange3">
			<span id="demo"></span>
		</div>
		<div class="slidervalues3"></div>
	</div>

	<div class="sliderbox">
		<p style="font-weight: 500;">Tilanne:</p>
		<textarea class="cloudinput_oneline" id="SITUATION2" name="SITUATION2" placeholder="Kirjoita tähän jokin oma tilanne" maxlength="40" spellcheck="false" /></textarea>
		<p class="description">valitse 1 mikäli sinua ei jännitä yhtään ja 5 mikäli sinua jännittää todella paljon.</p>
		<div class="slidecontainer">
			<input type="range" min="1" max="5" class="slider" id="myRange4">
			<span id="demo"></span>
		</div>
		<div class="slidervalues4"></div>
	</div>

	<div class="sliderbox">
		<p style="font-weight: 500;">Tilanne:</p>
		<textarea class="cloudinput_oneline" id="SITUATION3" name="SITUATION3" placeholder="Kirjoita tähän jokin oma tilanne" maxlength="40" spellcheck="false" /></textarea>
		<p class="description">valitse 1 mikäli sinua ei jännitä yhtään ja 5 mikäli sinua jännittää todella paljon.</p>
		<div class="slidecontainer">
			<input type="range" min="1" max="5" class="slider" id="myRange5">
			<span id="demo"></span>
		</div>
		<div class="slidervalues5"></div>
	</div>

	<p>Hienoa, pääsit loppuun asti. Voit nyt painaa tallentaa oman tarinasi PDF-muodossa.</p>
</div>

<div class="button-bg">
	<div id="buttons">
		<a href="/tehtavat/rohkeus/tarina/" class="btn btn-sm btn-reverse-secondary">&laquo; Edelliseen</a>
		<a href="/tehtavat/rohkeus/rohkeitatekoja/" class="btn btn-sm btn-reverse-secondary">Seuraavaan &raquo;</a>

		<button onclick="createPDF();" class="btn btn-sm btn-outline-secondary">Tallenna PDF</button>
		<button onclick="deleteCookies();" class="btn btn-sm btn-outline-secondary">Tyhjennä kentät</button>
		<button onclick="reportIssue();" class="btn btn-sm btn-outline-secondary">Ilmoita ongelmasta</button>
	</div>
</div>

<?php include("../../../includes/footer.php");?>

</body>

<script> // SLIDER #1 Cookies
	var slider1 = document.getElementById("myRange1");
	var output1 = document.getElementById("demo1");

	var SLIDER1 = Cookies.get('SLIDER1');

	// check if variable is empty (no cookie set)
	if (SLIDER1 == null){
		SLIDER1 = '3';
		slider1.classList.toggle("slaider1");
	};
	document.getElementById("myRange1").value = SLIDER1;

	slider1.oninput = function() {
		Cookies.set('SLIDER1', this.value, { expires: config.cookietime, path: '' });
		var element = document.getElementById("myRange1");
		element.className = element.className.replace(/\bslaider1\b/g, "");
		element.classList.remove("slaider1");
	};
</script>

<script> // SLIDER #1 Values
	jQuery( ".slidervalues1" ).slider({
		value: 0,
		min: 1,
		max: 5,
		step: 1
	})
	.each(function() {
		
		//
		// Add labels to slider whose values 
		// are specified by min, max and whose
		// step is set to 1
		//

		// Get the options for this slider
		var opt = $(this).data().uiSlider.options;

		// Get the number of possible values
		var vals = opt.max - opt.min;

		// Space out values
		for (var i = 0; i <= vals; i++) {
			
			var el = $('<label>'+(i+1)+'</label>').css('left',(i/vals*100)+'%');
			
			jQuery( ".slidervalues1" ).append(el);
			
		}
		
	});
</script>

<script> // SLIDER #2 Cookies
		var slider2 = document.getElementById("myRange2");
		var output2 = document.getElementById("demo2");

		var SLIDER2 = Cookies.get('SLIDER2');

		// check if variable is empty (no cookie set)
		if (SLIDER2 == null){
			SLIDER2= '3';
			slider2.classList.toggle("slaider2");
		};
		document.getElementById("myRange2").value = SLIDER2;

		slider2.oninput = function() {
			Cookies.set('SLIDER2', this.value, { expires: config.cookietime, path: '' });
			var element = document.getElementById("myRange2");
			element.className = element.className.replace(/\bslaider2\b/g, "");
			element.classList.remove("slaider2");
		};
</script>

<script> // SLIDER #2 Values
	jQuery( ".slidervalues2" ).slider({
		value: 0,
		min: 1,
		max: 5,
		step: 1
	})
	.each(function() {
		
		//
		// Add labels to slider whose values 
		// are specified by min, max and whose
		// step is set to 1
		//

		// Get the options for this slider
		var opt = $(this).data().uiSlider.options;

		// Get the number of possible values
		var vals = opt.max - opt.min;

		// Space out values
		for (var i = 0; i <= vals; i++) {
			
			var el = $('<label>'+(i+1)+'</label>').css('left',(i/vals*100)+'%');
			
			jQuery( ".slidervalues2" ).append(el);
			
		}
		
	});
</script>

<script> // SLIDER #3 Cookies
		var slider3 = document.getElementById("myRange3");
		var output3 = document.getElementById("demo3");

		var SLIDER3 = Cookies.get('SLIDER3');

		// check if variable is empty (no cookie set)
		if (SLIDER3 == null){
			SLIDER3= '3';
			slider3.classList.toggle("slaider3");
		};
		document.getElementById("myRange3").value = SLIDER3;

		slider3.oninput = function() {
			Cookies.set('SLIDER3', this.value, { expires: config.cookietime, path: '' });
			var element = document.getElementById("myRange3");
			element.className = element.className.replace(/\bslaider3\b/g, "");
			element.classList.remove("slaider3");
		};
</script>

<script> // SLIDER #3 Values
	jQuery( ".slidervalues3" ).slider({
		value: 0,
		min: 1,
		max: 5,
		step: 1
	})
	.each(function() {
		
		//
		// Add labels to slider whose values 
		// are specified by min, max and whose
		// step is set to 1
		//

		// Get the options for this slider
		var opt = $(this).data().uiSlider.options;

		// Get the number of possible values
		var vals = opt.max - opt.min;

		// Space out values
		for (var i = 0; i <= vals; i++) {
			
			var el = $('<label>'+(i+1)+'</label>').css('left',(i/vals*100)+'%');
			
			jQuery( ".slidervalues3" ).append(el);
			
		}
		
	});
</script>

<script> // SLIDER #4 Cookies
		var slider4 = document.getElementById("myRange4");
		var output4 = document.getElementById("demo4");

		var SLIDER4 = Cookies.get('SLIDER4');

		// check if variable is empty (no cookie set)
		if (SLIDER4 == null){
			SLIDER4= '3';
			slider4.classList.toggle("slaider4");
		};
		document.getElementById("myRange4").value = SLIDER4;

		slider4.oninput = function() {
			Cookies.set('SLIDER4', this.value, { expires: config.cookietime, path: '' });
			var element = document.getElementById("myRange4");
			element.className = element.className.replace(/\bslaider4\b/g, "");
			element.classList.remove("slaider4");
		};
</script>

<script> // SLIDER #4 Values
	jQuery( ".slidervalues4" ).slider({
		value: 0,
		min: 1,
		max: 5,
		step: 1
	})
	.each(function() {
		
		//
		// Add labels to slider whose values 
		// are specified by min, max and whose
		// step is set to 1
		//

		// Get the options for this slider
		var opt = $(this).data().uiSlider.options;

		// Get the number of possible values
		var vals = opt.max - opt.min;

		// Space out values
		for (var i = 0; i <= vals; i++) {
			
			var el = $('<label>'+(i+1)+'</label>').css('left',(i/vals*100)+'%');
			
			jQuery( ".slidervalues4" ).append(el);
			
		}
		
	});
</script>

<script> // SLIDER #5 Cookies
		var slider5 = document.getElementById("myRange5");
		var output5 = document.getElementById("demo5");

		var SLIDER5 = Cookies.get('SLIDER5');

		// check if variable is empty (no cookie set)
		if (SLIDER5 == null){
			SLIDER5= '3';
			slider5.classList.toggle("slaider5");
		};
		document.getElementById("myRange5").value = SLIDER5;

		slider5.oninput = function() {
			Cookies.set('SLIDER5', this.value, { expires: config.cookietime, path: '' });
			var element = document.getElementById("myRange5");
			element.className = element.className.replace(/\bslaider5\b/g, "");
			element.classList.remove("slaider5");
		};
</script>

<script> // SLIDER #5 Values
	jQuery( ".slidervalues5" ).slider({
		value: 0,
		min: 1,
		max: 5,
		step: 1
	})
	.each(function() {
		
		//
		// Add labels to slider whose values 
		// are specified by min, max and whose
		// step is set to 1
		//

		// Get the options for this slider
		var opt = $(this).data().uiSlider.options;

		// Get the number of possible values
		var vals = opt.max - opt.min;

		// Space out values
		for (var i = 0; i <= vals; i++) {
			
			var el = $('<label>'+(i+1)+'</label>').css('left',(i/vals*100)+'%');
			
			jQuery( ".slidervalues5" ).append(el);
			
		}
		
	});
</script>
</html>