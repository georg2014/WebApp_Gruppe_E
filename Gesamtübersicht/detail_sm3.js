var maxStromstärke = 100;
var gerätekennung = "CD34567890";

$( document ).ready(function() {
$("#submitInput").click(unlock);
spannung = rand(220,240);
stromstärke = rand(0,120);

document.getElementById('spannung').innerHTML= spannung;
document.getElementById('stromstärke').innerHTML= stromstärke;

if(stromstärke>maxStromstärke+5){
	console.log(spannung);
	alert("Die maximale Stromstärke wird überschritten!");
}
});


	CreateTable("meineTabelle","hiertabellerein",["Nutzerkennung","Verbrauchswert","Datum"]);
var Nutzerkennung = [];
var Verbrauchswert = [];
for(var i = 0; i < Verbrauchswert.length; i++){
	TableAdd("meineTabelle",[Nutzerkennung[i],Verbrauchswert[i]]);
}

function CreateTable(id,where,data){
    var table = '<table id="' + id + '"><thead><tr>';
    for(var i=0; i<data.length;i++){
        table += "<th>"+ data[i] + "</th>";
    }
    table+= "</tr></thead><tbody></tbody></table>";
    document.getElementById(where).innerHTML+=table;
}

function TableAdd(table,data){
	var row = "<tr>";
	for(var i = 0; i<data.length;i++){
		row += "<td>" + data[i] +"</td>";
	}
	row += "</tr>";
	document.getElementById(table).getElementsByTagName("tbody")[0].innerHTML += row;
}


function unlock() {
	var nutzerkennung = $("#textInput").val();
	var verbrauchswert = $("#textInput2").val();
	
	Nutzerkennung.push(nutzerkennung);
	Verbrauchswert.push(verbrauchswert);
	TableAdd("meineTabelle",[Nutzerkennung[Nutzerkennung.length-1],Verbrauchswert[Verbrauchswert.length-1],new Date()]);
}

 function rand (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}