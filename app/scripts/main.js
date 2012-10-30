require(["../components/fancybox/source/fancyboxpack"], function(fancyboxpack) {
    
    ////////////////////////////////
	//  Fancybox
	////////////////////////////////

	jQuery(document).ready(function() {
		jQuery('.fancybox').fancybox({
			'type'           : 'ajax',
			'transitionIn'   : 'elastic',
			'transitionOut'  : 'elastic',
			'centerOnScroll' : true,
			'overlayColor'   : '#fff',
			'overlayOpacity' : '0.7'
		});
	});

});


