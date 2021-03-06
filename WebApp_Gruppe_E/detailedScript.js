
$( document ).ready(function() {

	//Übernimmt Werte aus dem HTML doc in dem das Script aufgerufen wurde
	var maxStromstärke = parseInt($("#maxA").text());
	var gerätekennung = $("#gk").text();

	//Werte werden im Bereich zufällig zugewiesen
	var spannung = rand(220.0,240.0);
	var stromstärke =  rand(0.0, maxStromstärke+5.0);

	//Werte in HTML übertragen
	$("#spannung").text(spannung);
	$("#stromstärke").text(stromstärke);

	//Vergleicht aktuellen Wert mit dem Maximum an Belastung
	if(stromstärke>maxStromstärke){
		alert("Die maximale Stromstärke wird überschritten!");
	}

});

//Referenziert die Tabelle, erstellt eine neue Zeile und befüllt diese
function addrow(nk, zs){
	var table = document.getElementById("ablesungen");

	var row = table.insertRow(1);

	var zelle1 = row.insertCell(0);
	var zelle2 = row.insertCell(1);
	var zelle3 = row.insertCell(2);

	var datum = new Date();

	zelle1.innerHTML = nk;
	zelle2.innerHTML = zs;
	zelle3.innerHTML = datum;
}

//Max Anzahl Zeilen, damit die Tabelle nicht unter den Footer kommt(Footer ist nicht dynamisch)
var maxRows = 10;
var rows = 0;

//Entnimmt Werte aus dem Formular und übergibt sie an den Zeilengenerator
//Erkennt ob in jedes Feld etwas eingetragen wurde, gibt sonst einen Fehler aus
//Löscht die Eingabefelder nach der Ausführung
function submiter(){
	if(rows < maxRows){
		rows += 1;
		var nutzerkennung = $("#id").val();
		var zählerstand = $("#data").val() + " kWh";
		if (nutzerkennung == "") {
			alert("Geben Sie bitte eine Nutzerkennung ein");
			return false;
		}
		if (zählerstand == " kWh") {
			alert("Geben Sie bitte einen Zählerstand ein");
			return false;
		}
		addrow(nutzerkennung, zählerstand);
		var form = document.getElementById("ablesen");
		form.reset();
	}
	else{
	}
}
//Gibt eine zufällige Zahl in einem Bereich zurück bis auf ein Komma genau
function rand(min, max){
	return parseFloat((Math.random() * (max-min)) + min).toFixed(1);
}
