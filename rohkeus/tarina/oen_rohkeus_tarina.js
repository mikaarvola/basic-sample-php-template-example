// Delete cookies
function deleteCookies() {
	var confirmLeave = confirm('Oletko varma että haluat tyhjentää KAIKKI vastauksesi tässä tehtävässä?');
	if (confirmLeave==true) {
		document.getElementById('NIMI').value = '';
		var NIMI = document.getElementById('NIMI').value;
		Cookies.remove('NIMI', { path: '' });

		document.getElementById('EXCITE').value = '';
		var EXCITE = document.getElementById('EXCITE').value;
		Cookies.remove('EXCITE', { path: '' });

		document.getElementById('FEELING').value = '';
		var FEELING = document.getElementById('FEELING').value;
		Cookies.remove('FEELING', { path: '' });

		document.getElementById('SOLUTION').value = '';
		var SOLUTION = document.getElementById('SOLUTION').value;
		Cookies.remove('SOLUTION', { path: '' });

		document.getElementById('FEELING2').value = '';
		var FEELING2 = document.getElementById('FEELING2').value;
		Cookies.remove('FEELING2', { path: '' });

		document.getElementById('BRAVE').value = '';
		var BRAVE = document.getElementById('BRAVE').value;
		Cookies.remove('BRAVE', { path: '' });

		location.reload();
	}
	else {
		return false;
	}
};


/* #region NIMI */
var NIMI = Cookies.get('NIMI');

// check if variable is empty (no cookie set)
if (NIMI == null){
	var NIMI = '';
} else {
	// variable is not empty, replace placeholder in input field
	document.getElementById('NIMI').value = Cookies.get('NIMI');
};

// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
{
	// On KeyUp set BirthPlace in variable and cookie
	$("[name='NIMI']").keyup(function()
	{
		NIMI = $(this).val();
		$('#keyup').text(NIMI);
		Cookies.set('NIMI', NIMI, { expires: config.cookietime, path: '' });

		if (NIMI == null || NIMI == '') {
			Cookies.remove('NIMI', { path: '' });
		};
	});
	
	// On KeyDown set BirthPlace in variable and cookie
	$("[name='NIMI']").keydown(function()
	{
		NIMI = $(this).val();
		$('#keydown').text(NIMI);
		Cookies.set('NIMI', NIMI, { expires: config.cookietime, path: '' });

		if (NIMI == null || NIMI == '') {
			Cookies.remove('NIMI', { path: '' });
		};
	});
	
	// On KeyPress set BirthPlace in variable and cookie
	$("[name='NIMI']").keypress(function()
	{
		NIMI = $(this).val();
		$('#keypress').text(NIMI);
		Cookies.set('NIMI', NIMI, { expires: config.cookietime, path: '' });

		if (NIMI == null || NIMI == '') {
			Cookies.remove('NIMI', { path: '' });
		};
	});
}
);
/* #endregion */

/* #region EXCITE */
var EXCITE = Cookies.get('EXCITE');

// check if variable is empty (no cookie set)
if (EXCITE == null){
	var EXCITE = '';
} else {
	// variable is not empty, replace placeholder in input field
	document.getElementById('EXCITE').value = Cookies.get('EXCITE');
};


// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
{
	// On KeyUp set BirthPlace in variable and cookie
	$("[name='EXCITE']").keyup(function()
	{
		EXCITE = $(this).val();
		$('#keyup').text(EXCITE);
		Cookies.set('EXCITE', EXCITE, { expires: config.cookietime, path: '' });

		if (EXCITE == null || EXCITE == '') {
			Cookies.remove('EXCITE', { path: '' });
		};
	});
	
	// On KeyDown set BirthPlace in variable and cookie
	$("[name='EXCITE']").keydown(function()
	{
		EXCITE = $(this).val();
		$('#keydown').text(EXCITE);
		Cookies.set('EXCITE', EXCITE, { expires: config.cookietime, path: '' });

		if (EXCITE == null || EXCITE == '') {
			Cookies.remove('EXCITE', { path: '' });
		};
	});
	
	// On KeyPress set BirthPlace in variable and cookie
	$("[name='EXCITE']").keypress(function()
	{
		EXCITE = $(this).val();
		$('#keypress').text(EXCITE);
		Cookies.set('EXCITE', EXCITE, { expires: config.cookietime, path: '' });

		if (EXCITE == null || EXCITE == '') {
			Cookies.remove('EXCITE', { path: '' });
		};
	});
}
);

/* #endregion */

/* #region FEELING */
var FEELING = Cookies.get('FEELING');

// check if variable is empty (no cookie set)
if (FEELING == null){
	var FEELING = '';
} else {
	// variable is not empty, replace placeholder in input field
	document.getElementById('FEELING').value = Cookies.get('FEELING');
};


// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
{
	// On KeyUp set BirthPlace in variable and cookie
	$("[name='FEELING']").keyup(function()
	{
		FEELING = $(this).val();
		$('#keyup').text(FEELING);
		Cookies.set('FEELING', FEELING, { expires: config.cookietime, path: '' });

		if (FEELING == null || FEELING == '') {
			Cookies.remove('FEELING', { path: '' });
		};
	});
	
	// On KeyDown set BirthPlace in variable and cookie
	$("[name='FEELING']").keydown(function()
	{
		FEELING = $(this).val();
		$('#keydown').text(FEELING);
		Cookies.set('FEELING', FEELING, { expires: config.cookietime, path: '' });

		if (FEELING == null || FEELING == '') {
			Cookies.remove('FEELING', { path: '' });
		};
	});
	
	// On KeyPress set BirthPlace in variable and cookie
	$("[name='FEELING']").keypress(function()
	{
		FEELING = $(this).val();
		$('#keypress').text(FEELING);
		Cookies.set('FEELING', FEELING, { expires: config.cookietime, path: '' });

		if (FEELING == null || FEELING == '') {
			Cookies.remove('FEELING', { path: '' });
		};
	});
}
);
/* #endregion */

/* #region SOLUTION */
var SOLUTION = Cookies.get('SOLUTION');

// check if variable is empty (no cookie set)
if (SOLUTION == null){
	var SOLUTION = '';
} else {
	// variable is not empty, replace placeholder in input field
	document.getElementById('SOLUTION').value = Cookies.get('SOLUTION');
};


// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
{
	// On KeyUp set BirthPlace in variable and cookie
	$("[name='SOLUTION']").keyup(function()
	{
		SOLUTION = $(this).val();
		$('#keyup').text(SOLUTION);
		Cookies.set('SOLUTION', SOLUTION, { expires: config.cookietime, path: '' });

		if (SOLUTION == null || SOLUTION == '') {
			Cookies.remove('SOLUTION', { path: '' });
		};
	});
	
	// On KeyDown set BirthPlace in variable and cookie
	$("[name='SOLUTION']").keydown(function()
	{
		SOLUTION = $(this).val();
		$('#keydown').text(SOLUTION);
		Cookies.set('SOLUTION', SOLUTION, { expires: config.cookietime, path: '' });

		if (SOLUTION == null || SOLUTION == '') {
			Cookies.remove('SOLUTION', { path: '' });
		};
	});
	
	// On KeyPress set BirthPlace in variable and cookie
	$("[name='SOLUTION']").keypress(function()
	{
		SOLUTION = $(this).val();
		$('#keypress').text(SOLUTION);
		Cookies.set('SOLUTION', SOLUTION, { expires: config.cookietime, path: '' });

		if (SOLUTION == null || SOLUTION == '') {
			Cookies.remove('SOLUTION', { path: '' });
		};
	});
}
);
/* #endregion */


var FEELING2 = Cookies.get('FEELING2');

// check if variable is empty (no cookie set)
if (FEELING2 == null){
	var FEELING2 = '';
} else {
	// variable is not empty, replace placeholder in input field
	document.getElementById('FEELING2').value = Cookies.get('FEELING2');
};


// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
{
	// On KeyUp set BirthPlace in variable and cookie
	$("[name='FEELING2']").keyup(function()
	{
		FEELING2 = $(this).val();
		$('#keyup').text(FEELING2);
		Cookies.set('FEELING2', FEELING2, { expires: config.cookietime, path: '' });

		if (FEELING2 == null || FEELING2 == '') {
			Cookies.remove('FEELING2', { path: '' });
		};
	});
	
	// On KeyDown set BirthPlace in variable and cookie
	$("[name='FEELING2']").keydown(function()
	{
		FEELING2 = $(this).val();
		$('#keydown').text(FEELING2);
		Cookies.set('FEELING2', FEELING2, { expires: config.cookietime, path: '' });

		if (FEELING2 == null || FEELING2 == '') {
			Cookies.remove('FEELING2', { path: '' });
		};
	});
	
	// On KeyPress set BirthPlace in variable and cookie
	$("[name='FEELING2']").keypress(function()
	{
		FEELING2 = $(this).val();
		$('#keypress').text(FEELING2);
		Cookies.set('FEELING2', FEELING2, { expires: config.cookietime, path: '' });

		if (FEELING2 == null || FEELING2 == '') {
			Cookies.remove('FEELING2', { path: '' });
		};
	});
}
);





var BRAVE = Cookies.get('BRAVE');

// check if variable is empty (no cookie set)
if (BRAVE == null){
	var BRAVE = '';
} else {
	// variable is not empty, replace placeholder in input field
	document.getElementById('BRAVE').value = Cookies.get('BRAVE');
};


// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
{
	// On KeyUp set BirthPlace in variable and cookie
	$("[name='BRAVE']").keyup(function()
	{
		BRAVE = $(this).val();
		$('#keyup').text(BRAVE);
		Cookies.set('BRAVE', BRAVE, { expires: config.cookietime, path: '' });

		if (BRAVE == null || BRAVE == '') {
			Cookies.remove('BRAVE', { path: '' });
		};
	});
	
	// On KeyDown set BirthPlace in variable and cookie
	$("[name='BRAVE']").keydown(function()
	{
		BRAVE = $(this).val();
		$('#keydown').text(BRAVE);
		Cookies.set('BRAVE', BRAVE, { expires: config.cookietime, path: '' });

		if (BRAVE == null || BRAVE == '') {
			Cookies.remove('BRAVE', { path: '' });
		};
	});
	
	// On KeyPress set BirthPlace in variable and cookie
	$("[name='BRAVE']").keypress(function()
	{
		BRAVE = $(this).val();
		$('#keypress').text(BRAVE);
		Cookies.set('BRAVE', BRAVE, { expires: config.cookietime, path: '' });

		if (BRAVE == null || BRAVE == '') {
			Cookies.remove('BRAVE', { path: '' });
		};
	});
}
);
