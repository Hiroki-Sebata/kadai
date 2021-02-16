$("[data-trigger]").on("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    var offcanvas_id =  $(this).attr('data-trigger');
    $(offcanvas_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
    $(".screen-overlay").toggleClass("show");
}); 

$(".btn-close, .screen-overlay").click(function(e){
    $(".screen-overlay").removeClass("show");
    $(".mobile-offcanvas").removeClass("show");
    $("body").removeClass("offcanvas-active");
}); 

const backToTop =()=>{
    if($(window).scrollTop() >= 500){
        $('.back-to-top').fadeIn();
    }else{
        $('.back-to-top').fadeOut();
    }
};

$(window).on('scroll',backToTop);

$('.back-to-top').on('click', (e)=>{
    e.preventDefault();
    $('html,body').animate(
        {
            scrollTop: 0
        }, 600,
        );
});

backToTop();

