function bestel(){
	for (a=1; a<=10; a++){
		var bestel = prompt('Wat wilt u bestellen? (drinken of snacks)? Wilt u de rekening type dan (stop).')
	if (bestel == 'drinken'){	
		var drank = prompt('Wat wilt u drinken? Kies uit: (bier, fris of wijn)?');
	}//if drinken
	if (drank == 'bier'){
		var bier = prompt('Hoeveel bier wilt u toevoegen aan uw bestelling?')
	}//if bier
	else if (drank == 'fris'){
	 	var fris = prompt('Hoeveel fris wilt u toevoegen aan uw bestelling?')
	}//else if fris
	else if (drank == 'wijn'){
	 	var wijn = prompt('Hoeveel wijn wilt u toevoegen aan uw bestelling?')
	}//else if wijn
	else if (bestel == 'snacks'){
		var snacks = prompt('Hoeveel bitterballen wilt u per schaal (8 of 16)?')
	}//else if snacks
	if (snacks == '8'){
		var acht = prompt ('Hoeveel schalen met 8 bitterballen wilt u?')
	}//if 8
	else if (snacks == '16'){
		var zestien = prompt ('Hoeveel schalen met 16 bitterballen wilt u?')
	}//else if 16
	else if (bestel == 'stop'){
	 	return false;
	}//else if stop
	}//for loop a
}//function
bestel();
