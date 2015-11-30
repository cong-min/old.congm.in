
var myLoading = loadImage('http://congm.in/bing.php');
function loadImage(url){
	var o = new Image();
	o.src = url;
    if(o.success)
    {
        $('#loading').fadeOut();
        $('#loading').empty();
        $(".wallpaper").attr('src',o.src);
    }
    else
    {
        o.onload = function(){
            $('#loading').fadeOut();
            $('#loading').empty();
            $(".wallpaper").attr('src',o.src);
        }
        o.onerror = function(){  
    		$(".wallpaper").attr('src','index/img/bg.jpg');
    	};
    }
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
        $(".wallpaper").attr('src',"http://congm.in/bing.php");
        $('#loading').fadeOut();
        $('#loading').empty();
    },3000);
    $("#downTo").click(function(){
        $("html,body").stop(true).animate({scrollTop:$("#second-screen").offset().top}, 2000);
    });
});

