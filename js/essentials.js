$(document).ready(function(){
	$('#whoami').addClass('active');
	$('.tabs ul li').click(function(){
		$('.tabs ul li').each(function(index, el) {
			$('#'+el.id).removeClass('active');
		});
		$(this).addClass('active');
	});
	$('#whoami').click(function(){
		$('.getInTouch').hover(function(){
			$('.getInTouch p').text('sumeet.ninawe@gmail.com');
		}, function(){
			$('.getInTouch p').text('Get In Touch');
		});
	});
	$('.getInTouch').hover(function(){
		$('.getInTouch p').text('sumeet.ninawe@gmail.com');
	}, function(){
		$('.getInTouch p').text('Get In Touch');
	});
	$('.gitButton').hover(function(){
		$('.gitButton').css("background-color", "#00b33c");
	}, function(){
		$('.gitButton').css("background-color", "#00e64d");
	});
});
