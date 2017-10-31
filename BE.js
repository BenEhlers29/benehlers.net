// JavaScript Document

$(document).ready(function()
{
	'use strict';
	var navHeight = $('nav').height();
	$('nav').height(navHeight);
});


//BACK TO TOP FUNCTION
$('#TOP').click(function() 
{
	'use strict';
  $('html,body').animate({ scrollTop: 0 });
});


//HEADING SCROLL HANDLER
$(window).scroll(function()
{
	'use strict';
	var top = $(window).scrollTop();
	var firstP = $('main p:first').outerHeight(true);
	var h1Top = $('h1').outerHeight(true);
	var h2Top = $('nav>h2').outerHeight(true);
	var totalTop = h1Top + h2Top + 40;

	if (top >= totalTop) 
	{
		$('nav>div').addClass('fixed').children('h2').hide();
		$('#TOP').removeClass('hidden');
	} 
	else
	{
		$('nav>div').removeClass('fixed').children('h2').show();
		$('#TOP').addClass('hidden');
	}
});


$('#PORTFOLIO').click(function()
{
	'use strict';
	$('main p').hide();
	
});


$('#S1').cycle({ 
    fx:     	'scrollHorz', 
    speed:  	500, 
    timeout: 	0, 
		easing: 	'swing',
    next:   	'#S1_BACK', 
    prev:   	'#S1_NEXT' 
});

$('#S2').cycle({ 
    fx:     	'scrollHorz', 
    speed:  	500, 
    timeout: 	0, 
		easing: 	'swing',
    next:   	'#S2_BACK', 
    prev:   	'#S2_NEXT' 
});

$('img').click(function()
{
	'use strict';
	var src = $(this).attr('src');
	$('body').addClass('noScroll').append('<div id="VIEWER"><button type="button" id="VIEWER_CLOSE">&#8855; CLOSE</button><img id="VIEWER_IMG" src="'+src+'" alt=""></div>');
	$('html').addClass('noScroll', function()
	{
		var offset = $('#VIEWER_IMG').height() / 2;
		$('#VIEWER_IMG').attr('style','margin-top:-'+offset+'px');
	});
});

$(document).on('click', '#VIEWER_CLOSE', function()
{
	'use strict';
	$('#VIEWER').remove();
	$('body, html').removeAttr('class');
});

$(document).on('click', '#VIEWER_IMG', function()
{
	'use strict';
	$('#VIEWER').remove();
	$('body, html').removeAttr('class');
});

$('.more').click(function()
{
	'use strict';
	$(this).fadeOut(1000).parent().addClass('expandArticle');
});


$('#PORTFOLIO').click(function()
{
	'use strict';
	$(this).fadeOut(500);
	$('#HOME').css('position','relative');
});