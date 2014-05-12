

$(document).ready(function(){

	$('#trigger').click(function(){ 
		$('#container').remove(); //prevent multiple grids
		
https://gist.github.com/necenzurat/5995158/stars
		var containerSide = 800;
		var quantity = $('#num').val();
		var hw = containerSide/quantity;

		if(quantity>1 && quantity<129) { 
			//new grid
			$('body').append("<div id='container' style='width:"+containerSide+"px; height:"+containerSide+";'></div>");

			//create new boxes within grid
			for(var i=0 ; i< quantity ; i++) {
				$('#container').append("<div class='row'>");
				for(var j=0 ; j < quantity ; j++) {
					$('#container').append("<div class='box' style='width:"+hw+"px; height:"+hw+"px; background-color:#888; display:inline-block;'></div>");
				}
				$('#container').append("</div>");
			}
		}
		else {
			alert('lolno');
		}
		$('.box').mouseover(function() {
			$(this).css('background-color', '#00f');
		});
		$('.box').mouseout(function() {
			$(this).css('background-color', '#888');
		});	
	});

	
});


