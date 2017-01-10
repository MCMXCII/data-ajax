$j('[data-ajax]').click(function(e){
	e.preventDefault();
	$elem = $j(this);
	if(typeof window[$elem.data('ajax')] != "undefined"){
		var callback = window[$elem.data('ajax')]();
	}
	$j.ajax({
		url: $elem.attr('href')
	}).done(function(){
		if(typeof callback == "function"){
			callback();
		}
	})
});
