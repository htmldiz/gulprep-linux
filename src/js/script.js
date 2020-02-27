jQuery(function($) {
	if( $('body').find('.vertical-slider-wraper').length > 0 ){
		$('body').find('.vertical-slider-wraper').owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'slideInDown',
			smartSpeed:450,
			loop:true,
			margin:30,
			dots:true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
					nav:true
				},
				600:{
					items:1,
					nav:false
				},
				1000:{
					items:1,
					nav:false,
				}
			}
		});
	}
	if( $('body').find('.carousel-populare').length > 0 ){
		$('body').find('.carousel-populare').owlCarousel({
			loop:true,
			margin:30,
			dots:false,
			responsiveClass:true,
			responsive:{
				0:{
					margin:10,
					items:3,
					nav:true
				},
				600:{
					items:3,
					nav:false
				},
				1000:{
					items:6,
					nav:true,
					loop:true
				}
			}
		});
	}
	if( $('body').find('.carousel-cbd-section-wraper').length > 0 ){
		$('body').find('.carousel-cbd-section-wraper').find('.owl-carousel').owlCarousel({
			loop:true,
			margin:30,
			dots:false,
			responsiveClass:true,
			responsive:{
				0:{
					items:2,
					margin:10,
					nav:true
				},
				600:{
					items:3,
					nav:false
				},
				1000:{
					items:4,
					nav:true,
					loop:true
				}
			}
		});
	}
	// $('body').on('click', '.filter-part-1 .dropdown .dropdown-bg', function(event) {
	// 	return false;
	// });
	// if($('body').find('.filter-parts .dropdown-menu').length > 0){
	// 	$('body').find('.filter-parts .dropdown-menu').unbind('click');
	// 	$('body').find('.filter-parts .dropdown-menu').off('click');
	// }
	$('body').on('click', '.filter-parts .dropdown', function(event) {
		$('body').find('.filter-parts .dropdown-menu').unbind('click');
		$('body').find('.filter-parts .dropdown-menu').off('click');
		$('body').find('.filter-parts .dropdown-menu').click(function(e){
			var tagname = $(e.toElement).prop("tagName").toLowerCase();
			console.log(tagname);
			switch (tagname) {
				case 'label':
				case 'a':
				case 'input':
					// $(e.toElement).closest('.dropdown-menu').addClass('show');
					$(e.toElement).closest('.dropdown-menu').dropdown('show');
					break;
					default:
					// $(e.toElement).closest('.dropdown-menu').removeClass('show');
					$(e.toElement).closest('.dropdown-menu').dropdown('hide');
					break;
				}
				return;
			});
	});
});