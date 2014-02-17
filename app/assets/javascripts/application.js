// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
jQuery.ajaxSetup({ 
  'beforeSend': function(xhr) {xhr.setRequestHeader("Accept", "text/javascript")} 
})

$(document).ready(function(){

	$('form#subscribe')
		.bind("ajax:beforeSend", function(evt, xhr, settings){
			var $divResponse = $('div#response');
			$divResponse.data( 'origText', $divResponse.text() );
		})

		.bind("ajax:success", function(evt, data, status, xhr){
			var $form = $(this);
				var $divResponse = $('div#response');

			$form.find('input[type="email"]').val("");
			$divResponse.html(data.message);
		})
		.bind("ajax:complete", function(evt, xhr, status){
			var $divResponse = $('div#response');
		})
		.bind("ajax:error", function(evt, xhr, status, error){
			var $divResponse = $('div#response'),
				errors,
				errorText,
			errorList;

			try {
				errors = $.parseJSON(xhr.responseText);
			}	catch(err)	{

				errors = {message: "Reload the page"};
			}

			errorText = "Errors with submission"
			errorList = "<ul>"
			for ( error in errors )	{
				errorList += "<li>" + error + ': ' + errors[error] + "</li>";
			}

			errorList += "</ul>";

			$divResponse.html(errorText);
		});
});