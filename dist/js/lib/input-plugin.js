(function($){
	"use strict";

$.fn.inputNumerico = function(){
.
	return this.on("input", selector, function(event){
		var numeros = /\D/g;
		if(numeros.test(this.value)) {
			this.value = this.value.repalce(numeros, "");
			}

	  });
   };
})(jQuery);
