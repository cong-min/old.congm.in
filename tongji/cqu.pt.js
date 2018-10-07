/* CNZZ统计 */
(function() {
    var box = document.createElement("div"),
        cnzz = document.createElement("script");
    box.style.display = "none";
    cnzz.src = "//s1.cnzz.com/z_stat.php?id=1257517721";
    box.appendChild(cnzz);
    if(self == top){
        document.body.appendChild(box);
    }
})();
//console.log();
(function consoleSomething() {
    if (/webkit/.test(navigator.userAgent.toLowerCase())) {
        console.log('%c ', 'line-height:150px;background-image:url("https://congm.in/index/img/congminBlack.png");background-repeat:no-repeat;background-size:auto 150px;padding:75px 265px;');
        console.log('%c @ Cong Min      https://congm.in', 'padding-left:32px;line-height:32px;font-family:"Helvetica Neue",Helvetica,Arial,"Microsoft YaHei",sans-serif;color:#666;font-size:14px;');
        console.log('%c 温馨提示：为了保证内网的安全，以及方便大家能够长期的使用内网外入，请文明和谐的使用。QQ群：312784909', 'color:#333;font-size:16px;')
    }
})();