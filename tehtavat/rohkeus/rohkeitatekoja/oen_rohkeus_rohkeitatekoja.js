// Delete cookies
function deleteCookies() {
	var confirmLeave = confirm('Oletko varma että haluat tyhjentää KAIKKI vastauksesi tässä tehtävässä?');
	if (confirmLeave==true) {
		Cookies.remove('BRAVETHINGS1', { path: '' });
		Cookies.remove('BRAVETHINGS2', { path: '' });
		Cookies.remove('BRAVETHINGS3', { path: '' });

		location.reload();
	}
	else {
		return false;
	}
};


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