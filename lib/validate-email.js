(function ($) {
	$.fn.emailValidator = function () {
		if(($(this).val()).match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm)) {
 			return $(this)
 		}else {
 			return false
 		}
	}
})(jQuery)
