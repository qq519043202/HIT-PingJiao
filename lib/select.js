var tt = $('#trid');

var rows = tt.find('tr');
rows.splice(0,1);
var len = rows.length;

var score = {
	1:1,
	2:2,
	3:2
}
// Math.round(Math.random()*2+1)


var selected = function()
{
	var i = 1;
	rows.each(function(){
		if (score[i]) {
			$(this).find('input[type=radio]')[score[i]].checked = 1;
		}
		else
		{
			$(this).find('input[type=radio]')[3].checked = 1;
		}
		i++;
	})
}


selected();