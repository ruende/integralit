$( document ).ready(function() {
   console.log( "comienzoId" );
   $('#menu-iit').click(function(){
     $('.nav-wrapper-iit').toggleClass('active');
   })
//
//     // Cache selectors
//	 var lastId,
//	     topMenu = $("#top-menu"),
//	     topMenuHeight = topMenu.outerHeight()+15,
//	     // All list items
//	     menuItems = topMenu.find("a"),
//	     // Anchors corresponding to menu items
//	     scrollItems = menuItems.map(function(){
//	       var item = $($(this).attr("href"));
//	       if (item.length) { return item; }
//	     });
//
//	 // Bind click handler to menu items
//	 // so we can get a fancy scroll animation
//	 menuItems.click(function(e){
//	   var href = $(this).attr("href"),
//	       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
//	   $('html, body').stop().animate({ 
//	       scrollTop: offsetTop
//	   }, 900);
//	   e.preventDefault();
//	 });
//
//	 // Bind to scroll
//	 $(window).scroll(function(){
//	    // Get container scroll position
//	    var fromTop = $(this).scrollTop()+topMenuHeight;
//	   
//	    // Get id of current scroll item
//	    var cur = scrollItems.map(function(){
//	      if ($(this).offset().top < fromTop)
//	        return this;
//	    });
//	    // Get the id of the current element
//	    cur = cur[cur.length-1];
//	    var id = cur && cur.length ? cur[0].id : "";
//	   
//	    //logica aparece desaparece menu
//	    if(id == ""){
//	 	   $("body").addClass("MostrarMenu");
//	 	   $("body").removeClass("EsconderMenu");
//	    }
//	    else{
//	 	   $("body").removeClass("MostrarMenu");
//	 	   $("body").addClass("EsconderMenu");
//	    }
//	   
//	    if (lastId !== id) {
//	        lastId = id;
//	        // Set/remove active class
//	        menuItems
//	          .parent().removeClass("active")
//	          .end().filter("[href='#"+id+"']").parent().addClass("active");
//	    }                   
//	 })
//
});
jQuery(document).ready(function($){
	
/****Inicio logica mostrar y esconder menu*****/
	$(window).scroll(function() {
		  if ($(window).scrollTop() > 200) {
		    $('#div').stop().animate({
		      'marginTop': $(window).scrollTop() + 'px',
		      'marginLeft': $(window).scrollLeft() + 'px'
		    }, 'slow');
		  }
		  if($(window).scrollTop()<=700){
			 $("body").addClass("MostrarMenu");
			 $("body").removeClass("EsconderMenu");
			 $('.scrollup').fadeOut();
			 //oculta boton hacia arriba
			}else{
		 	   $("body").removeClass("MostrarMenu");
		 	   $("body").addClass("EsconderMenu");
		 	   $('.scrollup').fadeIn();
			//muestra boton hacia arriba
			}
	});
/****Fin logica mostrar y esconder menu*****/
	
/****Efecto subir arriba boton scrollup*****/	
	$('.scrollup').click(function(){
	    $("html, body").animate({ scrollTop: 0 }, 600);
	    return false;
	});
/****Fin subir arriba boton scrollup*****/	

	var	scrolling = false;
	var contentSections = $('.cd-section'),
		verticalNavigation = $('.cd-vertical-nav'),
		navigationItems = verticalNavigation.find('a'),
		navTrigger = $('.cd-nav-trigger'),
		scrollArrow = $('.cd-scroll-down');

	$(window).on('scroll', checkScroll);

	//smooth scroll to the selected section
	verticalNavigation.on('click', 'a', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
        verticalNavigation.removeClass('open');
    });

    //smooth scroll to the second section
    scrollArrow.on('click', function(event){
    	event.preventDefault();
        smoothScroll($(this.hash));
    });

	// open navigation if user clicks the .cd-nav-trigger - small devices only
    navTrigger.on('click', function(event){
    	event.preventDefault();
    	verticalNavigation.toggleClass('open');
    });

	function checkScroll() {
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame) ? setTimeout(updateSections, 300) : window.requestAnimationFrame(updateSections);
		}
	}

	function updateSections() {
		var halfWindowHeight = $(window).height()/2,
			scrollTop = $(window).scrollTop();
		contentSections.each(function(){
			var section = $(this),
				sectionId = section.attr('id'),
				navigationItem = navigationItems.filter('[href^="#'+ sectionId +'"]');
			console.log(navegationItem);
			( (section.offset().top - halfWindowHeight < scrollTop ) && ( section.offset().top + section.height() - halfWindowHeight > scrollTop) )
				? navigationItem.addClass('active')
				: navigationItem.removeClass('active');
		});
		scrolling = false;
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	300
        );
	}
});