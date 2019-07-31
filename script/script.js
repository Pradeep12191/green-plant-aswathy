$(document).ready(() => {
    $('.banner-slider').addClass('banner-slider-animate')
    $('.content-color').addClass('content-color-animate');
    $('.banner-slider').animate({
        opacity: 1
    }, {
        duration: 1000,
        done: function () {
            console.log("animated1")
            $('.card-about').animate({
                width: "400px",
                height: "175px"
            }, {
                done: function () {
                    console.log("animated2");
                    $('.hide').animate({
                        opacity: 1
                    }, {
                        done: function () {
                            console.log("animate3");
                            setTimeout(() => {
                                $('html, body').animate({
                                    scrollTop: 350
                                }, {
                                    done: function () {
                                        //   $('.services-card').animate({opacity:1})
                                        //   $('.services-card').css({transform:"translateY(0)"})
                                        //   $('.design-card').animate({opacity:1})
                                        //   $('.design-card').css({transform:"translateY(0)"});
                                        $('.services-card ,.design-card').each(function (index) {
                                            setTimeout(() => {
                                                $(this).animate({
                                                    opacity: 1
                                                })
                                                $(this).css({
                                                    transform: "translateY(0)"
                                                })
                                            }, 600 * index)
                                        })


                                    }
                                })
                            }, 150)

                        }
                    })
                }

            })

        }
    })
    $('.last-card').on("transitionend", function () {
        console.log("transition end")
        // $('html,body').animate({
        //     scrollTop: 760
        // }, {
        //     done: function () {
        //         $('.customer-card').each(function (index) {
        //             setTimeout(() => {
        //                 $(this).css({
        //                     opacity: 1,
        //                     transform: 'translateY(0)'
        //                 })

        //             }, 1000 * index)
        //         })
        //     }
        // })
        $('html,body').animate({
            scrollTop: 550
        }, {
            done: function () {
                $('.about-us-container').css({
                    opacity: 1,
                    transform: 'translateY(0)'
                })
            }
        })


    })

    $('.about-us-container').on('transitionend',function(){

        $('html,body').animate({scrollTop:650},{done:function(){
$('.customer-card').each(function(index){

    setTimeout(()=>{
$(this).css({opacity:1,transform:'translateY(0)'})

    },1000*index)


}


)

        }})
    })
})