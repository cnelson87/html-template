
CNJS.Application = {

	init: function () {
		var self = this;
		//console.log('CNJS.Application.init');

		$.event.trigger('CNJS:Application:initialized');

	}

};

$(function () {
	CNJS.Application.init();
});
