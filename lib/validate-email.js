(function ($) {
	$.fn.emailValidator = function () {

		// your code here
		if(($(this).val()).match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i)) {
			return $(this)
		}else {
			return false
		}
	}
})(jQuery)
