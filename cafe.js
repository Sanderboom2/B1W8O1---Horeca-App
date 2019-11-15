function bestel(){
	const bp = 2;
	const fp = 1;
	const wp = 3;
	const ba = 2;
	const bz = 4;
	var prize = 0;
	while (true){
		var bestel = prompt('Wat wilt u bestellen? (drinken of snacks)? Wilt u de rekening type dan (stop).')
		if (bestel == 'drinken'){	
			var drank = prompt('Wat wilt u drinken? Kies uit: (bier, fris of wijn)?')
			if (drank == 'bier'){
				var bier = prompt('Hoeveel bier wilt u toevoegen aan uw bestelling?')
				var prijs = bier *bp;
				document.write(bier + 'x Bier - \u20AC' + bp*bier +'<br>')
				prize+=prijs
			}//if bier
			else if (drank == 'fris'){
		 		var fris = prompt('Hoeveel fris wilt u toevoegen aan uw bestelling?')
		 		var prijs = fris *fp;
		 		document.write(fris + 'x Fris - \u20AC' + fp*fris +'<br>')
		 		prize+=prijs
			}//else if fris
			else if (drank == 'wijn'){
		 		var wijn = prompt('Hoeveel wijn wilt u toevoegen aan uw bestelling?')
		 		var prijs = wijn *wp;
		 		document.write(wijn + 'x Wijn - \u20AC' + wp*wijn +'<br>')
		 		prize+=prijs
			}//else if wijn
		}//if drinken
		else if (bestel == 'snacks'){
			var snacks = prompt('Hoeveel bitterballen wilt u per schaal (8 of 16)?')
			if (snacks == '8'){
				var acht = prompt ('Hoeveel schalen met 8 bitterballen wilt u?')
				var prijs = acht *ba;
				document.write(acht + 'x Bitterballen 8 - \u20AC' + ba*acht +'<br>')
				prize+=prijs
			}//if 8
			else if (snacks == '16'){
				var zestien = prompt ('Hoeveel schalen met 16 bitterballen wilt u?')
				var prijs = zestien *bz;
				document.write(zestien + 'x Bitterballen 16 - \u20AC' + bz*zestien +'<br>')
				prize+=prijs
			}//else if 16
		}//else if snacks
		else if (bestel == 'stop'){
			document.write('<hr>')
			document.write("totaalprijs: \u20AC"+prize)
		 	return false;
		}//else if stop
	}//while loop
}//function
bestel();