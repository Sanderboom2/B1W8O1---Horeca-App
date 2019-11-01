function bestel(){
	const bp = 2;
	const fp = 1;
	const wp = 2.50;
	const ba = 2.50;
	const bz = 5;
	var tot = bier*bp + fris*fp + wijn*wp + acht*ba + zestien*bz;
	for (a=1; a<=25; a++){
		var bestel = prompt('Wat wilt u bestellen? (drinken of snacks)? Wilt u de rekening type dan (stop).')
		if (bestel == 'drinken'){	
			var drank = prompt('Wat wilt u drinken? Kies uit: (bier, fris of wijn)?')
			if (drank == 'bier'){
				var bier = prompt('Hoeveel bier wilt u toevoegen aan uw bestelling?')
				document.write(bier + 'x Bier € <br>')
			}//if bier
			else if (drank == 'fris'){
		 		var fris = prompt('Hoeveel fris wilt u toevoegen aan uw bestelling?')
		 		document.write(fris + 'x Fris € <br>')
			}//else if fris
			else if (drank == 'wijn'){
		 		var wijn = prompt('Hoeveel wijn wilt u toevoegen aan uw bestelling?')
		 		document.write(wijn + 'x Wijn € <br>')
			}//else if wijn
		}//if drinken
		else if (bestel == 'snacks'){
			var snacks = prompt('Hoeveel bitterballen wilt u per schaal (8 of 16)?')
			if (snacks == '8'){
				var acht = prompt ('Hoeveel schalen met 8 bitterballen wilt u?')
				document.write(acht + 'x 8 Bitterballen € <br>')
			}//if 8
			else if (snacks == '16'){
				var zestien = prompt ('Hoeveel schalen met 16 bitterballen wilt u?')
				document.write(zestien + 'x Bitterballen 16 stuks' + 'x<br>')
			}//else if 16
		}//else if snacks
		else if (bestel == 'stop'){
			document.write('Totaalprijs:' + tot);
		 	return false;
		}//else if stop
	}//for loop a
}//function
bestel();
