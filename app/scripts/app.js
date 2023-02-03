// import svg4everybody from 'svg4everybody';
// import slick from "slick-carousel";
import $ from 'jquery';



$(() => {


  const swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper__swap-right",
      prevEl: ".swiper__swap-left",
    },
  });

  $(document).ready(function($) {
    $('.promo__button').on('click', function() {
      $('.lead-catcher').fadeIn();
      return false;
    });	
  });

  $('.lead-catcher__button-close').on('click',function() {
		$(this).parents('.lead-catcher').fadeOut();
		return false;
	});
  
  $(document).ready(function() {
    $('.promo__check').on('click', function() {
        $('.promo__menu-burger').toggleClass('active_menu-burger');
    });
});

});
