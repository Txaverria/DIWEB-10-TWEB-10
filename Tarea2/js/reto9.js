$(document).ready(function () {
	$(".logo-carousel").slick({
		slidesToShow: 5,
		autoplay: true,
		autoplaySpeed: 800,
		arrows: false,
		dots: false,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	});
});