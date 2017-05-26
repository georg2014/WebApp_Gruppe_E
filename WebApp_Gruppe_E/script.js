$( document ).ready(function() {
	console.log("hello world. I am ready.");
	/*detailsView*/
	/*use ids*/
	//i = id
		//set in html
	//v = volt
	$("#v").text(numberB(220, 240));
	//a = amper
	var a = numberB(0, maxStrain+5);
	$("#a").text(a);
		/*
		Sofern die Stromstärke oberhalb der zulässigen Maximalbelastung liegt, soll auf 
		der Smart Meter-Detailseite eine Warnung angezeigt werden
		*/
//		console.log($("#a").val());
//		console.log($("#a").val()>maxStrain);
		if(a>maxStrain){
			alert("Warnung die Stromstärke liegt oberhalb der zulässigen Maximalbelastung!");
		}
	//s = strain
	$("#s").text(maxStrain);
	/*input*/
	//in = input name
	//ik = input kWh
	
	//button actions
	$("#home").click(home);
	/*button id = add*/
	$("#add").click(addIt);
	$("#details1").click(details1);
	$("#details2").click(details2);
});

var maxStrain = 70;

/*
Beim Ablesen trägt der Nutzer Ihrer Webapplikation dabei seine Nutzerkennung
und einen Verbrauchswert(in kWh)in ein Formular ein. 
Die Nutzerkennung besteht aus den Initialen des Namens des 
Nutzers und den letzten beiden Ziffern seiner Matrikelnummer. 
Ablesungen sollen nach dem Abschicken durch den Nutzer automatisch 
mit dem Datum des Ablesezeitpunkts versehen und auf der Detailansicht des jeweilig
en Smart Meters in eine Liste oder Tabelle aufgenommen werden
 */
function addIt(){
	var name = $("#in").val();
	var date = new Date();
	var kWh = $("#ik").val();
	$("#output").after(
			"<tr id=\"output\"><!-- output next -->"
				+"<td>"+name+"</td>"
				+"<td>"+date.toString().substring(4,15)+"</td>"
				+"<td>"+kWh+"</td>"
			+"</tr>)"
			);
}

function home(){
	window.location.href = "./home.html";
}

function details1(){
	window.location.href = "./details1.html";
}

function details2(){
	window.location.href = "./details2.html";
}

/*
 * Die Spannung
(Genauigkeit: 0.1 Volt)
220 und 240 Volt liegen
*/
/*
Stromstärke
(Genauigkeit:0.1 Ampere) 
 0 und (der jeweiligen maximalen Belastung +5Ampere)
 */

//generate a random number between min and max with accurancy: 0,1 - gleichverteilt
function numberB(min, max){
	var value = ((Math.random() * (max - min)) + min);
	return Math.round(value*10)/10;
}