var doc = new jsPDF({
	unit: "mm",
	lineHeight: 1.2
}).setProperties({ title: "Rohkeus - Minun tarinani" });

// All PDF creating things is here
function createPDF() {
	var doc = new jsPDF({
		// DEFINE AGAIN, OTHERWISE IF USER CREATES NEW PDF OVERLAPPING OCCUR
		unit: "mm",
		lineHeight: 1.2
	}).setProperties({ title: "Rohkeus" });

	doc.setFontSize(13);

	// addImage(imageData, format, x, y, width, height, alias, compression, rotation)
	doc.addImage(imgData, "JPEG", 0, 0, 10, 148); // X, Y, W, H
	doc.addImage(imgData, "JPEG", 0, 148, 20, 149);

	var KUKAOLEN = "Minun nimeni on " + NIMI + ". ";
	var JANNITTAVATTILANTEET = "Jännitän kovasti tilanteita joissa " + EXCITE + ". ";
	var SILLOINOLEN = "Silloin minusta tuntuu, että olen " + FEELING + ". ";
	var HALUANOLLAROHKEA = "Nyt haluan olla rohkea. Uskaaltakseni yrittää tilanteesta selviytymistä, minä " + SOLUTION + ". ";
	var KUNOLENROHKEA = "Kun olen uskaltanut olla rohkea pelottavassa ja jännittävässä tilanteessa, minusta tuntuu että " + FEELING2 + ". ";
	var TUNNENROHKEAKSI = "Tunnen itseni rohkeaksi " + BRAVE + ". ";

	var KAIKKI =  KUKAOLEN + JANNITTAVATTILANTEET + SILLOINOLEN + "\n\n" + HALUANOLLAROHKEA + KUNOLENROHKEA + "\n\n" + TUNNENROHKEAKSI;
	var KAIKKILINED = doc.splitTextToSize(String(KAIKKI), 160);

	doc.setTextColor(0, 0, 0);
	doc.setFontType("bold");
	doc.text(18.5, 20, "Minun tarinani rohkeudesta");

	doc.setFontType("normal");
	doc.setTextColor(0, 0, 0);

	doc.text(18.5, 32, KAIKKILINED);

	doc.setTextColor(128, 128, 128);
	doc.setFontSize(8);
	doc.text( 20, 290, "Tämä tiedosto on luotu tehtäväpankissa jonka testiversion löydät osoitteesta http://staging.oen.fi." );

	/* #endregion */

	doc.save("rohkeus-minun_tarinani.pdf");
}
