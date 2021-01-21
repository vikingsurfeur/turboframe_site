






//NAV STYLE 1
//========================
//==========================
//==============================
const navSlide = () =>{
  const burger = document.querySelector('.bouton-burger');
  const nav = document.querySelector('.menu-links');
  const navLinks = document.querySelectorAll ('.menu-links li');

// Evenement au click du burger

  burger.addEventListener('click',()=>{
      nav.classList.toggle('menu-actif');

//animation des liens du menu 
      navLinks.forEach((link, index)=>{
          if(link.style.animation){
              link.style.animation ='';
          }else{
            link.style.animation =`navLinkFade 0.5s ease forwards ${index/7+ 0.3}s`;
          }  
      });
//animation du burger
      burger.classList.toggle('toggle');
  });
}
try{
navSlide();
} catch (e){
  console.log('il y a une erreur parce que la navbar qui utilise ce code nest pas dans le html ' + e)
}






// MENU STYLE 2
//========================
//==========================
//==============================
(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});  
	
  })(jQuery); 










//MENU STYLE 3
//====================
//===========================
//================================
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
      $('.nav').addClass('affix');
      console.log("OK");
  } else {
      $('.nav').removeClass('affix');
  }
});

$('.navTrigger').click(function () {
$(this).toggleClass('active');
console.log("Clicked menu");
$("#mainListDiv").toggleClass("show_list");
$("#mainListDiv").fadeIn();

});


// ACCORDION 4 WRAP
//===============================
//=======================================
//=========================================
  $(function () {
    var $accordion, $wideScreen;
    $accordion = $('#accordion').children('li');
    $wideScreen = $(window).width() > 767;
    if ($wideScreen) {
        $accordion.on('mouseenter click', function (e) {
            var $this;
            e.stopPropagation();
            $this = $(this);
            if ($this.hasClass('out')) {
                $this.addClass('out');
            } else {
                $this.addClass('out');
                $this.siblings().removeClass('out');
            }
        });
    } else {
        $accordion.on('touchstart touchend', function (e) {
            var $this;
            e.stopPropagation();
            $this = $(this);
            if ($this.hasClass('out')) {
                $this.addClass('out');
            } else {
                $this.addClass('out');
                $this.siblings().removeClass('out');
            }
        });
    }
});





//ACCORDION 5 WRAP 
//======================
//==========================
//================================

//Variables Accordion 5 wrap
var block = '.block-w'
var active = 'active';
var inactive = 'min'
var text = '.fadetext'
var wrapper = '.wrapper'
//Remove Functions
function removeActive() {
  $(block).removeClass(active)
}
function removeInactive() {
  $(block).removeClass(inactive)
}
//jQuery - ajouter la classe .active au click d'un block 
$(block).on('click', function() {
  $(block).removeClass(inactive)
  $(this).toggleClass(active).siblings().removeClass(active).toggleClass(inactive)
})
// fonction pour ralentir l'animation retour du block en sortie
$(document).mouseover(function(e) {
  var container = $(block);
  if (container.has(e.target).length ===0) {
    setTimeout(removeInactive, 300);
    setTimeout(removeActive, 300);
  }
});



//CARDS-STYLE-3
//======================
//==========================
//===============================
//JS DE DAVID
// var card = document.querySelector('.card');
// card.addEventListener( 'click', function() {
// card.classList.toggle('flip');
// });

var cards = '.card'
var cardActive ='flip'
var cardInactive ="no-flip"

function removeCardActive(){
  $(cards).removeClass(cardActive)
}
function removeCardInactive(){
  $(cards).removeClass(cardInactive)
}
$(cards).on('click',function(){
  $(cards).remove(cardInactive)
  $(this).toggleClass(cardActive).siblings().removeClass(cardActive).toggleClass(cardInactive)
})


//COPIE COLLE

try{
  new ClipboardJS('.btn');
  } catch (e){
    console.log('try catch || .btn pour copier sur la page ?' + e)
  }

//SCROLL WINDOWTOP
function scrollWin() {
  window.scrollTo(0, 0);
}
  

// ACCORDEON-2-WRAP-1-CAROUSEL + SLIDER + ANIM FOOTER

const block1 = document.querySelector('.accordion-block2');
const block2 = document.querySelector('.accordion-block1');

let animOpenHome = false;

block1.addEventListener('mouseenter',()=>{
    if(!animOpenHome){
        block1.classList.add('open');
  
        animOpenHome=true;
    };
});
block1.addEventListener('mouseleave',()=>{
    if(animOpenHome){
        block1.classList.remove('open');
      
        animOpenHome=false;
    };
});

block2.addEventListener('mouseenter',()=>{
    if(!animOpenHome){
        block2.classList.add('open');

        animOpenHome=true;
    };
});
block2.addEventListener('mouseleave',()=>{
    if(animOpenHome){
        block2.classList.remove('open');
  
        animOpenHome=false;
    };
});