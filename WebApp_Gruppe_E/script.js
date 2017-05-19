$( document ).ready(function() {
	console.log("hello world");
	$("#home").click(home);
	$("#details1").click(details1);
	$("#details2").click(details2);
	function writeInoutInList(){//TODO
		$("#output").append($("<output>").attr("n", $("#name").text()));
	}
	$(function(){
		writeInoutInList();
		v();//volt
	})
	//i();//id
	//s();//stain
	//a();//amper
});

//http://stackoverflow.com/questions/9399354/how-to-open-a-new-window-and-insert-html-into-it-using-jquery
function home(){
	window.location.href = "./home.html";
}

function details1(){
	window.location.href = "./details1.html";
}

function details2(){
	window.location.href = "./details2.html";
}

//static data
//function randomBetween(min, max){
//	return min + (int)(Math.random() * ((max - min) + 1));
//}
function v(){//volt
	/*
	~ 0.1 Volt
	 220 - 240 Volt 
	*/
	var min = 220;
	var max = 240;
	var volt = min + Math.round(Math.random() * ((max - min) + 1));
	$("#output").insert(volt);
}

function i(){//id
	window.location.href = "./details2.html";
}

function s(){//stain
	window.location.href = "./details2.html";
}

function a(){//amper
	window.location.href = "./details2.html";
}
