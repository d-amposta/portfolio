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
	$('nav a[href*=\\#]').on('click', function() {
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 300);
	});

	$(".project-dropdown").on('click', function() {
		$(this).next('.project-text').slideToggle();
	});

	$(".type-text").typewrite({
		actions: [
			{delay: 500},
			{type: "&ltp&gt Web Developer &lt/p&gt"}
		]
	});

	window.sr = ScrollReveal();
	sr.reveal(".scroll-reveal-item", {duration:1000})
});