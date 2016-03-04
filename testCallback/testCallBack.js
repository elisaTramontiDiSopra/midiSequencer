tempoPassato=0;

function questaImpiegaTempo(callback) {
	setTimeout(function(){ 
		tempoPassato=3; console.log("3 secondi");
		callback();
	}, 3000);								   
	console.log("sono passati 3 secondi ma non è vero perchè viene stampato subito");
	return tempoPassato;
}


function dopoIlTempo() {
	tempoPassato = questaImpiegaTempo(function(){
		console.log("sono passati tre secondi e qualcosa");
		console.log(tempoPassato + 1);
	 });
	
	}
	
dopoIlTempo();