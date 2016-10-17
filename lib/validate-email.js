(function ($) {
	$.fn.emailValidator = function () {

		// your code here
		if(($(this).val()).match(/.+@.+\..+/i)) {
			console.log('yoho')
			return $(this)
		}else {
			return false
		}
	}
})(jQuery)
