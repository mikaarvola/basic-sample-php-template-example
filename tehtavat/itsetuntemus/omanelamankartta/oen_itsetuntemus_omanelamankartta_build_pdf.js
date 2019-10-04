var doc = new jsPDF({
	unit: "mm",
	lineHeight: 1.2
}).setProperties({ title: "Itsetuntemus - Oman elämän kartta" });

// All PDF creating things is here
function createPDF() {
	var doc = new jsPDF({
		// DEFINE AGAIN, OTHERWISE IF USER CREATES NEW PDF OVERLAPPING OCCUR
		unit: "mm",
		lineHeight: 1.2
	}).setProperties({ title: "Itsetuntemus - Oman elämän kartta" });

	doc.setFontSize(13);
	// addImage(imageData, format, x, y, width, height, alias, compression, rotation)
	doc.addImage(imgData, 'JPEG', 0, 0, 10, 148); // X, Y, W, H
	doc.addImage(imgData, 'JPEG', 0, 148, 20, 149);

	doc.addImage(imgCloud, 'PNG',  10,  20, 100,  66);
	doc.addImage(imgCloud, 'PNG',  10,  84, 100,  66);
	doc.addImage(imgCloud, 'PNG',  10, 148, 100,  66);
	doc.addImage(imgCloud, 'PNG',  10, 213, 100,  66);

	doc.addImage(imgCloud, 'PNG', 105,  20, 100,  66);
	doc.addImage(imgCloud, 'PNG', 105,  84, 100,  66);
	doc.addImage(imgCloud, 'PNG', 105, 148, 100,  66);
	// doc.addImage(imgCloud, 'PNG', 105, 213, 100,  66); // Not needed, 7 clouds enough now


	// doc.addImage(imgCloudWhite, 'PNG', 105, 90, 60, 40);

	var jsKarttaMistaUnelmoinLINED                                  = doc.splitTextToSize(String(jsKarttaMistaUnelmoin), 66); 
	var jsKarttaMitaOsaanTehdaHyvinLINED                            = doc.splitTextToSize(String(jsKarttaMitaOsaanTehdaHyvin), 66); 
	var jsKarttaMitaToiveitaMinullaOnLINED                          = doc.splitTextToSize(String(jsKarttaMitaToiveitaMinullaOn), 66); 
	var jsKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissaniLINED = doc.splitTextToSize(String(jsKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissani), 66);
	var jsKarttaMitaPelkaanLINED                                    = doc.splitTextToSize(String(jsKarttaMitaPelkaan), 66);
	var jsKarttaMitaTeenVapaaajallaniLINED                          = doc.splitTextToSize(String(jsKarttaMitaTeenVapaaajallani), 66);
	var jsKarttaMitaPalvelujaSaanLINED                              = doc.splitTextToSize(String(jsKarttaMitaPalvelujaSaan), 66); 




	// COMMENTED OUT DUE TO PROBLEMS WITH CUSTOM FONT
	// doc.addFont('Roboto-Thin.ttf', 'Roboto', 'thin');
	// doc.setFont('Roboto', 'thin');

	// AWARE!
	// doc.text(20, 80, 'Lapsuusmuistoni: ' + jsKarttaMitaToiveitaMinullaOnLINED); //LINEBREAKS ARE NOT WORKING so do not combine things!

	// doc.text(20, 128, 'Header: '); // Use this method
	// doc.text(20, 134, jsKarttaMitaToiveitaMinullaOnLINED); //LINEBREAKS ARE WORKING

	doc.setTextColor(  0,   0,   0);
	doc.setFontType('bold');
	doc.text(33, 20, 'Oman elämän kartta');

	doc.setTextColor(  0,   0,   0);
	doc.setFontType('bold');
	doc.text(33, 38, 'Mistä unelmoin?');
	doc.setFontType('normal');
	// COMMENTED OUT DUE TO PROBLEMS WITH CUSTOM FONT
	// doc.setFont('Roboto', 'thin');
	doc.setTextColor(128, 128, 128);
	doc.text(33, 44, jsKarttaMistaUnelmoinLINED);

	doc.setTextColor(  0,   0,   0);
	doc.setFontType('bold');
	doc.text(33, 102, 'Mitä osaan tehdä hyvin?');
	doc.setFontType('normal');
	// doc.setFont('Roboto', 'thin');
	doc.setTextColor(128, 128, 128);
	doc.text(33, 108, jsKarttaMitaOsaanTehdaHyvinLINED);

	doc.setTextColor(  0,   0,   0);
	doc.setFontType('bold');
	doc.text(33, 166, 'Mitä toiveita minulla on?');
	doc.setFontType('normal');
	// doc.setFont('Roboto', 'thin');
	doc.setTextColor(128, 128, 128);
	doc.text(33, 172, jsKarttaMitaToiveitaMinullaOnLINED); 

	doc.setTextColor(  0,   0,   0);
	doc.setFontType('bold');
	doc.text(33, 231, 'Vahvuuteni luonteenpiirteissä?');
	doc.setFontType('normal');
	// doc.setFont('Roboto', 'thin');
	doc.setTextColor(128, 128, 128);
	doc.text(33, 237, jsKarttaMitkaOvatMinunVahvuuksianiLuonteenpiirteissaniLINED); 

	doc.setTextColor(  0,   0,   0);
	doc.setFontType('bold');
	doc.text(128, 38, 'Mitä pelkään?');
	doc.setFontType('normal');
	// doc.setFont('Roboto', 'thin');
	doc.setTextColor(128, 128, 128);
	doc.text(128, 44, jsKarttaMitaPelkaanLINED); 

	doc.setTextColor(  0,   0,   0);
	doc.setFontType('bold');
	doc.text(128, 102, 'Mitä teen vapaa-ajallani?');
	doc.setFontType('normal');
	// doc.setFont('Roboto', 'thin');
	doc.setTextColor(128, 128, 128);
	doc.text(128, 108, jsKarttaMitaTeenVapaaajallaniLINED); 
 
	doc.setTextColor(  0,   0,   0);
	doc.setFontType('bold');
	doc.text(128, 166, 'Mitä palveluja saan?');
	doc.setFontType('normal');
	// doc.setFont('Roboto', 'thin');
	doc.setTextColor(128, 128, 128);
	doc.text(128, 172, jsKarttaMitaPalvelujaSaanLINED); 

	doc.setFontType("normal");
	doc.setTextColor(128, 128, 128);
	doc.setFontSize(8);
	doc.text( 20, 290, "Tämä tiedosto on luotu tehtäväpankissa jonka testiversion löydät osoitteesta http://staging.oen.fi." );

	doc.save("itsetuntemus-oma_elaman_kartta.pdf");
}
