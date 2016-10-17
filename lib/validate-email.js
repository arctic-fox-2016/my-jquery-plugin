(function ($) {
	$.fn.emailValidator = function () {

		// your code here
		if(($(this).val()).match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i)) {
			console.log('it is true')
			return $(this)
		}else {
			console.log('it is wrong')
			return false
		}
	}
})(jQuery)
