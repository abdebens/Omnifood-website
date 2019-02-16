$(document).ready(function(){

    $("body").niceScroll({
        cursorcolor:"#2ecc71",
        cursorwidth:"10px",
    cursoropacitymin:0.4,
    cursorborder:'none',
    cursorborderradius:4,
    autohidemode:'leave'
    });

    $('.main-nav li a').click(function(){
        $('html, body').animate({
        scrollTop : $('#' + $(this).data('value')).offset().top - 120
        
        
        },3000);

        
});
});

var nav = document.querySelector('nav');

window.onscroll = function sticky() {
    
    if(window.pageYOffset > 700)
    {
        nav.classList.add('sticky');
    }
    else
    {
        nav.classList.remove('sticky');

    }
}
var nav_icon = document.querySelector('.mobile-nav-icon');
var main_nav = document.querySelector('.main-nav');
nav_icon.addEventListener('click', function(){

    if(main_nav.style.display == "none")
    {
        main_nav.style.display = "block";
    }
    else
    {
        main_nav.style.display = "none";
    }


}) 



















