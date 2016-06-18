$(document).ready(function(){
	$('#whoami').addClass('active');
	$('.tabs ul li').click(function(){
		$('.tabs ul li').each(function(index, el) {
			$('#'+el.id).removeClass('active');
		});
		$(this).addClass('active');
	});
	
});
