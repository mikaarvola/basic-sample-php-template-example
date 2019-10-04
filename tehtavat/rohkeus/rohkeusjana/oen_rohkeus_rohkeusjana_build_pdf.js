var doc = new jsPDF({
	unit: "mm",
	lineHeight: 1.2
}).setProperties({ title: "Rohkeus - Rohkeusjana" });

// All PDF creating things is here
function createPDF() {
	var doc = new jsPDF({
		// DEFINE AGAIN, OTHERWISE IF USER CREATES NEW PDF OVERLAPPING OCCUR
		unit: "mm",
		lineHeight: 1.2
	}).setProperties({ title: "Rohkeus - Rohkeusjana" });

	doc.setFontSize(13);

	// addImage(imageData, format, x, y, width, height, alias, compression, rotation)
	doc.addImage(imgData, "JPEG", 0, 0, 10, 148); // X, Y, W, H
	doc.addImage(imgData, "JPEG", 0, 148, 20, 149);

	var SLIDER1ARVO = Cookies.get("SLIDER1");
	var SLIDER2ARVO = Cookies.get("SLIDER2");

	var SLIDER3TXT = Cookies.get("SITUATION1");
	if (SLIDER3TXT) {
		var SLIDER3TEXT = SLIDER3TXT.toUpperCase();
	};
	var SLIDER3ARVO = Cookies.get("SLIDER3");
	
	var SLIDER4TXT = Cookies.get("SITUATION2");
	if (SLIDER4TXT) {
		var SLIDER4TEXT = SLIDER4TXT.toUpperCase();
	};
	var SLIDER4ARVO = Cookies.get("SLIDER4");

	var SLIDER5TXT = Cookies.get("SITUATION3");
	if (SLIDER5TXT) {
		var SLIDER5TEXT = SLIDER5TXT.toUpperCase();
	};
	var SLIDER5ARVO = Cookies.get("SLIDER5");


		/* #region FIRST SLIDER */
		doc.setFontType("normal");
		doc.setTextColor(0, 0, 0);
		doc.setFontSize(10);
	
		doc.setLineWidth(1.0);
		doc.text(18.5, 172.0, "ENSIMMÄINEN PÄIVÄ UUDESSA TYÖPAIKASSA");
	
		if (SLIDER1ARVO == 1) {
			doc.setFillColor(0, 255, 0);
			doc.setDrawColor(0, 255, 0);
			doc.setLineWidth(1);
			doc.circle(120, 171.0, 4, "S");
			doc.text( 18.5, 178.5, "Ensimmäisenä päivänä uudessa työpaikassa minua ei jännitä yhtään.");
		}
	
		if (SLIDER1ARVO == 2) {
			doc.setFillColor(0, 255, 0);
			doc.setDrawColor(0, 255, 0);
			doc.setLineWidth(1);
			doc.circle(130, 171.0, 4, "S");
			doc.text( 18.5, 178.5, "Ensimmäisenä päivänä uudessa työpaikassa minua ei jännitä oikeastaan yhtään.");
		}
	
		if (SLIDER1ARVO == 3) {
			doc.setFillColor(255, 255, 0);
			doc.setDrawColor(255, 255, 0);
			doc.setLineWidth(1);
			doc.circle(140, 171.0, 4, "S");
			doc.text( 18.5, 178.5, "Ensimmäisenä päivänä uudessa työpaikassa koen normaalia jännitystä.");
		}
	
		if (SLIDER1ARVO == 4) {
			doc.setFillColor(255, 0, 0);
			doc.setDrawColor(255, 0, 0);
			doc.setLineWidth(1);
			doc.circle(150, 151.0, 4, "S");
			doc.text( 18.5, 158.5, "Ensimmäisenä päivänä uudessa työpaikassa minua jännittää jonkun verran. Olen silti rohkea.");
		}
	
		if (SLIDER1ARVO == 5) {
			doc.setFillColor(255, 0, 0);
			doc.setDrawColor(255, 0, 0);
			doc.setLineWidth(1);
			doc.circle(160, 171.0, 4, "S");
			doc.text( 18.5, 178.5, "Ensimmäisenä päivänä uudessa työpaikassa minua jännittää todella paljon. Olen silti todella rohkea.");
		}
	
		doc.text(118.5, 172, "1");
		doc.text(129.0, 172, "2");
		doc.text(139.0, 172, "3");
		doc.text(149.0, 172, "4");
		doc.text(159.0, 172, "5");
		/* #endregion */
	
		/* #region SECOND SLIDER */
		doc.setFontType("normal");
		doc.setTextColor(0, 0, 0);
		doc.setFontSize(10);
	
		doc.setLineWidth(1.0);
		doc.text( 18.5, 195.0, "YKSIN OSTOKSILLA KÄYNTI");
		doc.setDrawColor(0, 0, 0);
	
		if (SLIDER2ARVO == 1) {
			doc.setFillColor(0, 255, 0);
			doc.setDrawColor(0, 255, 0);
			doc.setLineWidth(1);
			doc.circle(120, 193.5, 4, "S");
			doc.text( 18.5, 2000.5, "Yksin ostoksilla käydessä minua ei jännitä yhtään.");
		}
	
		if (SLIDER2ARVO == 2) {
			doc.setFillColor(0, 255, 0);
			doc.setDrawColor(0, 255, 0);
			doc.setLineWidth(1);
			doc.circle(130, 193.5, 4, "S");
			doc.text( 18.5, 200.5, "Yksin ostoksilla käydessä minua ei jännitä oikeastaan yhtään.");
		}
	
		if (SLIDER2ARVO == 3) {
			doc.setFillColor(255, 255, 0);
			doc.setDrawColor(255, 255, 0);
			doc.setLineWidth(1);
			doc.circle(140, 193.5, 4, "S");
			doc.text( 18.5, 200.5, "Yksin ostoksilla käydessä koen normaalia jännitystä.");
		}
	
		if (SLIDER2ARVO == 4) {
			doc.setFillColor(255, 0, 0);
			doc.setDrawColor(255, 0, 0);
			doc.setLineWidth(1);
			doc.circle(150, 193.5, 4, "S");
			doc.text( 18.5, 200.5, "Yksin ostoksilla käydessä minua jännittää jonkun verran. Olen silti rohkea.");
		}
	
		if (SLIDER2ARVO == 5) {
			doc.setFillColor(255, 0, 0);
			doc.setDrawColor(255, 0, 0);
			doc.setLineWidth(1);
			doc.circle(160, 193.5, 4, "S");
			doc.text( 18.5, 200.5, "Yksin ostoksilla käydessä minua jännittää todella paljon. Olen silti todella rohkea.");
		}
	
		doc.text(118.5, 195.0, "1");
		doc.text(129.0, 195.0, "2");
		doc.text(139.0, 195.0, "3");
		doc.text(149.0, 195.0, "4");
		doc.text(159.0, 195.0, "5");
		/* #endregion */
		
		/* #region THIRD SLIDER */
		doc.setFontType("normal");
		doc.setTextColor(0, 0, 0);
		doc.setFontSize(10);
	
		doc.setLineWidth(1.0);
		if (SLIDER3TEXT) {
			doc.text(18.5, 217.0, SLIDER3TEXT);
		} else {
			doc.setLineWidth(0.2);
			doc.setDrawColor(0, 0, 0);
			doc.line(18.5, 218.0, 80.0, 218.0);
			doc.setLineWidth(1.0);
		};
		doc.setDrawColor(0, 0, 0);
	
		if (SLIDER3ARVO == 1) {
			doc.setFillColor(0, 255, 0);
			doc.setDrawColor(0, 255, 0);
			doc.setLineWidth(1);
			doc.circle(120, 215.5, 4, "S");
			doc.text( 18.5, 222.5, "Minua ei jännitä yhtään. Ei siis pätkän vertaa.");
		}
	
		if (SLIDER3ARVO == 2) {
			doc.setFillColor(0, 255, 0);
			doc.setDrawColor(0, 255, 0);
			doc.setLineWidth(1);
			doc.circle(130, 215.5, 4, "S");
			doc.text( 18.5, 222.5, "Minua ei jännitä oikeastaan yhtään.");
		}
	
		if (SLIDER3ARVO == 3) {
			doc.setFillColor(255, 255, 0);
			doc.setDrawColor(255, 255, 0);
			doc.setLineWidth(1);
			doc.circle(140, 215.5, 4, "S");
			doc.text( 18.5, 222.5, "Koen normaalia jännitystä.");
		}
	
		if (SLIDER3ARVO == 4) {
			doc.setFillColor(255, 0, 0);
			doc.setDrawColor(255, 0, 0);
			doc.setLineWidth(1);
			doc.circle(150, 215.5, 4, "S");
			doc.text( 18.5, 222.5, "Minua jännittää jonkun verran. Olen silti rohkea.");
		}
	
		if (SLIDER3ARVO == 5) {
			doc.setFillColor(255, 0, 0);
			doc.setDrawColor(255, 0, 0);
			doc.setLineWidth(1);
			doc.circle(160, 215.5, 4, "S");
			doc.text( 18.5, 222.5, "Minua jännittää todella paljon. Olen silti todella rohkea.");
		}
	
		doc.text(119.0, 217.0, "1");
		doc.text(129.0, 217.0, "2");
		doc.text(139.0, 217.0, "3");
		doc.text(149.0, 217.0, "4");
		doc.text(159.0, 217.0, "5");
		/* #endregion */
	
		/* #region FOURTH SLIDER */
		doc.setFontType("normal");
		doc.setTextColor(0, 0, 0);
		doc.setFontSize(10);
	
		doc.setLineWidth(1.0);
		if (SLIDER4TEXT) {
			doc.text(18.5, 239.0, SLIDER4TEXT);
		};
		doc.setDrawColor(0, 0, 0);
	
		if (SLIDER4ARVO == 1) {
			doc.setFillColor(0, 255, 0);
			doc.setDrawColor(0, 255, 0);
			doc.setLineWidth(1);
			doc.circle(120, 237.5, 4, "S");
			doc.text( 18.5, 244.5, "Minua ei jännitä yhtään.");
		}
	
		if (SLIDER4ARVO == 2) {
			doc.setFillColor(0, 255, 0);
			doc.setDrawColor(0, 255, 0);
			doc.setLineWidth(1);
			doc.circle(130, 237.5, 4, "S");
			doc.text( 18.5, 244.5, "Minua ei jännitä oikeastaan yhtään.");
		}
	
		if (SLIDER4ARVO == 3) {
			doc.setFillColor(255, 255, 0);
			doc.setDrawColor(255, 255, 0);
			doc.setLineWidth(1);
			doc.circle(140, 237.5, 4, "S");
			doc.text( 18.5, 244.5, "Koen normaalia jännitystä.");
		}
	
		if (SLIDER4ARVO == 4) {
			doc.setFillColor(255, 0, 0);
			doc.setDrawColor(255, 0, 0);
			doc.setLineWidth(1);
			doc.circle(150, 237.5, 4, "S");
			doc.text( 18.5, 244.5, "Minua jännittää jonkun verran. Olen silti rohkea.");
		}
	
		if (SLIDER4ARVO == 5) {
			doc.setFillColor(255, 0, 0);
			doc.setDrawColor(255, 0, 0);
			doc.setLineWidth(1);
			doc.circle(160, 237.5, 4, "S");
			doc.text( 18.5, 244.5, "Minua jännittää todella paljon. Olen silti todella rohkea.");
		}
	
		doc.text(119.0, 239.0, "1");
		doc.text(129.0, 239.0, "2");
		doc.text(139.0, 239.0, "3");
		doc.text(149.0, 239.0, "4");
		doc.text(159.0, 239.0, "5");
		/* #endregion */
	
		/* #region FIFTH SLIDER */
			doc.setFontType("normal");
			doc.setTextColor(0, 0, 0);
			doc.setFontSize(10);
		
			doc.setLineWidth(1.0);
			if (SLIDER5TEXT) {
				doc.text(18.5, 261.0, SLIDER5TEXT);
			};
			doc.setDrawColor(0, 0, 0);
		
			if (SLIDER5ARVO == 1) {
				doc.setFillColor(0, 255, 0);
				doc.setDrawColor(0, 255, 0);
				doc.setLineWidth(1);
				doc.circle(120, 259.5, 4, "S");
				doc.text( 18.5, 266.5, "Minua ei jännitä yhtään.");
			}
		
			if (SLIDER5ARVO == 2) {
				doc.setFillColor(0, 255, 0);
				doc.setDrawColor(0, 255, 0);
				doc.setLineWidth(1);
				doc.circle(130, 259.5, 4, "S");
				doc.text( 18.5, 266.5, "Minua ei jännitä oikeastaan yhtään.");
			}
		
			if (SLIDER5ARVO == 3) {
				doc.setFillColor(255, 255, 0);
				doc.setDrawColor(255, 255, 0);
				doc.setLineWidth(1);
				doc.circle(140, 259.5, 4, "S");
				doc.text( 18.5, 266.5, "Koen normaalia jännitystä.");
			}
		
			if (SLIDER5ARVO == 4) {
				doc.setFillColor(255, 0, 0);
				doc.setDrawColor(255, 0, 0);
				doc.setLineWidth(1);
				doc.circle(150, 259.5, 4, "S");
				doc.text( 18.5, 266.5, "Minua jännittää jonkun verran. Olen silti rohkea.");
			}
		
			if (SLIDER5ARVO == 5) {
				doc.setFillColor(255, 0, 0);
				doc.setDrawColor(255, 0, 0);
				doc.setLineWidth(1);
				doc.circle(160, 259.5, 4, "S");
				doc.text( 18.5, 266.5, "Minua jännittää todella paljon. Olen silti todella rohkea.");
			}
		
			doc.text(119.0, 261.0, "1");
			doc.text(129.0, 261.0, "2");
			doc.text(139.0, 261.0, "3");
			doc.text(149.0, 261.0, "4");
			doc.text(159.0, 261.0, "5");
			/* #endregion */

	doc.setTextColor(0, 0, 0);
	doc.setFontType("bold");
	doc.text(18.5, 20, "Minun tarinani rohkeudesta");

	doc.setFontType("normal");
	doc.setTextColor(0, 0, 0);

	doc.setTextColor(128, 128, 128);
	doc.setFontSize(8);
	doc.text( 20, 290, "Tämä tiedosto on luotu tehtäväpankissa jonka testiversion löydät osoitteesta http://staging.oen.fi." );

	doc.save("rohkeus-rohkeusjana.pdf");
}
