/*gloval $ */
//https://talaikis.com/random_quotes_api/

function getQuote () {
	$.ajax({
		method:"GET",
		url:"https://talaikis.com/api/quotes/random/",
		success: function(data){
			console.log(data);
			document.getElementById("insertQuote").innerHTML = data.quote;
			document.getElementById("insertAuthor").innerHTML = data.author;
			document.getElementBy
	}
});
}

function genRandBGCol(){
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	var bgColor = "rgb(" + x + ", " + y + ", " + z + ")";
	
	var textX = Math.abs(256 - x);
	var textY = Math.abs(256 - y);
	var textZ = Math.abs(256 - z);
	var textColor = "rgb(" + textX + ", " + textY + ", " + textZ + ")";

	console.log(bgColor);
	document.body.style.background = bgColor;
	document.body.style.color = textColor;
}

document.getElementById("newQuote").onclick = function(){
	getQuote();
	genRandBGCol();
};

getQuote();
genRandBGCol();