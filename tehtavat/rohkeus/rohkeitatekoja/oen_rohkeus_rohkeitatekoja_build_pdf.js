var doc = new jsPDF({
	unit: "mm",
	lineHeight: 1.2
}).setProperties({ title: "Rohkeus - Rohkeita tekoja" });

// All PDF creating things is here
function createPDF() {
	var doc = new jsPDF({
		// DEFINE AGAIN, OTHERWISE IF USER CREATES NEW PDF OVERLAPPING OCCUR
		unit: "mm",
		lineHeight: 1.2
	}).setProperties({ title: "Rohkeus - Minun tarinani" });

	doc.setFontSize(13);

	// addImage(imageData, format, x, y, width, height, alias, compression, rotation)
	doc.addImage(imgData, "JPEG", 0, 0, 10, 148); // X, Y, W, H
	doc.addImage(imgData, "JPEG", 0, 148, 20, 149);

	var BRAVETHINGS1 = Cookies.get("BRAVETHINGS1");
	var BRAVETHINGS2 = Cookies.get("BRAVETHINGS2");
	var BRAVETHINGS3 = Cookies.get("BRAVETHINGS3");

	doc.addImage(imgCloud, 'PNG', 10, 20, 180, 166);
	doc.setTextColor(0,0,0);
	if (BRAVETHINGS1) {
		doc.setTextColor(255,0,0);
		doc.setFontSize(24);
		var BRAVETHINGS1LINED = doc.splitTextToSize(String(BRAVETHINGS1), 100);
		doc.text(88.5, 75, BRAVETHINGS1LINED, { angle: 15, align: 'center'});
		doc.setTextColor(0,0,0);
		doc.setFontSize(13);
	};
	if (BRAVETHINGS2) {
		doc.setTextColor(255,255,0);
		doc.setFontSize(24);
		var BRAVETHINGS2LINED = doc.splitTextToSize(String(BRAVETHINGS2), 100);
		doc.text(68.5, 95, BRAVETHINGS2LINED, { angle: -12 });
		doc.setTextColor(0,0,0);
		doc.setFontSize(13);
	};
	if (BRAVETHINGS3) {
		doc.setTextColor(0,255,0);
		doc.setFontSize(24);
		var BRAVETHINGS3LINED = doc.splitTextToSize(String(BRAVETHINGS3), 100);
		doc.text(57, 145, BRAVETHINGS3LINED, { angle: 7 });
		doc.setTextColor(0,0,0);
		doc.setFontSize(13);
	};

	doc.setTextColor(0, 0, 0);
	doc.setFontType("bold");
	doc.text(18.5, 20, "Minun rohkeat tekoni");

	doc.setFontType("normal");
	doc.setTextColor(0, 0, 0);

	doc.setTextColor(128, 128, 128);
	doc.setFontSize(8);
	doc.text( 20, 290, "Tämä tiedosto on luotu tehtäväpankissa jonka testiversion löydät osoitteesta http://staging.oen.fi." );

	doc.save("rohkeus-rohkeita_tekoja.pdf");
}
