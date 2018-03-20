$(document).ready(function (){
	$('.mobile-ico').click(function(){
		$(this).toggleClass('change');
		$('.header__menu menu').toggleClass('open');
	});
	$('.header__slider').slick({
		dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: false,
        arrows: false
        // autoplaySpeed: 2000,
	});
});