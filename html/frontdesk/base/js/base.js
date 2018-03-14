$(function () {
    var h=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var ajaxActionHeight = $(document).height()-100;
    var ajaxActionBL = false;
    $(document).scroll(function() {
        if($(document).scrollTop()+h >= ajaxActionHeight && !ajaxActionBL){
            ajaxActionBL = true;
            alert("是时候加载了");
        }
    });
});