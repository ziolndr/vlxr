$(document.on 'page:change', ->
	if window._gaq?
		_gaq.push ['_trackPageView']
	else if window.pageTracker?
		pageTracker._trackPageview()