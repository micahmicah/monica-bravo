$(document).ready(function(){
	StickyNav();
	$( "#loginform" ).submit(function( event ) {
		if ( $( "input:first" ).val() === "bravo123" ) {
			event.preventDefault();
			$('.teaching').removeClass('hidden');
			$('.modal-overlay').addClass('hidden');
			
		}else{
			event.preventDefault();
			$("input").setCustomValidity("barf!");
		}

		$( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
		event.preventDefault();
	});
	var password1 = document.getElementById('password');
	var password2 = "bravo123";

	var checkPasswordValidity = function() {
		if (password1.value != password2) {
			password1.setCustomValidity('Incorrect password');
		} else {
			password1.setCustomValidity('');
		}        
	};

	password1.addEventListener('change', checkPasswordValidity, false);
	password2.addEventListener('change', checkPasswordValidity, false);
	
});



// sticky nav




function StickyNav() {
  

    homeHeaderInit();
    stickyHeader();


    function stickyHeader() {
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('nav-bar').outerHeight();

        $(window).scroll(function(event) {
            didScroll = true;
        });
        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            var st = $(window).scrollTop();
            console.log(st);
            if (Math.abs(lastScrollTop - st) <= delta) {
                return;
            }
            if (st > lastScrollTop && st > navbarHeight) {
                $('.main-nav').removeClass('nav-down').addClass('nav-up');
            } else {
                if (st + $(window).height() < $(document).height()) {
                    $('.main-nav').removeClass('nav-up').addClass('nav-down');
                }
            }
            lastScrollTop = st;
        }

    }

    function homeHeaderInit() {
        if ($('.home').length > 0) {
            $('.main-nav').addClass('nav-up').removeClass('nav-down').delay(500).removeClass('nav-up').addClass('nav-down');
        } else {
            $('.main-nav').removeClass('nav-up').addClass('nav-down');
        }
    }

}
