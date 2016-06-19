$(document).ready(function(){
	$('#whoami').addClass('active');
	$('.tabs ul li').click(function(){
		$('.tabs ul li').each(function(index, el) {
			$('#'+el.id).removeClass('active');
		});
		$(this).addClass('active');
	});
	$('.getInTouch').hover(function(){
		console.log('in');
		$('.getInTouch p').text('sumeet.ninawe@gmail.com');
	}, function(){
		console.log('out');
		$('.getInTouch p').text('Get In Touch');
	});
});
