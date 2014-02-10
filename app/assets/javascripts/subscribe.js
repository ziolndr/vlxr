# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready(function(){
		$('.ready').click(function(){
		$(this).animate({ opacity:0, top: '-40px'},
			'slow').parent().append('<div class="lift-off"></div>');
		$('.lift-off').fadeIn('slow');
		$('input').val('Thank you!').attr("disabled", true);
})