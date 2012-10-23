require(["../components/fancybox/source/fancyboxpack"], function(fancyboxpack) {
    
    ////////////////////////////////
	//  Fancybox
	////////////////////////////////

	jQuery(document).ready(function() {
		jQuery('.fancybox').fancybox({
			'type'          : 'ajax',
			'transitionIn'  : 'elastic',
			'transitionOut' : 'elastic',
			'overlayColor'  : '#fff',
			'opacity'       : '0.7'
		});
	});

});


