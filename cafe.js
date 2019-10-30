function drank(){
	for (a=1; a<=3; a++){
	 var drank = prompt('Wat wilt u drinken? Kies uit: bier, fris of wijn?');
	 if (drank == 'bier'){
	 	var bier = prompt('Hoeveel bier wilt u toevoegen aan uw bestelling?')
	 	var nog = prompt('Wilt u nog een ander drankje toevoegen aan uw bestelling? ja of nee?')
	 	if (nog == 'nee'){
	 		return false;
	 	}
	 }
	 else if (drank == 'fris'){
	 	var fris = prompt('Hoeveel fris wilt u toevoegen aan uw bestelling?')
	 	var nog = prompt('Wilt u nog een ander drankje toevoegen aan uw bestelling? ja of nee?')
	 	if (nog == 'nee'){
	 		return false;
	 	}
	 }
	 else if (drank == 'wijn'){
	 	var wijn = prompt('Hoeveel wijn wilt u toevoegen aan uw bestelling?')
	 	var nog = prompt('Wilt u nog een ander drankje toevoegen aan uw bestelling? ja of nee?')
	 	if (nog == 'nee'){
	 		return false;
	 	}
	 }
	}//loop
}//function
drank();
