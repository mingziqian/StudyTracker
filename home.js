$(document).ready(function(){ 

	$('#study').click(function(){
		$('.form').addClass('active');
	});
	
	$('.subject').click(function() {
		$('#select-class').removeClass('active');
	});
});
