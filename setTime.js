var milliseconds;

function currentTime(){

	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	 milliseconds = h * 36e5 + m * 6e4;
}
function getCurrenttime(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	 milliseconds = h * 36e5 + m * 6e4;
	document.getElementById("currentTime").innerHTML = milliseconds;
}

function canlcelAll(){
	document.getElementById("demo").innerHTML = " ";
	    document.getElementById("hours").innerHTML = " ";
			  document.getElementById("min").innerHTML = " ";
				  document.getElementById("milliscnd").innerHTML ="Enter Time Again";
}

document.getElementById("save").addEventListener("click", function(){

		currentTime();
	    var x = document.getElementById("timeonly").value;
    document.getElementById("demo").innerHTML = x;
    var hours = x.substring(0,2);
      document.getElementById("hours").innerHTML = hours;
    var min = x.substring(3,5);
      document.getElementById("min").innerHTML = min;

    var hrmilli = 36e5 * parseInt(hours);

    var minmilli = 6e4 * parseInt(min);

    var milli = hrmilli + minmilli ;

    var diff = milliseconds - milli ;

    var abs =  Math.abs(diff);

    document.getElementById("milliscnd").innerHTML = abs;
    var strng = abs.toString();
    publish(strng,'presence',2)
});
