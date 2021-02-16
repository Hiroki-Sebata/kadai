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