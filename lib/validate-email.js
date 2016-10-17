(function ($) {
	$.fn.emailValidator = function () {

		// your code here
		if(($(this).val()).match(/.+@.+\..+/i)) {
 			return $(this)
 		}else {
 			return false
 		}
	}
})(jQuery)
