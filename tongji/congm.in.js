/* CNZZ统计 */
(function() {
    var box = document.createElement("div"),
        cnzz = document.createElement("script");
    box.style.display = "none";
    cnzz.src = "//s1.cnzz.com/z_stat.php?id=1257517667";
    box.appendChild(cnzz);
    document.body.appendChild(box);
})();
//console.log();
(function consoleSomething() {
    if (/webkit/.test(navigator.userAgent.toLowerCase())) {
        console.log('%c ', 'line-height:150px;background-image:url("https://congm.in/index/img/congminBlack.png");background-repeat:no-repeat;background-size:auto 150px;padding:75px 265px;');
        console.log('%c @ Cong Min - 闵聪      https://congm.in', 'padding-left:32px;line-height:32px;font-family:"Segoe UI","Lucida Grande",Helvetica,Arial,"Microsoft YaHei","Hiragino Sans GB","Hiragino Sans GB W3",sans-serif;color:#666;font-size:14px;');
    }
})();