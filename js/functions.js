 // Report Issue
 function reportIssue() {
	var confirmLeave = confirm('Siirrän sinut toiselle sivustolle jotta voit ilmoittaa virheestä. Paina mieleesi myös tehtävä jossa olet juuri nyt. Onko ok?');
	if (confirmLeave==true) {
		window.location.href = 'http://x86.fi/bugit';
	}
	else {
		return false;
	}
}
