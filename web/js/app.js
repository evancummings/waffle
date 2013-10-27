$(function(){
	$("#btnReverse").on("click", function(){

		var leftText = $("#leftText").val();

		var regex = /([a-zA-Z0-9\.]*)\s*=\s*([a-zA-Z0-9\.]*)/g;
		leftText = leftText.replace(regex, "$2 = $1");

		$("#rightText").val(leftText);
		
	});

});