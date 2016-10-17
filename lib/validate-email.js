(function ($) {
	$.fn.emailValidator = function () {

		// your code here
		if(($(this).val()).match(/.+@.+\..+/i)) {
			console.log('it is true')
			return $(this)
		}else {
			return false
		}
	}
})(jQuery)
