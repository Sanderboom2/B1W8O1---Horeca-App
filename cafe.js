function bestel(){
	const bp = 2;
	const fp = 1;
	const wp = 3;
	const ba = 2;
	const bz = 4;
	for (a=1; a<=25; a++){
		var bestel = prompt('Wat wilt u bestellen? (drinken of snacks)? Wilt u de rekening type dan (stop).')
		if (bestel == 'drinken'){	
			var drank = prompt('Wat wilt u drinken? Kies uit: (bier, fris of wijn)?')
			if (drank == 'bier'){
				var bier = prompt('Hoeveel bier wilt u toevoegen aan uw bestelling?')
				document.write(bier + 'x Bier - \u20AC' + bp*bier +'<br>')
			}//if bier
			else if (drank == 'fris'){
		 		var fris = prompt('Hoeveel fris wilt u toevoegen aan uw bestelling?')
		 		document.write(fris + 'x Fris - \u20AC' + fp*fris +'<br>')
			}//else if fris
			else if (drank == 'wijn'){
		 		var wijn = prompt('Hoeveel wijn wilt u toevoegen aan uw bestelling?')
		 		document.write(wijn + 'x Wijn - \u20AC' + wp*wijn +'<br>')
			}//else if wijn
		}//if drinken
		else if (bestel == 'snacks'){
			var snacks = prompt('Hoeveel bitterballen wilt u per schaal (8 of 16)?')
			if (snacks == '8'){
				var acht = prompt ('Hoeveel schalen met 8 bitterballen wilt u?')
				document.write(acht + 'x Bitterballen 8 - \u20AC' + ba*acht +'<br>')
			}//if 8
			else if (snacks == '16'){
				var zestien = prompt ('Hoeveel schalen met 16 bitterballen wilt u?')
				document.write(zestien + 'x Bitterballen 16 - \u20AC' + bz*zestien +'<br>')
			}//else if 16
		}//else if snacks
		else if (bestel == 'stop'){
			var tot = bier*bp + fris*fp + wijn*wp + acht*ba + zestien*bz;
			document.write('Totaalprijs \u20AC' + tot);
		 	return false;
		}//else if stop
	}//for loop a
}//function
bestel();
