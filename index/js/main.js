var myLoading = loadImage('https://congm.in/bing.php');
function loadImage(url){
	var o = new Image();
	o.src = url;
    if(o.success){
    }else{
        o.onload = function(){
            showImage(o.src);
        }
        o.onerror = function(){
            showImage('index/img/bg.jpg');
    	};
    }
}
var iUp = (function() {
    var t = 0,
        d = 300,
        clean = function() {
            t = 0;
        },
        up = function(e) {
            setTimeout(function() {
                $(e).addClass("up")
            }, t);
            t += d;
        },
        down = function(e) {
            $(e).removeClass("up");
        },
        toggle = function(e){
            setTimeout(function() {
                $(e).toggleClass("up")
            }, t);
            t += d;
        };
    return {
        clean: clean,
        up: up,
        down: down,
        toggle: toggle
    }
})();
function showImage(url){
    $('#loading').fadeOut().empty();
    $(".wallpaper").attr('src',url);
    $(".iUp").each(function(i, e) {
        iUp.up(e);
    });
}
//随滚动变化
$(window).scroll(function(){
    var height = $(window).height();
    var scrollTop = $(window).scrollTop();
    var scrollTopBanner = scrollTop / height;
    var myname = $("#myname");
    $("#wallpaper").css("opacity",1 - 0.7 * scrollTopBanner);
    $("#from_bing,#icp").css("opacity",0.9 - 0.35 * scrollTopBanner);
    if(scrollTop >= height){
        $("#second-screen").css("background-position","center 140px");
        myname.delay(500).fadeIn("slow");
    }else{
        $("#second-screen").css("background-position","center 150px");
        myname.fadeOut(100);
    }
});

$(function(){
    setTimeout(function(){
        showImage('https://congm.in/bing.php');
    },3000);
    $("#downTo").click(function(){
        $("html,body").stop(true).animate({
            scrollTop: $("#second-screen").offset().top
        }, 2000);
    });
});


