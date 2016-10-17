(function ($) {
	$.fn.emailValidator = function () {
		if(($(this).val()).match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
			return true
		} else {
			return false
		}
	}
})(jQuery)
