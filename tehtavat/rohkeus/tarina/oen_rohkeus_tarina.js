// Delete cookies
function deleteCookies() {
	var confirmLeave = confirm('Oletko varma että haluat tyhjentää KAIKKI vastauksesi tässä tehtävässä?');
	if (confirmLeave==true) {
		document.getElementById('Q001').value = '';
		var Q001 = document.getElementById('Q001').value;
		Cookies.remove('Q001', { path: '' });

		document.getElementById('Q002').value = '';
		var Q002 = document.getElementById('Q002').value;
		Cookies.remove('Q002', { path: '' });

		document.getElementById('Q003').value = '';
		var Q003 = document.getElementById('Q003').value;
		Cookies.remove('Q003', { path: '' });

		document.getElementById('Q004').value = '';
		var Q004 = document.getElementById('Q004').value;
		Cookies.remove('Q004', { path: '' });

		document.getElementById('Q005').value = '';
		var Q005 = document.getElementById('Q005').value;
		Cookies.remove('Q005', { path: '' });

		document.getElementById('Q006').value = '';
		var Q006 = document.getElementById('Q006').value;
		Cookies.remove('Q006', { path: '' });

		location.reload();
	}
	else {
		return false;
	}
};


/* #region Q001 */
var Q001 = Cookies.get('Q001');

// check if variable is empty (no cookie set)
if (Q001 == null){
	var Q001 = '';
} else {
	// variable is not empty, replace placeholder in input field
	document.getElementById('Q001').value = Cookies.get('Q001');
};

// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
{
	// On KeyUp set BirthPlace in variable and cookie
	$("[name='Q001']").keyup(function()
	{
		Q001 = $(this).val();
		$('#keyup').text(Q001);
		Cookies.set('Q001', Q001, { expires: config.cookietime, path: '' });

		if (Q001 == null || Q001 == '') {
			Cookies.remove('Q001', { path: '' });
		};
	});
	
	// On KeyDown set BirthPlace in variable and cookie
	$("[name='Q001']").keydown(function()
	{
		Q001 = $(this).val();
		$('#keydown').text(Q001);
		Cookies.set('Q001', Q001, { expires: config.cookietime, path: '' });

		if (Q001 == null || Q001 == '') {
			Cookies.remove('Q001', { path: '' });
		};
	});
	
	// On KeyPress set BirthPlace in variable and cookie
	$("[name='Q001']").keypress(function()
	{
		Q001 = $(this).val();
		$('#keypress').text(Q001);
		Cookies.set('Q001', Q001, { expires: config.cookietime, path: '' });

		if (Q001 == null || Q001 == '') {
			Cookies.remove('Q001', { path: '' });
		};
	});
}
);
/* #endregion */

/* #region Q002 */
var Q002 = Cookies.get('Q002');

// check if variable is empty (no cookie set)
if (Q002 == null){
	var Q002 = '';
} else {
	// variable is not empty, replace placeholder in input field
	document.getElementById('Q002').value = Cookies.get('Q002');
};


// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
{
	// On KeyUp set BirthPlace in variable and cookie
	$("[name='Q002']").keyup(function()
	{
		Q002 = $(this).val();
		$('#keyup').text(Q002);
		Cookies.set('Q002', Q002, { expires: config.cookietime, path: '' });

		if (Q002 == null || Q002 == '') {
			Cookies.remove('Q002', { path: '' });
		};
	});
	
	// On KeyDown set BirthPlace in variable and cookie
	$("[name='Q002']").keydown(function()
	{
		Q002 = $(this).val();
		$('#keydown').text(Q002);
		Cookies.set('Q002', Q002, { expires: config.cookietime, path: '' });

		if (Q002 == null || Q002 == '') {
			Cookies.remove('Q002', { path: '' });
		};
	});
	
	// On KeyPress set BirthPlace in variable and cookie
	$("[name='Q002']").keypress(function()
	{
		Q002 = $(this).val();
		$('#keypress').text(Q002);
		Cookies.set('Q002', Q002, { expires: config.cookietime, path: '' });

		if (Q002 == null || Q002 == '') {
			Cookies.remove('Q002', { path: '' });
		};
	});
}
);

/* #endregion */

/* #region Q003 */
var Q003 = Cookies.get('Q003');

// check if variable is empty (no cookie set)
if (Q003 == null){
	var Q003 = '';
} else {
	// variable is not empty, replace placeholder in input field
	document.getElementById('Q003').value = Cookies.get('Q003');
};


// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
{
	// On KeyUp set BirthPlace in variable and cookie
	$("[name='Q003']").keyup(function()
	{
		Q003 = $(this).val();
		$('#keyup').text(Q003);
		Cookies.set('Q003', Q003, { expires: config.cookietime, path: '' });

		if (Q003 == null || Q003 == '') {
			Cookies.remove('Q003', { path: '' });
		};
	});
	
	// On KeyDown set BirthPlace in variable and cookie
	$("[name='Q003']").keydown(function()
	{
		Q003 = $(this).val();
		$('#keydown').text(Q003);
		Cookies.set('Q003', Q003, { expires: config.cookietime, path: '' });

		if (Q003 == null || Q003 == '') {
			Cookies.remove('Q003', { path: '' });
		};
	});
	
	// On KeyPress set BirthPlace in variable and cookie
	$("[name='Q003']").keypress(function()
	{
		Q003 = $(this).val();
		$('#keypress').text(Q003);
		Cookies.set('Q003', Q003, { expires: config.cookietime, path: '' });

		if (Q003 == null || Q003 == '') {
			Cookies.remove('Q003', { path: '' });
		};
	});
}
);
/* #endregion */

/* #region Q004 */
var Q004 = Cookies.get('Q004');

// check if variable is empty (no cookie set)
if (Q004 == null){
	var Q004 = '';
} else {
	// variable is not empty, replace placeholder in input field
	document.getElementById('Q004').value = Cookies.get('Q004');
};


// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
{
	// On KeyUp set BirthPlace in variable and cookie
	$("[name='Q004']").keyup(function()
	{
		Q004 = $(this).val();
		$('#keyup').text(Q004);
		Cookies.set('Q004', Q004, { expires: config.cookietime, path: '' });

		if (Q004 == null || Q004 == '') {
			Cookies.remove('Q004', { path: '' });
		};
	});
	
	// On KeyDown set BirthPlace in variable and cookie
	$("[name='Q004']").keydown(function()
	{
		Q004 = $(this).val();
		$('#keydown').text(Q004);
		Cookies.set('Q004', Q004, { expires: config.cookietime, path: '' });

		if (Q004 == null || Q004 == '') {
			Cookies.remove('Q004', { path: '' });
		};
	});
	
	// On KeyPress set BirthPlace in variable and cookie
	$("[name='Q004']").keypress(function()
	{
		Q004 = $(this).val();
		$('#keypress').text(Q004);
		Cookies.set('Q004', Q004, { expires: config.cookietime, path: '' });

		if (Q004 == null || Q004 == '') {
			Cookies.remove('Q004', { path: '' });
		};
	});
}
);
/* #endregion */


var Q005 = Cookies.get('Q005');

// check if variable is empty (no cookie set)
if (Q005 == null){
	var Q005 = '';
} else {
	// variable is not empty, replace placeholder in input field
	document.getElementById('Q005').value = Cookies.get('Q005');
};


// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
{
	// On KeyUp set BirthPlace in variable and cookie
	$("[name='Q005']").keyup(function()
	{
		Q005 = $(this).val();
		$('#keyup').text(Q005);
		Cookies.set('Q005', Q005, { expires: config.cookietime, path: '' });

		if (Q005 == null || Q005 == '') {
			Cookies.remove('Q005', { path: '' });
		};
	});
	
	// On KeyDown set BirthPlace in variable and cookie
	$("[name='Q005']").keydown(function()
	{
		Q005 = $(this).val();
		$('#keydown').text(Q005);
		Cookies.set('Q005', Q005, { expires: config.cookietime, path: '' });

		if (Q005 == null || Q005 == '') {
			Cookies.remove('Q005', { path: '' });
		};
	});
	
	// On KeyPress set BirthPlace in variable and cookie
	$("[name='Q005']").keypress(function()
	{
		Q005 = $(this).val();
		$('#keypress').text(Q005);
		Cookies.set('Q005', Q005, { expires: config.cookietime, path: '' });

		if (Q005 == null || Q005 == '') {
			Cookies.remove('Q005', { path: '' });
		};
	});
}
);





var Q006 = Cookies.get('Q006');

// check if variable is empty (no cookie set)
if (Q006 == null){
	var Q006 = '';
} else {
	// variable is not empty, replace placeholder in input field
	document.getElementById('Q006').value = Cookies.get('Q006');
};


// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
{
	// On KeyUp set BirthPlace in variable and cookie
	$("[name='Q006']").keyup(function()
	{
		Q006 = $(this).val();
		$('#keyup').text(Q006);
		Cookies.set('Q006', Q006, { expires: config.cookietime, path: '' });

		if (Q006 == null || Q006 == '') {
			Cookies.remove('Q006', { path: '' });
		};
	});
	
	// On KeyDown set BirthPlace in variable and cookie
	$("[name='Q006']").keydown(function()
	{
		Q006 = $(this).val();
		$('#keydown').text(Q006);
		Cookies.set('Q006', Q006, { expires: config.cookietime, path: '' });

		if (Q006 == null || Q006 == '') {
			Cookies.remove('Q006', { path: '' });
		};
	});
	
	// On KeyPress set BirthPlace in variable and cookie
	$("[name='Q006']").keypress(function()
	{
		Q006 = $(this).val();
		$('#keypress').text(Q006);
		Cookies.set('Q006', Q006, { expires: config.cookietime, path: '' });

		if (Q006 == null || Q006 == '') {
			Cookies.remove('Q006', { path: '' });
		};
	});
}
);
