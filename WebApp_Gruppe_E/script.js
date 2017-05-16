$( document ).ready(function() {
	console.log("hello world");
	$("#home").click(home);
	$("#details1").click(details1);
	$("#details2").click(details2);
	v();//volt
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
//http://stackoverflow.com/questions/18536726/javascript-to-display-the-current-date-and-time
function v(){//volt
	/*
	~ 0.1 Volt
	 220 - 240 Volt 
	*/
    var volt = randomBetween(Min, Max)
    document.getElementById("v").innerHTML = volt;
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

function randomBetween(Min, Max){
	return Min + (int)(Math.random() * ((Max - Min) + 1));
}