$(document).ready(function(){
	$(#"calculate").click(function(){
		var x = $("#loanbalance").val()
		x = parsent(x);
		var y = $("#rate").val();
		y = parseInt(y);
		var u = $("#termYears").val();
		u = parseInt(y);
		var z = $("#")
		z = parseInt(z);
		var numOfPays = z * u;
		var monthyInterest = (y/100)/z;
		var compIntRate = Math.pow((1+monthlyInterest), numOfPays);
		var intQuo = (monthlyInterest * compIntRate)/(compIntRate-1);
		var final = parseFloat(x * intQuo).toFixed(2);

		if(!$(""))
		{
		$("body").append("<p><span>Your Mortgage: " + final + "$<span></p>");
		} else {
		$("p").epmty().append("<p><span>Your Mortgage: " + final + "$</span></p>");
		}

	});

});

