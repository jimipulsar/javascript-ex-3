var nome_access = prompt("Inserisci il tuo cognome");

var array = [ "Rossi", "Colapinto", "Castaldini", "Papagni" , "Ricci", "Desantis", "Caldarola" ];

var cognome =  "Caldarola";

var contatore = 0;
var trovato = false;

var lista = document.getElementById('lista');

while (!trovato && contatore < array.length) {
  if (array[contatore] == nome_access) {
    trovato = true;
  }
  console.log(array[contatore]);
  contatore++;
}

if (trovato == true) {
  document.writeln("<h1>Congratulazioni! Sei presente nella lista.</h1>"  + "Il tuo cognome si trova in " + contatore + "° posizione" + "<br>" + "<h3>Ecco la lista dei partecipanti: </h3>" + array ) ;
  console.log("Accesso consentito.");
}

else {
  document.writeln("<h1>Non sei presente nella lista e non potrai visualizzarla.</h1>" ) ;
  console.log("Accesso negato.");
}
