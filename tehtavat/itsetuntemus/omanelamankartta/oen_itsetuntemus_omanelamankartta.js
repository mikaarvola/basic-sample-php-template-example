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

		document.getElementById('Q007').value = '';
		var Q006 = document.getElementById('Q007').value;
		Cookies.remove('Q007', { path: '' });

		document.getElementById('Q008').value = '';
		var Q006 = document.getElementById('Q008').value;
		Cookies.remove('Q008', { path: '' });

		location.reload();
	}
	else {
		return false;
	}
};

var jsKarttaMistaUnelmoin = Cookies.get('cookieKarttaMistaUnelmoin');
var jsKarttaMitaOsaanTehdaHyvin = Cookies.get('cookieKarttaMitaOsaanTehdaHyvin');
var jsKarttaMitaToiveitaMinullaOn = Cookies.get('cookieKarttaMitaToiveitaMinullaOn');
var jsKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani = Cookies.get('cookieKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani');
var jsKarttaMitaPelkaan = Cookies.get('cookieKarttaMitaPelkaan');
var jsKarttaMitaTeenVapaaajallani = Cookies.get('cookieKarttaMitaTeenVapaaajallani');
var jsKarttaMitaPalvelujaSaan = Cookies.get('cookieKarttaMitaPalvelujaSaan');


// check if variable is empty (no cookie set)
if (jsKarttaMistaUnelmoin == null){
    var jsKarttaMistaUnelmoin = '';
} else {
    // variable is not empty, replace placeholder in input field
    document.getElementById('idKarttaMistaUnelmoin').value = Cookies.get('cookieKarttaMistaUnelmoin');
};


// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
    {
        // On KeyUp set BirthPlace in variable and cookie
        $("[name='idKarttaMistaUnelmoin']").keyup(function()
        {
            jsKarttaMistaUnelmoin = $(this).val();
            $('#keyup').text(jsKarttaMistaUnelmoin);
            Cookies.set('cookieKarttaMistaUnelmoin', jsKarttaMistaUnelmoin, { expires: config.cookietime, path: '' });
        });
        
        // On KeyDown set BirthPlace in variable and cookie
        $("[name='idKarttaMistaUnelmoin']").keydown(function()
        {
            jsKarttaMistaUnelmoin = $(this).val();
            $('#keydown').text(jsKarttaMistaUnelmoin);
            Cookies.set('cookieKarttaMistaUnelmoin', jsKarttaMistaUnelmoin, { expires: config.cookietime, path: '' });
        });
    
        // On KeyPress set BirthPlace in variable and cookie
        $("[name='idKarttaMistaUnelmoin']").keypress(function()
        {
            jsKarttaMistaUnelmoin = $(this).val();
            $('#keypress').text(jsKarttaMistaUnelmoin);
            Cookies.set('cookieKarttaMistaUnelmoin', jsKarttaMistaUnelmoin, { expires: config.cookietime, path: '' });
        });
    }
);

// check if variable is empty (no cookie set)
if (jsKarttaMitaOsaanTehdaHyvin == null){
    var jsKarttaMitaOsaanTehdaHyvin = '';
} else {
    // variable is not empty, replace placeholder in input field
    document.getElementById('idKarttaMitaOsaanTehdaHyvin').value = Cookies.get('cookieKarttaMitaOsaanTehdaHyvin');
};

$(document).ready(function()
    {
        // On KeyUp set BirthPlace in variable and cookie
        $("[name='idKarttaMitaOsaanTehdaHyvin']").keyup(function()
        {
            jsKarttaMitaOsaanTehdaHyvin = $(this).val();
            $('#keyup').text(jsKarttaMitaOsaanTehdaHyvin);
            Cookies.set('cookieKarttaMitaOsaanTehdaHyvin', jsKarttaMitaOsaanTehdaHyvin, { expires: config.cookietime, path: '' });
        });
        
        // On KeyDown set BirthPlace in variable and cookie
        $("[name='idKarttaMitaOsaanTehdaHyvin']").keydown(function()
        {
            jsKarttaMitaOsaanTehdaHyvin = $(this).val();
            $('#keydown').text(jsKarttaMitaOsaanTehdaHyvin);
            Cookies.set('cookieKarttaMitaOsaanTehdaHyvin', jsKarttaMitaOsaanTehdaHyvin, { expires: config.cookietime, path: '' });
        });
    
        // On KeyPress set BirthPlace in variable and cookie
        $("[name='idKarttaMitaOsaanTehdaHyvin']").keypress(function()
        {
            jsKarttaMitaOsaanTehdaHyvin = $(this).val();
            $('#keypress').text(jsKarttaMitaOsaanTehdaHyvin);
            Cookies.set('cookieKarttaMitaOsaanTehdaHyvin', jsKarttaMitaOsaanTehdaHyvin, { expires: config.cookietime, path: '' });
        });
    }
);

// check if variable is empty (no cookie set)
if (jsKarttaMitaToiveitaMinullaOn == null){
    var jsKarttaMitaToiveitaMinullaOn = '';
} else {
    // variable is not empty, replace placeholder in input field
    document.getElementById('idKarttaMitaToiveitaMinullaOn').value = Cookies.get('cookieKarttaMitaToiveitaMinullaOn');
};

// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
    {
        // On KeyUp set BirthPlace in variable and cookie
        $("[name='idKarttaMitaToiveitaMinullaOn']").keyup(function()
        {
            jsKarttaMitaToiveitaMinullaOn = $(this).val();
            $('#keyup').text(jsKarttaMitaToiveitaMinullaOn);
            Cookies.set('cookieKarttaMitaToiveitaMinullaOn', jsKarttaMitaToiveitaMinullaOn, { expires: config.cookietime, path: '' });
        });
        
        // On KeyDown set BirthPlace in variable and cookie
        $("[name='idKarttaMitaToiveitaMinullaOn']").keydown(function()
        {
            jsKarttaMitaToiveitaMinullaOn = $(this).val();
            $('#keydown').text(jsKarttaMitaToiveitaMinullaOn);
            Cookies.set('cookieKarttaMitaToiveitaMinullaOn', jsKarttaMitaToiveitaMinullaOn, { expires: config.cookietime, path: '' });
        });
    
        // On KeyPress set BirthPlace in variable and cookie
        $("[name='idKarttaMitaToiveitaMinullaOn']").keypress(function()
        {
            jsKarttaMitaToiveitaMinullaOn = $(this).val();
            $('#keypress').text(jsKarttaMitaToiveitaMinullaOn);
            Cookies.set('cookieKarttaMitaToiveitaMinullaOn', jsKarttaMitaToiveitaMinullaOn, { expires: config.cookietime, path: '' });
        });
    }
);

// check if variable is empty (no cookie set)
if (jsKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani == null){
    var jsKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani = '';
} else {
    // variable is not empty, replace placeholder in input field
    document.getElementById('idKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani').value = Cookies.get('cookieKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani');
};

// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
    {
        // On KeyUp set BirthPlace in variable and cookie
        $("[name='idKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani']").keyup(function()
        {
            jsKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani = $(this).val();
            $('#keyup').text(jsKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani);
            Cookies.set('cookieKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani', jsKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani, { expires: config.cookietime, path: '' });
        });
        
        // On KeyDown set BirthPlace in variable and cookie
        $("[name='idKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani']").keydown(function()
        {
            jsKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani = $(this).val();
            $('#keydown').text(jsKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani);
            Cookies.set('cookieKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani', jsKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani, { expires: config.cookietime, path: '' });
        });
    
        // On KeyPress set BirthPlace in variable and cookie
        $("[name='idKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani']").keypress(function()
        {
            jsKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani = $(this).val();
            $('#keypress').text(jsKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani);
            Cookies.set('cookieKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani', jsKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani, { expires: config.cookietime, path: '' });
        });
    }
);

// check if variable is empty (no cookie set)
if (jsKarttaMitaPelkaan == null){
    var jsKarttaMitaPelkaan = '';
} else {
    // variable is not empty, replace placeholder in input field
    document.getElementById('idKarttaMitaPelkaan').value = Cookies.get('cookieKarttaMitaPelkaan');
};


// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
    {
        // On KeyUp set BirthPlace in variable and cookie
        $("[name='idKarttaMitaPelkaan']").keyup(function()
        {
            jsKarttaMitaPelkaan = $(this).val();
            $('#keyup').text(jsKarttaMitaPelkaan);
            Cookies.set('cookieKarttaMitaPelkaan', jsKarttaMitaPelkaan, { expires: config.cookietime, path: '' });
        });
        
        // On KeyDown set BirthPlace in variable and cookie
        $("[name='idKarttaMitaPelkaan']").keydown(function()
        {
            jsKarttaMitaPelkaan = $(this).val();
            $('#keydown').text(jsKarttaMitaPelkaan);
            Cookies.set('cookieKarttaMitaPelkaan', jsKarttaMitaPelkaan, { expires: config.cookietime, path: '' });
        });
    
        // On KeyPress set BirthPlace in variable and cookie
        $("[name='idKarttaMitaPelkaan']").keypress(function()
        {
            jsKarttaMitaPelkaan = $(this).val();
            $('#keypress').text(jsKarttaMitaPelkaan);
            Cookies.set('cookieKarttaMitaPelkaan', jsKarttaMitaPelkaan, { expires: config.cookietime, path: '' });
        });
    }
);

// check if variable is empty (no cookie set)
if (jsKarttaMitaTeenVapaaajallani == null){
    var jsKarttaMitaTeenVapaaajallani = '';
} else {
    // variable is not empty, replace placeholder in input field
    document.getElementById('idKarttaMitaTeenVapaaajallani').value = Cookies.get('cookieKarttaMitaTeenVapaaajallani');
};


// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
    {
        // On KeyUp set BirthPlace in variable and cookie
        $("[name='idKarttaMitaTeenVapaaajallani']").keyup(function()
        {
            jsKarttaMitaTeenVapaaajallani = $(this).val();
            $('#keyup').text(jsKarttaMitaTeenVapaaajallani);
            Cookies.set('cookieKarttaMitaTeenVapaaajallani', jsKarttaMitaTeenVapaaajallani, { expires: config.cookietime, path: '' });
        });
        
        // On KeyDown set BirthPlace in variable and cookie
        $("[name='idKarttaMitaTeenVapaaajallani']").keydown(function()
        {
            jsKarttaMitaTeenVapaaajallani = $(this).val();
            $('#keydown').text(jsKarttaMitaTeenVapaaajallani);
            Cookies.set('cookieKarttaMitaTeenVapaaajallani', jsKarttaMitaTeenVapaaajallani, { expires: config.cookietime, path: '' });
        });
    
        // On KeyPress set BirthPlace in variable and cookie
        $("[name='idKarttaMitaTeenVapaaajallani']").keypress(function()
        {
            jsKarttaMitaTeenVapaaajallani = $(this).val();
            $('#keypress').text(jsKarttaMitaTeenVapaaajallani);
            Cookies.set('cookieKarttaMitaTeenVapaaajallani', jsKarttaMitaTeenVapaaajallani, { expires: config.cookietime, path: '' });
        });
    }
);

// check if variable is empty (no cookie set)
if (jsKarttaMitaPalvelujaSaan == null){
    var jsKarttaMitaPalvelujaSaan = '';
} else {
    // variable is not empty, replace placeholder in input field
    document.getElementById('idKarttaMitaPalvelujaSaan').value = Cookies.get('cookieKarttaMitaPalvelujaSaan');
};


// Update JS variable, input field and cookie at real time after every keypress with jQuery
$(document).ready(function()
    {
        // On KeyUp set BirthPlace in variable and cookie
        $("[name='idKarttaMitaPalvelujaSaan']").keyup(function()
        {
            jsKarttaMitaPalvelujaSaan = $(this).val();
            $('#keyup').text(jsKarttaMitaPalvelujaSaan);
            Cookies.set('cookieKarttaMitaPalvelujaSaan', jsKarttaMitaPalvelujaSaan, { expires: config.cookietime, path: '' });
        });
        
        // On KeyDown set BirthPlace in variable and cookie
        $("[name='idKarttaMitaPalvelujaSaan']").keydown(function()
        {
            jsKarttaMitaPalvelujaSaan = $(this).val();
            $('#keydown').text(jsKarttaMitaPalvelujaSaan);
            Cookies.set('cookieKarttaMitaPalvelujaSaan', jsKarttaMitaPalvelujaSaan, { expires: config.cookietime, path: '' });
        });
    
        // On KeyPress set BirthPlace in variable and cookie
        $("[name='idKarttaMitaPalvelujaSaan']").keypress(function()
        {
            jsKarttaMitaPalvelujaSaan = $(this).val();
            $('#keypress').text(jsKarttaMitaPalvelujaSaan);
            Cookies.set('cookieKarttaMitaPalvelujaSaan', jsKarttaMitaPalvelujaSaan, { expires: config.cookietime, path: '' });
        });
    }
);