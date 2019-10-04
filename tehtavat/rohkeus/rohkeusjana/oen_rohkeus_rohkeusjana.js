// Delete cookies
function deleteCookies() {
	var confirmLeave = confirm('Oletko varma että haluat tyhjentää KAIKKI vastauksesi tässä tehtävässä?');
	if (confirmLeave==true) {
		Cookies.remove('SLIDER1', { path: '' });
		Cookies.remove('SLIDER2', { path: '' });
		Cookies.remove('SLIDER3', { path: '' });
		Cookies.remove('SLIDER4', { path: '' });
		Cookies.remove('SLIDER5', { path: '' });

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





var SITUATION1 = Cookies.get('SITUATION1');
// check if variable is empty (no cookie set)
if (SITUATION1 == null){
	var SITUATION1 = '';
} else {
	// variable is not empty, replace placeholder in input field
	document.getElementById('SITUATION1').value = Cookies.get('SITUATION1');
};

// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
{
	// On KeyUp set BirthPlace in variable and cookie
	$("[name='SITUATION1']").keyup(function()
	{
		SITUATION1 = $(this).val();
		$('#keyup').text(SITUATION1);
		Cookies.set('SITUATION1', SITUATION1, { expires: config.cookietime, path: '' });

		if (SITUATION1 == null || SITUATION1 == '') {
			Cookies.remove('SITUATION1', { path: '' });
		};
	});
	
	// On KeyDown set BirthPlace in variable and cookie
	$("[name='SITUATION1']").keydown(function()
	{
		SITUATION1 = $(this).val();
		$('#keydown').text(SITUATION1);
		Cookies.set('SITUATION1', SITUATION1, { expires: config.cookietime, path: '' });

		if (SITUATION1 == null || SITUATION1 == '') {
			Cookies.remove('SITUATION1', { path: '' });
		};
	});
	
	// On KeyPress set BirthPlace in variable and cookie
	$("[name='SITUATION1']").keypress(function()
	{
		SITUATION1 = $(this).val();
		$('#keypress').text(SITUATION1);
		Cookies.set('SITUATION1', SITUATION1, { expires: config.cookietime, path: '' });

		if (SITUATION1 == null || SITUATION1 == '') {
			Cookies.remove('SITUATION1', { path: '' });
		};
	});
}
);





var SITUATION2 = Cookies.get('SITUATION2');
// check if variable is empty (no cookie set)
if (SITUATION2 == null){
	var SITUATION2 = '';
} else {
	// variable is not empty, replace placeholder in input field
	document.getElementById('SITUATION2').value = Cookies.get('SITUATION2');
};

// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
{
	// On KeyUp set BirthPlace in variable and cookie
	$("[name='SITUATION2']").keyup(function()
	{
		SITUATION2 = $(this).val();
		$('#keyup').text(SITUATION2);
		Cookies.set('SITUATION2', SITUATION2, { expires: config.cookietime, path: '' });

		if (SITUATION2 == null || SITUATION2 == '') {
			Cookies.remove('SITUATION2', { path: '' });
		};
	});
	
	// On KeyDown set BirthPlace in variable and cookie
	$("[name='SITUATION2']").keydown(function()
	{
		SITUATION2 = $(this).val();
		$('#keydown').text(SITUATION2);
		Cookies.set('SITUATION2', SITUATION2, { expires: config.cookietime, path: '' });

		if (SITUATION2 == null || SITUATION2 == '') {
			Cookies.remove('SITUATION2', { path: '' });
		};
	});
	
	// On KeyPress set BirthPlace in variable and cookie
	$("[name='SITUATION2']").keypress(function()
	{
		SITUATION2 = $(this).val();
		$('#keypress').text(SITUATION2);
		Cookies.set('SITUATION2', SITUATION2, { expires: config.cookietime, path: '' });

		if (SITUATION2 == null || SITUATION2 == '') {
			Cookies.remove('SITUATION2', { path: '' });
		};
	});
}
);






var SITUATION3 = Cookies.get('SITUATION3');
// check if variable is empty (no cookie set)
if (SITUATION3 == null){
	var SITUATION3 = '';
} else {
	// variable is not empty, replace placeholder in input field
	document.getElementById('SITUATION3').value = Cookies.get('SITUATION3');
};

// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
{
	// On KeyUp set BirthPlace in variable and cookie
	$("[name='SITUATION3']").keyup(function()
	{
		SITUATION3 = $(this).val();
		$('#keyup').text(SITUATION3);
		Cookies.set('SITUATION3', SITUATION3, { expires: config.cookietime, path: '' });

		if (SITUATION3 == null || SITUATION3 == '') {
			Cookies.remove('SITUATION3', { path: '' });
		};
	});
	
	// On KeyDown set BirthPlace in variable and cookie
	$("[name='SITUATION3']").keydown(function()
	{
		SITUATION3 = $(this).val();
		$('#keydown').text(SITUATION3);
		Cookies.set('SITUATION3', SITUATION3, { expires: config.cookietime, path: '' });

		if (SITUATION3 == null || SITUATION3 == '') {
			Cookies.remove('SITUATION3', { path: '' });
		};
	});
	
	// On KeyPress set BirthPlace in variable and cookie
	$("[name='SITUATION3']").keypress(function()
	{
		SITUATION3 = $(this).val();
		$('#keypress').text(SITUATION3);
		Cookies.set('SITUATION3', SITUATION3, { expires: config.cookietime, path: '' });

		if (SITUATION3 == null || SITUATION3 == '') {
			Cookies.remove('SITUATION3', { path: '' });
		};
	});
}
);





var BRAVETHINGS1 = Cookies.get('BRAVETHINGS1');
// check if variable is empty (no cookie set)
if (BRAVETHINGS1 == null){
	var BRAVETHINGS1 = '';
} else {
	// variable is not empty, replace placeholder in input field
	document.getElementById('BRAVETHINGS1').value = Cookies.get('BRAVETHINGS1');
};

// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
{
	// On KeyUp set BirthPlace in variable and cookie
	$("[name='BRAVETHINGS1']").keyup(function()
	{
		BRAVETHINGS1 = $(this).val();
		$('#keyup').text(BRAVETHINGS1);
		Cookies.set('BRAVETHINGS1', BRAVETHINGS1, { expires: config.cookietime, path: '' });

		if (BRAVETHINGS1 == null || BRAVETHINGS1 == '') {
			Cookies.remove('BRAVETHINGS1', { path: '' });
		};
	});
	
	// On KeyDown set BirthPlace in variable and cookie
	$("[name='BRAVETHINGS1']").keydown(function()
	{
		BRAVETHINGS1 = $(this).val();
		$('#keydown').text(BRAVETHINGS1);
		Cookies.set('BRAVETHINGS1', BRAVETHINGS1, { expires: config.cookietime, path: '' });

		if (BRAVETHINGS1 == null || BRAVETHINGS1 == '') {
			Cookies.remove('BRAVETHINGS1', { path: '' });
		};
	});
	
	// On KeyPress set BirthPlace in variable and cookie
	$("[name='BRAVETHINGS1']").keypress(function()
	{
		BRAVETHINGS1 = $(this).val();
		$('#keypress').text(BRAVETHINGS1);
		Cookies.set('BRAVETHINGS1', BRAVETHINGS1, { expires: config.cookietime, path: '' });

		if (BRAVETHINGS1 == null || BRAVETHINGS1 == '') {
			Cookies.remove('BRAVETHINGS1', { path: '' });
		};
	});
}
);





var BRAVETHINGS2 = Cookies.get('BRAVETHINGS2');
// check if variable is empty (no cookie set)
if (BRAVETHINGS2 == null){
	var BRAVETHINGS2 = '';
} else {
	// variable is not empty, replace placeholder in input field
	document.getElementById('BRAVETHINGS2').value = Cookies.get('BRAVETHINGS2');
};

// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
{
	// On KeyUp set BirthPlace in variable and cookie
	$("[name='BRAVETHINGS2']").keyup(function()
	{
		BRAVETHINGS2 = $(this).val();
		$('#keyup').text(BRAVETHINGS2);
		Cookies.set('BRAVETHINGS2', BRAVETHINGS2, { expires: config.cookietime, path: '' });

		if (BRAVETHINGS2 == null || BRAVETHINGS2 == '') {
			Cookies.remove('BRAVETHINGS2', { path: '' });
		};
	});
	
	// On KeyDown set BirthPlace in variable and cookie
	$("[name='BRAVETHINGS2']").keydown(function()
	{
		BRAVETHINGS2 = $(this).val();
		$('#keydown').text(BRAVETHINGS2);
		Cookies.set('BRAVETHINGS2', BRAVETHINGS2, { expires: config.cookietime, path: '' });

		if (BRAVETHINGS2 == null || BRAVETHINGS2 == '') {
			Cookies.remove('BRAVETHINGS2', { path: '' });
		};
	});
	
	// On KeyPress set BirthPlace in variable and cookie
	$("[name='BRAVETHINGS2']").keypress(function()
	{
		BRAVETHINGS2 = $(this).val();
		$('#keypress').text(BRAVETHINGS2);
		Cookies.set('BRAVETHINGS2', BRAVETHINGS2, { expires: config.cookietime, path: '' });

		if (BRAVETHINGS2 == null || BRAVETHINGS2 == '') {
			Cookies.remove('BRAVETHINGS2', { path: '' });
		};
	});
}
);






var BRAVETHINGS3 = Cookies.get('BRAVETHINGS3');
// check if variable is empty (no cookie set)
if (BRAVETHINGS3 == null){
	var BRAVETHINGS3 = '';
} else {
	// variable is not empty, replace placeholder in input field
	document.getElementById('BRAVETHINGS3').value = Cookies.get('BRAVETHINGS3');
};

// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
{
	// On KeyUp set BirthPlace in variable and cookie
	$("[name='BRAVETHINGS3']").keyup(function()
	{
		BRAVETHINGS3 = $(this).val();
		$('#keyup').text(BRAVETHINGS3);
		Cookies.set('BRAVETHINGS3', BRAVETHINGS3, { expires: config.cookietime, path: '' });

		if (BRAVETHINGS3 == null || BRAVETHINGS3 == '') {
			Cookies.remove('BRAVETHINGS3', { path: '' });
		};
	});
	
	// On KeyDown set BirthPlace in variable and cookie
	$("[name='BRAVETHINGS3']").keydown(function()
	{
		BRAVETHINGS3 = $(this).val();
		$('#keydown').text(BRAVETHINGS3);
		Cookies.set('BRAVETHINGS3', BRAVETHINGS3, { expires: config.cookietime, path: '' });

		if (BRAVETHINGS3 == null || BRAVETHINGS3 == '') {
			Cookies.remove('BRAVETHINGS3', { path: '' });
		};
	});
	
	// On KeyPress set BirthPlace in variable and cookie
	$("[name='BRAVETHINGS3']").keypress(function()
	{
		BRAVETHINGS3 = $(this).val();
		$('#keypress').text(BRAVETHINGS3);
		Cookies.set('BRAVETHINGS3', BRAVETHINGS3, { expires: config.cookietime, path: '' });

		if (BRAVETHINGS3 == null || BRAVETHINGS3 == '') {
			Cookies.remove('BRAVETHINGS3', { path: '' });
		};
	});
}
);