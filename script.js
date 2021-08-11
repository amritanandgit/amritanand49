$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing-1", {

        strings: ["AMRIT ANAND"],

        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing", {
        strings: ["a Computer science student" ,"a Software Engineer and Ethical Hacker", "a Developer", "a Data scientist", "an Artificial intelligence Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["a Computer science student", "a Software Engineer and Ethical Hacker", "a Developer", "a Data scientist", "an Artificial intelligence Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
var typed = new Typed(".typing-4", {

        strings: ["Hello friends , i am Amrit Anand . I am a computer science student . I am interested in studying Computer Science because I find it fascinating. When I was a child, I was absolutely attracted by computer games and later it was programming. I also like studying maths and physics, but I chose computing as my career because of its opening, modernity and lots of challenges..."],

        typeSpeed: 70,
        backSpeed: 150,
        loop: true
    });
    var typed = new Typed(".typing-5", {

        strings: ["Web development services are used to design, build, support, and evolve all types of web-based software."],

        typeSpeed: 2,
        backSpeed: 1,
        loop: true
    });
    var typed = new Typed(".typing-6", {

        strings: [" · A good advertisement is one which sells the product without drawing attention to itself."],

        typeSpeed: 2,
        backSpeed: 1,
        loop: true
    });
    var typed = new Typed(".typing-7", {


 strings: ["We take your existing site and convert it into feature-rich and elegant native apps for iOS and Android."],

        typeSpeed: 2,
        backSpeed: 1,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});