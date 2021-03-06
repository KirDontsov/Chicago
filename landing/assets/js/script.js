const lis = document.querySelectorAll("li");
const a = document.querySelectorAll("li a");

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function() {
    for (let i = 0; i < lis.length; i++) {
      lis[i].classList.remove("active");
      a[i].classList.remove("active-text");
    }
    this.classList.add("active");
    a[i].classList.add("active-text");
  });
};

/*-----------------------/active menu-------------------------*/

$(window).on('scroll',function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
});

/*-----------------------/nav bar-------------------------*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// dropdown text --------------------------------------------

$(document).ready(function(){
    $("#show-1").click(function(){
        $("#hidden-1").toggle();
    });
});


$(document).ready(function(){
    $("#show-2").click(function(){
        $("#hidden-2").toggle();
    });
});

$(document).ready(function(){
    $("#show-3").click(function(){
        $("#hidden-3").toggle();
    });
});

$(document).ready(function(){
    $("#show-4").click(function(){
        $("#hidden-4").toggle();
    });
});

$(document).ready(function(){
    $("#show-5").click(function(){
        $("#hidden-5").toggle();
    });
});

$(document).ready(function(){
    $("#question-1").click(function(){
        $("#hidden-1").toggle();
    });
});

$(document).ready(function(){
    $("#question-2").click(function(){
        $("#hidden-2").toggle();
    });
});

$(document).ready(function(){
    $("#question-3").click(function(){
        $("#hidden-3").toggle();
    });
});

$(document).ready(function(){
    $("#question-4").click(function(){
        $("#hidden-4").toggle();
    });
});

$(document).ready(function(){
    $("#question-5").click(function(){
        $("#hidden-5").toggle();
    });
});

//-----------------------------------------------------------

$(document).ready(function(){
    $("#close-1").click(function(){
        $("#form-1").fadeOut(1000);
    });
    $("#btn-main").click(function(){
        $("#form-1").fadeIn(1000);
    });
});

$(document).ready(function(){
    $("#close-1").click(function(){
        $("#form-1").fadeOut(1000);
    });
    $("#btn-small-1").click(function(){
        $("#form-1").fadeIn(1000);
    });
});

//-------------------------------------------------------------


// animated css -------------------------------------------------------------

$(function() {
    var welcomeSection = $('.welcome-section'),
        enterButton = welcomeSection.find('.btn');

        setTimeout(function(){
            welcomeSection.removeClass('content-hidden');
        },800);
});

// menu-icon -------------------------------------------------------------

$(document).ready(function() {
    $(".menu-icon").on("click",function (){
        $("nav ul").toggleClass("showing");
    })
});


// form ----------------------------------------------------


$(document).ready(function(){
            $('#btn_submit').click(function(){
                // собираем данные с формы
                var user_name    = $('#user_name').val();
                var text_comment = $('#user_phone').val();
                // отправляем данные
                $.ajax({
                    url: "action.php", // куда отправляем
                    type: "post", // метод передачи
                    dataType: "json", // тип передачи данных
                    data: { // что отправляем
                        "user_name":    user_name,
                        "user_phone": text_comment
                    },
                    // после получения ответа сервера
                    success: function(data){
                        $('.messages').html(data.result); // выводим ответ сервера
                    }
                });
            });
        });


// form 2 ----------------------------------------------------


$(document).ready(function(){
            $('#btn_bottom').click(function(){
                // собираем данные с формы
                var user_name2    = $('#user_name2').val();
                var text_comment2 = $('#user_phone2').val();
                // отправляем данные
                $.ajax({
                    url: "action2.php", // куда отправляем
                    type: "post", // метод передачи
                    dataType: "json", // тип передачи данных
                    data: { // что отправляем
                        "user_name2":    user_name2,
                        "user_phone2": text_comment2
                    },
                    // после получения ответа сервера
                    success: function(data){
                        $('.messages2').html(data.result); // выводим ответ сервера
                    }
                });
            });
        });

//  ----------------------------------------------------


$(document).ready(function(){
    var fixed_offset = 100;
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top - fixed_offset }, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
});


//  ----------------------------------------------------

$(this).keydown(function(eventObject){
    if (eventObject.which == 27)
        $('#form-1').hide();
});

//  ----------------------------------------------------


$(document).ready(function(){
            $('#btn_subscribe').click(function(){
                // собираем данные с формы
                var user_name3    = $('#user_name3').val();
                var text_comment3 = $('#user_mail3').val();
                // отправляем данные
                $.ajax({
                    url: "action3.php", // куда отправляем
                    type: "post", // метод передачи
                    dataType: "json", // тип передачи данных
                    data: { // что отправляем
                        "user_name3":    user_name3,
                        "user_mail3": text_comment3
                    },
                    // после получения ответа сервера
                    success: function(data){
                        $('.messages3').html(data.result); // выводим ответ сервера
                    }
                });
            });
        });


//  ----------------------------------------------------

$(this).keydown(function(eventObject){
    if (eventObject.which == 27)
        $('#form-2').fadeOut(1000);
});



$(document).ready(function () {
    setTimeout(function(){ 
        $("#form-2").fadeIn(1000); }, 26000);
    $("#close-2").click(function(){
        $("#form-2").fadeOut(1000);
    });
});










