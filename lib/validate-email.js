(function ($) {
	$.fn.emailValidator = function () {

		// your code here
		if(($(this).val()).match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
			console.log('it is true')
			return $(this)
		}else {
			return false
		}
	}
})(jQuery)
