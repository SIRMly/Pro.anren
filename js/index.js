/**
 * Created by Administrator on 2017/5/26.
 */
;(function ($){
    /*showDate();
    changeFS();
    $(window).resize(function (){
        changeFS();
        topHeight();
    });
    /!*==显示日期==*!/
    function showDate(){
        var newDate = new Date();
        var year = newDate.getFullYear();
        var month = newDate.getMonth()+1;
        month = month < 10 ? "0"+ month : month;
        var day = newDate.getDate();
        day = day < 10 ? "0"+ day : day;
        $("#date-year").html(year);
        $("#date-day").html(month+"月"+day+"日");
    }
    /!*==字体大小==*!/
    function changeFS(){
        var dateHeight = $("#date").height();
        var yearheight = dateHeight*0.5;
        var dayheight = dateHeight*0.27;
        $("#date-year").css("font-size",yearheight+"px");
        $("#date-day").css("font-size",dayheight+"px");

    }*/
    var swiper = new Swiper('#swiper-container',{
        simulateTouch: false,
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    /*==video==*/
    var video = document.getElementById("video");
    var video_btn = $("#video-btn");
    video_btn.addClass("hide");
    video.addEventListener("click", function () {
        if (video_btn.hasClass("hide")) {
            video.pause();
            video_btn.removeClass("hide");
        }
    });
    video_btn.on("click", function (){
        video.play();
        video_btn.addClass("hide");
    });

    /*==回到顶部==*/
    $("#toTop").on("click", function () {
        $("body,html").stop().animate({
            "scrollTop": 5
        }, 600);
    });



})(jQuery);