$( document ).ready(function() {
   $('#menu-iit').click(function(){
     $('.nav-wrapper-iit').toggleClass('active');
   })

  // DETENER EL CAROUSEL  
  $('#Metodologia-iit').carousel({
    pause: true,
    interval: 40000,
  });
   
   /*************INICIO JQUERY MARIO ***********/
   
   captcha();
   
   $("#nombre").focus("click", function(){
		cleanCSSId("nombre");
	});

	$("#correo").focus("click", function(){
		cleanCSSId("correo");
	});

	$("#telefono").focus("click", function(){
		cleanCSSId("telefono");
	});

	$("#direccion").focus("click", function(){
		cleanCSSId("direccion");
	});

	$("#mensaje").focus("click", function(){
		cleanCSSId("mensaje");
	});
	$("#txtCaptcha").focus("click", function(){
		cleanCSSId("txtCaptcha");
	});
	   
	/*************FIN JQUERY MARIO ***********/
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

/*****INICIO FUNCIONES MARIO*****/

function enviarForm(){
	cleanCSS();
	var valido = true;
	
	 if($("#nombre").val().length==0) valido= requerido("nombre");
	 if($("#correo").val().length==0) valido= requerido("correo");
	 if($("#telefono").val().length==0) valido= requerido("telefono");
	 if($("#direccion").val().length==0) valido= requerido("direccion");
	 if($("#mensaje").val().length==0) valido= requerido("mensaje");
	 
	 if(!validCaptcha()){
		 valido= requerido("txtCaptcha");
	  $("#mensaje-error").text("Captcha mal digitado");
	  $("#error_message").css("display","block");
	  $("#success_message").css("display","none");
	  
	 }else{
	 
		 if(valido){
		
			Liferay.Service(
					  '/integralit-servicios-portlet.usuariomail/enviar-email',
					  {
					    groupId: Liferay.ThemeDisplay.getScopeGroupId(),
					    companyId: Liferay.ThemeDisplay.getCompanyId(),
					    userId: Liferay.ThemeDisplay.getUserId(),
					    nombre: $("#nombre").val(),
					    correo: $("#correo").val(),
					    telefono: $("#telefono").val(),
					    direccion: $("#direccion").val(),
					    mensaje: $("#mensaje").val()
					  },
					  function(response) {
						  if(response.status == "ok"){
							  $("#mensaje-exito").text(response.mensaje);
							  $("#success_message").css("display","block");
							  $("#error_message").css("display","none");
							  console.log(response.mensaje);
		
						  }else{
							  $("#mensaje-error").text(response.mensaje);
							  $("#error_message").css("display","block");
							  $("#success_message").css("display","none");
							  console.log(response.mensaje);
						  }
					  }
					);
			
			 }else{
				  $("#mensaje-error").text("Faltan campos por completar, para enviar el formulario");
				  $("#error_message").css("display","block");
				  $("#success_message").css("display","none");
				 
			 }
	 
	  }
}

function requerido(id){
	$("#"+id ).css('border-color', 'red');
	return false;
}

function cleanCSS(){
	$('input[type=text]').css('border-color','');
	$('textarea').css('border-color','');
	
}

function cleanCSSId(id){
	$("#"+id ).css('border-color', '#555555');
}


function captcha(){
	console.log("captcha funcion");
    var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
	 	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
	    	'0','1','2','3','4','5','6','7','8','9');
    var i;
    for (i=0;i<6;i++){
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
                     }
        var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
        document.getElementById("mainCaptcha").innerHTML = code
		 document.getElementById("mainCaptcha").value = code
      }

function validCaptcha(){
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 =         removeSpaces(document.getElementById('txtCaptcha').value);
    if (string1 == string2){
           return true;
    }else{        
         return false;
         }
}

function removeSpaces(string){
    return string.split(' ').join('');
}

function limpiarCampos(){
	
    $("#nombre").val("");
    $("#correo").val("");
    $("#telefono").val("");
    $("#direccion").val("");
    $("#mensaje").val("");
    $("#txtCaptcha").val("");
    cleanCSS();
    captcha();
    $("#error_message").css("display","none");
	$("#success_message").css("display","none");
	
}

/*****FIN FUNCIONES MARIO*****/