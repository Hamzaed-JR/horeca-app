const prijsFris = 2.50;
const prijsBier = 2.75;
const prijsWijn = 3.10;
const prijsKleineSchalen = 4.20;
const prijsGroteSchalen =6.80;

var aantalFris = 0;
var aantalBier = 0;
var aantalWijn = 0;
var aantalKleineSchalen = 0;
var aantalGroteSchalen = 0;

var prijsTotaalFris = 0;
var prijsTotaalBier = 0;
var prijsTotaalWijn = 0;
var prijsTotaalKleineSchalen = 0;
var prijsTotaalGroteSchalen = 0;

var prijsTotaal;

order();

function order() {
	while( input != 'stop') {
		var input = prompt('Wat wil je bestellen. Je heb een keuze tussen fris, bier, wijn en snack.')

		if (input == 'fris') {
			aantal = parseInt(prompt('Hoeveel fris wil je.'))
			aantalFris= aantalFris + aantal; 
			console.log('aantal fris = '+ aantalFris)
			rekening();
			document.write(aantalFris + 'x' + " Fris = "+ "&euro;"+prijsTotaalFris + '<br>');
		}
			else if (input == 'bier') {
				aantal = parseInt(prompt('Hoeveel bier wil je.'))
				aantalBier= aantalBier + aantal;
				console.log('aantal bier = '+ aantalBier)
				rekening();
				document.write(aantalBier + 'x' + " Bier = "+ "&euro;"+prijsTotaalBier + '<br>');
			}
				else if (input == 'wijn') {
				aantal = parseInt(prompt('Hoeveel wijn wil je.'))
				aantalWijn= aantalWijn + aantal;
				console.log('aantal wijn = '+ aantalWijn)
				rekening();
				document.write(aantalWijn + 'x' + " Wijn = "+ "&euro;"+prijsTotaalWijn + '<br>');
				}
		else if (input == 'snack') { 
		aantal = parseInt(prompt('Hoeveel bitterballen wilt u toevoegen (8 of 16)?'))

			if (aantal  == '8') {
				aantal = parseInt(prompt('Hoeveel schalen van 8 bitterballen wilt u toevoegen aan uw bestelling?'))
				aantalKleineSchalen = aantalKleineSchalen +aantal;
				console.log('aantal kleine schalen bitterballen '+ aantalKleineSchalen)
				rekening();
				document.write(aantalKleineSchalen + 'x' + " schaal van 8 = "+ "&euro;"+prijsTotaalKleineSchalen + '<br>');
			}
				else if (aantal  == '16') {
					aantal = parseInt(prompt('Hoeveel schalen van 16 bitterballen wilt u toevoegen aan uw bestelling?'))
					aantalGroteSchalen =  'aantalGroteSchalen '+ aantalGroteSchalen;
					console.log('aantal grote schalen bitterballen '+ aantalGroteSchalen)
					rekening();
					document.write(aantalGroteSchalen + 'x' + " schaal van 16 = "+ "&euro;"+prijsTotaalGroteSchalen + '<br>');	
			   	}
		}
		else if (input == 'stop') {
		totaalRekening();
		
		} 
		else{
			alert('wij hebben geen ' +input+ 'in onze assortiment!')
		}
	}
}

function rekening() {
	prijsTotaalFris = aantalFris * prijsFris;
	prijsTotaalBier = aantalBier * prijsBier;
	prijsTotaalWijn = aantalWijn * prijsWijn;
	prijsTotaalKleineSchalen = aantalKleineSchalen * prijsKleineSchalen;
	prijsTotaalGroteSchalen = aantalGroteSchalen * prijsGroteSchalen;
	console.log('prijsTotaalFris= '+ prijsTotaalFris);
	console.log('prijsTotaalBier= '+ prijsTotaalBier);
	console.log('prijsTotaalWijn= '+ prijsTotaalWijn);
	console.log('aantalKleineSchalen '+ aantalKleineSchalen);
	console.log('aantalGroteSchalen '+ aantalGroteSchalen);
}

function totaalRekening() {
	prijsIntotaal = prijsTotaalFris+ prijsTotaalBier+ prijsTotaalWijn+ prijsTotaalKleineSchalen+ prijsTotaalGroteSchalen;
	console.log('prijsIntotaal ' + prijsIntotaal);
}
