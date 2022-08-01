/*Definizione di Closure
Il principio di base su cui si fonda questo meccanismo stabilisce che ogni variabile che era accessibile quando una funzione
è stata definita rimane "racchiusa" nello scope accessibile dalla funzione. Questo meccanismo è detto closure.


var saluto = "Buongiorno";
var visualizzaSaluti;
function saluta(persone) {
	var nomeCognome;
	var saluti = [];
	for (var i in persone) {
		nomeCognome = persone[i].nome + " " + persone[i].cognome;
		saluti.push(function() {
			console.log(saluto + " " + nomeCognome);
		});
	}
	return saluti;
}
visualizzaSaluti = saluta([{nome: "Mario", cognome: "Rossi"},
                           {nome: "Marco", cognome: "Neri"}]);
for (var i in visualizzaSaluti) {
	visualizzaSaluti[i]();
}






/*Nel caso specifico ci aspetteremmo che vengano visualizzate due stringhe personalizzate per i 
due oggetti presenti nell'array. Invece il risultato che otteniamo è la medesima stringa ripetuta 
due volte per la stessa persona: l'ultimo elemento dell'array.

Il perchè di questo comportamento inatteso è legato alla closure delle funzioni 
definite all'interno del ciclo. Ciascuna delle due funzioni fa riferimento alla variabile 
locale nomeCognome della funzione saluta() ed il valore di questa variabile nel momento in cui viene 
restituito l'array di funzioni è proprio la concatenazione del nome e cognome dell'ultimo elemento dell'array. 
Questo spiega il perchè della visualizzazione della stessa stringa.

Per aggirare l'ostacolo possiamo fare ricorso ad una immediately-invoked function expression che ci consente di fissare il valore corrente della variabile:



Il codice evidenzia come, al posto di aggiungere nell'array direttamente la funzione 
incaricata di visualizzare il saluto, definiamo una funzione che restituisce la funzione 
desiderata dopo averla invocata passando la variabile nomeCognome come parametro. In questo modo fissiamo 
il valore della variabile eliminando di fatto il riferimento diretto alla variabile nomeCognome.

*/
var saluto = "Buongiorno";
var visualizzaSaluti;
function saluta(persone) {
	var nomeCognome;
	var saluti = [];
	for (var i in persone) {
		nomeCognome = persone[i].nome + " " + persone[i].cognome;
		// immediately-invoked function expression
		saluti.push((function(nc) {
						return function() {
							console.log(saluto + " " + nc);
						};
					})(nomeCognome));
	}
	return saluti;
}
visualizzaSaluti = saluta([{nome: "Mario", cognome: "Rossi"},
                           {nome: "Marco", cognome: "Neri"}]);
for (var i in visualizzaSaluti) { visualizzaSaluti[i](); }


//In console si possono vedere i risultati.