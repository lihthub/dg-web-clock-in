$(function(){

	//eg: pattern = "yyyy-MM-dd hh:mm:ss";
	Date.prototype.getFormattedDate = function(pattern) {
	    
	    function getFullStr(i) {
	        return i > 9 ? "" + i : "0" + i;
	    }
	    
	    pattern = pattern.replace(/yyyy/,this.getFullYear())
	        .replace(/MM/,getFullStr(this.getMonth()+1))
	        .replace(/dd/,getFullStr(this.getDate()))
	        .replace(/hh/,getFullStr(this.getHours()))
	        .replace(/mm/,getFullStr(this.getMinutes()))
	        .replace(/ss/,getFullStr(this.getSeconds()));

	    return pattern;
	};

	$('.header').text((new Date()).getFormattedDate("yyyy/MM/dd hh:mm:ss"));
	setInterval(function() {
		$('.header').text((new Date()).getFormattedDate("yyyy/MM/dd hh:mm:ss"));
	}, 1000);
	
});