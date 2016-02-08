elencoCanzoni = document.getElementById("elencoCanzoni");
//creo un riferimento direttamente alla canzone che sto salvando
var myFirebaseRef = new Firebase ("https://blinding-inferno-1146.firebaseio.com/");


window.onload = leggiListaCanzoniDaFirebase();

 


function leggiListaCanzoniDaFirebase() {

		// leggi il db al momento attuale
		myFirebaseRef.on("value", function(snapshot) {
			var nuoveCanzoni = snapshot.val();
			console.log(nuoveCanzoni);
			

			//determino quanto è lungo l'oggetto che mi viene restituito con object.key
			var numeroCanzoniNelDatabase = Object.keys(nuoveCanzoni).length;		
			console.log("numero canzoni "+numeroCanzoniNelDatabase);
			
			//creo un array per metterci i nomi delle canzoni che non conosco a priori			
			var arrayTitoliCanzoni = new Array (numeroCanzoniNelDatabase);			
			
			//riempio l'arrei con i titoli delle canzoni
			for (nome_canzone in nuoveCanzoni) {
					creaPulsantePerOgniCanzoneInFirebase(nome_canzone);
					console.log(nome_canzone);
				}
			
			//creaPulsantePerOgniCanzoneInFirebase();
			
			//leggo l'array
			

		});
}
		

	






function creaPulsantePerOgniCanzoneInFirebase() {
		//	
		var divCanzone = document.createElement("div");
		//var idColonna = "col" + t;
		divCanzone.setAttribute('class', 'divCanzone');
		divCanzone.setAttribute('onclick', 'recuperaNomeCanzone(this)'); 
		divCanzone.setAttribute('data_nome', nome_canzone);
		divCanzone.innerHTML = nome_canzone;
		//divColonna.setAttribute('id', idColonna);
		elencoCanzoni.appendChild(divCanzone);		
		
				
	}


