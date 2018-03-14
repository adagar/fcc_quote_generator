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
	}
});
}

document.getElementById("newQuote").onclick = function(){
	getQuote();
};

getQuote();