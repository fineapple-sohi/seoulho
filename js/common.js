$(document).ready(function(){

    /* topbanr */
    var $topBanr = $('#topbanr .area ul');
    var tbset;

    tbset = setInterval(function(){
        tbNext();
    }, 4000);

    $('#topbanr .tb_close').on('click', function(){
        $('#topbanr').hide();
        $('#header').addClass('fixed');
    });

    $('#topbanr .tb_btn .next').on('click', function(){
        clearInterval(tbset);
        tbNext();
    });

    $('#topbanr .tb_btn .prev').on('click', function(){
        clearInterval(tbset);
        tbPrev();
    });

    function tbNext() {
        var $first_img = $topBanr.children('li').eq(0);
            
        $topBanr.stop().animate({"margin-top" : "-120px"}, 500, 'easeOutCubic', function(){
            $topBanr.append($first_img).css("margin-top","0%");
        });
    }

    function tbPrev() {
        var $last_img = $topBanr.children('li').eq(1);

        $topBanr.prepend($last_img).css({"margin-top" : "-120px"});
        $topBanr.stop().animate({"margin-top" : "0%"}, 500, 'easeOutCubic', function(){
            $topBanr.prepend($last_img);
        });
    }


    /* maintit */
    var titSwiper = new Swiper('.tit_slide', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        speed: 400,
        autoplay: {
            delay: 4000,
          },
        loop: true,
    });


    /* implant */
    var btnArr = new Array();
    btnArr = ['당일 발치 임플란트', '3d 네비게이션 임플란트', '뼈이식 임플란트']

    var impleswiper = new Swiper('.imple_slide', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                // return '<span class="' + className + '">' + (index + 1) + '</span>';
                return '<span class="' + className + '">' + btnArr[index] + '</span>';
            },
        },
        speed: 500,
        autoplay: {
            delay: 3600,
          },
        loop: true,
        effect: 'fade',
    });


    /* equip */
    var $equipLi = $('#special .equip ul li');
    var idx = 0;
    var eqLeng = $('#special .equip ul li').length;

    $equipLi.on('click', function(){
        idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
    });

    $equipLi.eq(0).addClass('on');
    setInterval(function(){
        if(idx == eqLeng) idx = 0;
        $equipLi.eq(idx).addClass('on').siblings().removeClass('on');
        idx++;
    }, 3000);



    /* interior */
    var interiorSwiper = new Swiper('.interior_slide', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                // return '<span class="' + className + '">' + (index + 1) + '</span>';
                return '<span class="' + className + '"><img src="images/interior0' + (index + 1) + '_thumb.jpg" alt=""></span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 500,
        autoplay: {
            delay: 3600,
          },
        loop: true,
        effect: 'fade',
        
    });





    /* scroll */
    $(window).on('scroll', function(){
        var scrollT = $(this).scrollTop();

        if (scrollT > 120) {
            $('#header').addClass('fixed');
        } 
        else {
            $('#header').removeClass('fixed');
        } 
    });


});