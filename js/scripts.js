// Кнопка поиска (появление, скрытие)
$(document).ready(function() {
  $('.search-btn-link').on('click', function() {
      if ($('.search-area, .search-btn').css("display") == "none") {
       $('.search-area, .search-btn').toggleClass('active');
       $('.search-btn-link').removeClass('active');
       return false;
      }
    });
});

$(document).click(function(e) {
    if ($('.search-btn-link').css("display") == "none") {
       if ($(window).width() > 769) {  
            if ($(e.target).closest('.search-area').length || $(e.target).closest('.search-btn').length) return;
            $('.search-area, .search-btn').removeClass('active');
            $('.search-btn-link').toggleClass('active');
            e.stopPropagation();            
        }
    }
}); 

$(window).bind('resize', function(){ 
    if ($(window).width() <= 768) { 
        $('.search-btn-link').removeClass('active');
    } 
    else {
        $('.search-btn-link').addClass('active');   
    }
}).trigger('resize');


// Верхнее меню

$(window).bind('resize', function(){ 
    
    $('.main-nav-toggle-outer > a, .main-nav > li > a, .main-nav-toggle-outer ul li a').unbind( "click" );
    if ($(window).width() <= 768) { 
        
        $('.mobile-menu-btn').on('click', function() {
              if ($('.main-nav').css("right") == "-500px") {
               $('.main-nav').addClass('active-2');
               $('.mobile-menu-btn').addClass('active');
               $('.overlay').fadeIn(200); 
              }
              else {
               $('.main-nav').removeClass('active-2');   
               $('.mobile-menu-btn').removeClass('active'); 
               $('.overlay').fadeOut(200); 
              }
          });
        
        $('.main-nav-toggle-inner').fadeOut();        
        
        $('.main-nav-toggle-outer > a').click(function(){
          $('.main-nav-toggle-outer').children().removeClass('active-3');
          $('.main-nav-toggle-outer ul').slideUp();
           if ($(this).next().is(":visible")){
               $(this).next().slideUp();           
           } 
           else {
               $(this).next().slideToggle();
           }
          return false;
        });
        
        $('.main-nav > li > a').click(function (){      
            $('.main-nav > li > a, .main-nav-toggle-outer a').removeClass('active-4');
            $(this).toggleClass('active-4');   
        }),        
        $('.main-nav-toggle-outer ul li a').click(function(){
            $('.main-nav-toggle-outer ul li a').removeClass('active-4');
            $(this).addClass('active-4');
        }); 
    }
    else {
        $('.main-nav > li > a, .main-nav-toggle-outer a').removeClass('active-4');
        
        $('.main-nav-toggle-outer').each(function() { 
        $(this).hover( 
        function () { $(this).children('').addClass('active-3'); }, 
        function () { $(this).children().removeClass('active-3'); } 
        ); 
        });
            
        $('.overlay').fadeOut();
        $('.main-nav').removeClass('active-2');   
        $('.mobile-menu-btn').removeClass('active'); 
        $('.main-nav-toggle-inner').fadeIn();        
    }
}).trigger('resize');

// Меню каталога
  $(document).ready(function () {
      var checkCookie = $.cookie("sub-nav");
      if (checkCookie != "") {
        $('#menu > li.sub > a:eq('+checkCookie+')').addClass('active').next().show();
      }
      $('#menu > li.sub > a').click(function(){
          var navIndex = $('#menu > li.sub > a').index(this);
          $.cookie("sub-nav", navIndex);
          $('#menu li ul').slideUp();
           if ($(this).next().is(":visible")){
               $(this).next().slideUp();
           } else {
           $(this).next().slideToggle();
           }
           $('#menu li a').removeClass('active');
           $(this).addClass('active');
           return false;
      });
        var checkCookie = $.cookie("sub-link");
      if (checkCookie != "") {
        $('#menu > li.sub > ul li a:eq('+checkCookie+')').addClass('active');
      }
        $('.sub ul li a').click(function(){
            var subIndex = $('.sub ul li a').index(this);
          $.cookie("sub-link", subIndex);
       $('.sub ul li a').removeClass('active');
       $(this).addClass('active');
    });

    var checkCookie = $.cookie("sub-nav-2");
      if (checkCookie != "") {
        $('.sub-menu > li.sub-2 > a:eq('+checkCookie+')').addClass('active').next().show();
      }
      $('.sub-menu > li.sub-2 > a').click(function(){
          var navIndex = $('.sub-menu > li.sub-2 > a').index(this);
          $.cookie("sub-nav-2", navIndex);
          $('.sub-menu li ul').slideUp();
           if ($(this).next().is(":visible")){
               $(this).next().slideUp();
           } else {
           $(this).next().slideToggle();
           }
           $('.sub-menu li a').removeClass('active');
           $(this).addClass('active');
           return false;
      });
        var checkCookie = $.cookie("sub-link-2");
      if (checkCookie != "") {
        $('.sub-menu > li.sub-2 > ul li a:eq('+checkCookie+')').addClass('active');
      }
        $('.sub-2 ul li a').click(function(){
            var subIndex = $('.sub-2 ul li a').index(this);
          $.cookie("sub-link-2", subIndex);
       $('.sub-2 ul li a').removeClass('active');
       $(this).addClass('active');
    });      
});

// Меню каталога в мобильной версии
$(window).bind('resize', function(){ 
    if ($(window).width() <= 768) {
        $('.catalog-nav h2').unbind( "click" );
        $('#menu').slideUp(200);
        $('.catalog-nav h2').click(function() {
            if ($('#menu').css("display") == "none") {            
                $('#menu').slideDown(200);
            } 
            else {
                $('#menu').slideUp(200);
            }
        });
    }
    else {        
        $('.catalog-nav h2').unbind( "click" );
        $('#menu').slideDown(200);
    }
}).trigger('resize');

// Модальные окна
$(document).ready(function() {
  $('a.modal-btn, a.modal-btn-2').click(function(e) {
      e.preventDefault();
      var id = $(this).attr('href');
    
        $('.overlay').fadeIn(200); 
        $(id).fadeIn(200); 
  });
    
    $('body').on('click', '.overlay, .close-modal', function(event) {
    event.preventDefault();
    $('.overlay, .modal').fadeOut('200');
    $('.main-nav').removeClass('active-2');
    $('.mobile-menu-btn').removeClass('active');  
    $('.main-nav-toggle-outer-mobile a').removeClass('active-4'); 
    });  
    
  $('a.ask-question-btn').click(function(e) {
      e.preventDefault();
      var id = $(this).attr('href');
    
        $('.overlay').fadeIn(200); 
        $(id).fadeIn(200); 
  });
});

// Табы на странице с товаром
$(function(){

	$(".tovar-desc-tabs").on("click", ".nav-tabs", function(){

		var tabs = $(".tovar-desc-tabs .nav-tabs"),
		    cont = $(".tovar-desc-tabs .tabs");

		// Удаляем классы active
		tabs.removeClass("active");
		cont.removeClass("active");
		// Добавляем классы active
		$(this).addClass("active");
		cont.eq($(this).index()).addClass("active");

		return false;
	});
});

//Magnific gallery
$(document).ready(function() {
$('.gallery-content-link').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});
});

//Увеличение фото при клике для слайдера с лицензиями
$(function(){
  $('.application-content-items-img img, .manufacture-content-items-img img').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div class="fullsize"><img src="'+i_path+'"><div class="close-popup flex center"><i><span>x</span></i></div></div>');
    $('.overlay, .fullsize').fadeIn('200');
  });
  $('body').on('click', '.close-popup, .overlay', function(event) {
    event.preventDefault();
    $('.overlay, .fullsize').fadeOut('200', function() {
      $('.close-popup, .fullsize').remove();
    });
  });
});

//Разворачивающийся текст при клике
$(document).ready(function() {
    $('.answeres-content-items').readmore({
        speed: 300,
        maxHeight: 200,
        height: 'auto',
        heightMargin: 16,
        moreLink: '<a href="#">Развернуть ответ</a>',
        lessLink: '<a href="#">Свернуть ответ</a>',
        embedCSS: false,
        sectionCSS: 'display: block; width: 100%;',
        startOpen: false
    });
});

// Форма обратной связи
 	function call() {
 	  var msg   = $('#form-call').serialize();
      $.ajax({
          type: 'POST',
          url: 'forma.php',
          data: msg,
          success: function(data) {

            	if (data.result==1){
	                $('#call-form-modal').fadeOut(200);
            		$('#form_thank_you').fadeIn(200);
        			$('#form-call')[0].reset();
                    setTimeout(function(){$('.overlay, #form_thank_you').fadeOut('200')}, 2000);
            	}
              
                else{

	                $('#call-form-modal').fadeOut(200);
	    		    $('#form_error').fadeIn(200);
	    		    setTimeout(function(){$('#form_error').fadeOut('200')}, 2000);
	    		    setTimeout(function(){$('#call-form-modal').fadeIn('200')}, 2000);

            	}
          },
          error:  function(xhr, str){
	    		$('#call-form-modal').fadeOut(200);
	    		$('#form_error_2').fadeIn(200);
                setTimeout(function(){$('.overlay, #form_error_2').fadeOut('200')}, 2000);
          }
        });     
    };

 	function call2() {
 	  var msg_2   = $('#form-question').serialize();
      $.ajax({
          type: 'POST',
          url: 'forma_2.php',
          data: msg_2,
          success: function(data) {

            	if (data.result==1){
	                $('#question-form-modal').fadeOut(200);
            		$('#form_thank_you_q').fadeIn(200);
        			$('#form-question')[0].reset();
                    setTimeout(function(){$('.overlay, #form_thank_you_q').fadeOut('200')}, 2000);
            	}
              
                else{

	                $('#question-form-modal').fadeOut(200);
	    		    $('#form_error').fadeIn(200);
	    		    setTimeout(function(){$('#form_error').fadeOut('200')}, 2000);
	    		    setTimeout(function(){$('#question-form-modal').fadeIn('200')}, 2000);

            	}
          },
          error:  function(xhr, str){
	    		$('#question-form-modal').fadeOut(200);
	    		$('#form_error_2_q').fadeIn(200);
                setTimeout(function(){$('.overlay, #form_error_2_q').fadeOut('200')}, 2000);
          }
        });        
        
    };

 	function call3() {
 	  var msg_3  = $('#form-price').serialize();
      $.ajax({
          type: 'POST',
          url: 'forma_3.php',
          data: msg_3,
          success: function(data) {

            	if (data.result==1){
            		$('#form_thank_you').fadeIn(200);
            		$('.overlay').fadeIn(200);
        			$('#form-price')[0].reset();
	    		    setTimeout(function(){$('#form_thank_you, .overlay').fadeOut('200')}, 2000);
            	}
              
                else{

            		$('.overlay').fadeIn(200);
	    		    $('#form_error').fadeIn(200);
	    		    setTimeout(function(){$('#form_error, .overlay').fadeOut('200')}, 2000);

            	}
          },
          error:  function(xhr, str){
                $('.overlay').fadeIn(200);
	    		$('#form_error_2').fadeIn(200);
                setTimeout(function(){$('.overlay, #form_error_2').fadeOut('200')}, 2000);
          }
           
        });

    };

 	function calc() {
 	  var msg_4  = $('#calc-form').serialize();
      $.ajax({
          type: 'POST',
          url: 'forma_calc.php',
          data: msg_4,
          success: function(data) {

            	if (data.result==1){
            		$('#form_thank_you').fadeIn(200);
            		$('.overlay').fadeIn(200);
        			$('#calc-form')[0].reset();
	    		    setTimeout(function(){$('#form_thank_you, .overlay').fadeOut('200')}, 2000);
            	}
              
                else{

            		$('.overlay').fadeIn(200);
	    		    $('#form_error').fadeIn(200);
	    		    setTimeout(function(){$('#form_error, .overlay').fadeOut('200')}, 2000);

            	}
          },
          error:  function(xhr, str){
                $('.overlay').fadeIn(200);
	    		$('#form_error_2').fadeIn(200);
                setTimeout(function(){$('.overlay, #form_error_2').fadeOut('200')}, 2000);
          }
           
        });

    };

$(document).ready(function(){
    
    $('#add_option').click(function(event) {
        addDynamicExtraField();
        return false;
    });

    function addDynamicExtraField() {
            var div_d = $('<div/>', {'class' : 'calc-form-options flex'
            }).appendTo($('.calc-form-options-add.flex'));
            var div = $('<div class="select"><p>Выберите опцию</p><select name="select[]" class="calc-form-input"><option class="calc-form-option" value="Шлифзерно"><span>Шлифзерно</span></option><option class="calc-form-option" value="Шлифпорошки"><span>Шлифпорошки</span></option><option class="calc-form-option" value="Электрокорунд"><span>Электрокорунд</span></option></select></div><div class="select"><p>Введите количество</p><input class="calc-form-input" name="select2[]" placeholder="Введите число"></div><div class="select"><p>Выберите опцию</p><select name="select3[]" class="calc-form-input"><option class="calc-form-option" value="Шлифзерно"><span>Шлифзерно</span></option><option class="calc-form-option" value="Шлифпорошки"><span>Шлифпорошки</span></option><option class="calc-form-option" value="Электрокорунд"><span>Электрокорунд</span></option></select></div>').appendTo(div_d);
            $('<button class="delete_option calc-form-add">Удалить опцию</button>').appendTo(div_d);
            $('.delete_option').click(function(event) {
               $(this).parent().children().remove();
            });
        }
    //Для удаления первого поля. если оно не динамическое
    $('.delete_option').click(function(event) {
        $(this).parent().remove();
        return false;
    });
});