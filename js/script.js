$(document).ready(function() {
		
	//change navbar property on scroll
	var scrollTop = 0;
	$(window).scroll(function() {
		scrollTop = $(window).scrollTop();

		if(scrollTop >= 100) {
			$(".navbar").addClass("navbar-change");
		}else if (scrollTop < 100) {
			$(".navbar").removeClass("navbar-change");
		}
	});

	// smooth scroll to anchor
	$('a[href*=\\#]').on('click', function() {
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 300);
	});

	$(".project-dropdown").on('click', function() {
		$(this).next('.project-text').slideToggle();
	});

	$(".greeting").typewrite({
		actions: [
			{delay: 500},
			{type: "Hi"},
			{type: ", I'm Darryl, "},
			{delay: 1000},
			{type: "web developer"}
		]
	});

	window.sr = ScrollReveal();
	sr.reveal(".scroll-reveal-item", {duration:1000})
});